import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_psychologist_demos_status" AS ENUM('draft', 'published');
  CREATE TABLE "psychologist_demos" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"specialty" varchar NOT NULL,
  	"summary" varchar NOT NULL,
  	"demo_url" varchar NOT NULL,
  	"hero_image_id" integer,
  	"status" "enum_psychologist_demos_status" DEFAULT 'published' NOT NULL,
  	"_order" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "psychologist_demos_id" integer;
  ALTER TABLE "psychologist_demos" ADD CONSTRAINT "psychologist_demos_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_psychologist_demos_fk" FOREIGN KEY ("psychologist_demos_id") REFERENCES "public"."psychologist_demos"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "psychologist_demos_slug_idx" ON "psychologist_demos" USING btree ("slug");
  CREATE INDEX "psychologist_demos_hero_image_idx" ON "psychologist_demos" USING btree ("hero_image_id");
  CREATE INDEX "psychologist_demos__order_idx" ON "psychologist_demos" USING btree ("_order");
  CREATE INDEX "psychologist_demos_updated_at_idx" ON "psychologist_demos" USING btree ("updated_at");
  CREATE INDEX "psychologist_demos_created_at_idx" ON "psychologist_demos" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_psychologist_demos_id_idx" ON "payload_locked_documents_rels" USING btree ("psychologist_demos_id");

  DELETE FROM "case_studies" WHERE "type" = 'psychologist-demo';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Note: the psychologist-demo rows removed from "case_studies" in up() are not
  // restored here — they are reproducible from the seed and now live in the
  // dedicated "psychologist_demos" collection.
  await db.execute(sql`
   ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "psychologist_demos_id";
  DROP TABLE "psychologist_demos" CASCADE;
  DROP TYPE "public"."enum_psychologist_demos_status";`)
}
