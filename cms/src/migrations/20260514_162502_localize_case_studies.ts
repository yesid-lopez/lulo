import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Enables Payload localization (en/es/de) on the case-studies collection.
// Localized columns are moved out of their source tables into per-locale tables
// (case_studies_locales, case_studies_key_features_locales,
// case_studies_tags_locales). Existing English-only content is preserved by
// seeding the `en` locale rows from the original columns before they are
// dropped.
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'es', 'de');
  CREATE TABLE "case_studies_key_features_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );

  CREATE TABLE "case_studies_tags_locales" (
  	"tag" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );

  CREATE TABLE "case_studies_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"award_title" varchar,
  	"award_event" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );

  ALTER TABLE "case_studies_key_features_locales" ADD CONSTRAINT "case_studies_key_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_key_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_tags_locales" ADD CONSTRAINT "case_studies_tags_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_locales" ADD CONSTRAINT "case_studies_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "case_studies_key_features_locales_locale_parent_id_unique" ON "case_studies_key_features_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "case_studies_tags_locales_locale_parent_id_unique" ON "case_studies_tags_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "case_studies_locales_locale_parent_id_unique" ON "case_studies_locales" USING btree ("_locale","_parent_id");

  -- Backfill existing English content into the en locale rows before the
  -- source columns are dropped. Without this, all current case-study text is
  -- lost when the columns disappear.
  INSERT INTO "case_studies_locales" ("title", "description", "award_title", "award_event", "_locale", "_parent_id")
    SELECT "title", "description", "award_title", "award_event", 'en', "id" FROM "case_studies";

  INSERT INTO "case_studies_key_features_locales" ("title", "description", "_locale", "_parent_id")
    SELECT "title", "description", 'en', "id" FROM "case_studies_key_features";

  INSERT INTO "case_studies_tags_locales" ("tag", "_locale", "_parent_id")
    SELECT "tag", 'en', "id" FROM "case_studies_tags";

  ALTER TABLE "case_studies_key_features" DROP COLUMN "title";
  ALTER TABLE "case_studies_key_features" DROP COLUMN "description";
  ALTER TABLE "case_studies_tags" DROP COLUMN "tag";
  ALTER TABLE "case_studies" DROP COLUMN "title";
  ALTER TABLE "case_studies" DROP COLUMN "description";
  ALTER TABLE "case_studies" DROP COLUMN "award_title";
  ALTER TABLE "case_studies" DROP COLUMN "award_event";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies_key_features" ADD COLUMN "title" varchar;
  ALTER TABLE "case_studies_key_features" ADD COLUMN "description" varchar;
  ALTER TABLE "case_studies_tags" ADD COLUMN "tag" varchar;
  ALTER TABLE "case_studies" ADD COLUMN "title" varchar;
  ALTER TABLE "case_studies" ADD COLUMN "description" varchar;
  ALTER TABLE "case_studies" ADD COLUMN "award_title" varchar;
  ALTER TABLE "case_studies" ADD COLUMN "award_event" varchar;

  -- Restore the English values into the original columns before dropping the
  -- per-locale tables, so we don't lose data on a rollback.
  UPDATE "case_studies" cs
    SET "title" = csl."title",
        "description" = csl."description",
        "award_title" = csl."award_title",
        "award_event" = csl."award_event"
    FROM "case_studies_locales" csl
    WHERE csl."_parent_id" = cs."id" AND csl."_locale" = 'en';

  UPDATE "case_studies_key_features" kf
    SET "title" = kfl."title",
        "description" = kfl."description"
    FROM "case_studies_key_features_locales" kfl
    WHERE kfl."_parent_id" = kf."id" AND kfl."_locale" = 'en';

  UPDATE "case_studies_tags" t
    SET "tag" = tl."tag"
    FROM "case_studies_tags_locales" tl
    WHERE tl."_parent_id" = t."id" AND tl."_locale" = 'en';

  ALTER TABLE "case_studies_key_features" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "case_studies_key_features" ALTER COLUMN "description" SET NOT NULL;
  ALTER TABLE "case_studies_tags" ALTER COLUMN "tag" SET NOT NULL;
  ALTER TABLE "case_studies" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "case_studies" ALTER COLUMN "description" SET NOT NULL;

  DROP TABLE "case_studies_key_features_locales" CASCADE;
  DROP TABLE "case_studies_tags_locales" CASCADE;
  DROP TABLE "case_studies_locales" CASCADE;
  DROP TYPE "public"."_locales";`)
}
