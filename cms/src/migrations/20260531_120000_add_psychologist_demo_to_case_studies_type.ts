import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_case_studies_type" ADD VALUE IF NOT EXISTS 'psychologist-demo';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   UPDATE "case_studies" SET "type" = 'featured-project' WHERE "type" = 'psychologist-demo';
  ALTER TYPE "public"."enum_case_studies_type" RENAME TO "enum_case_studies_type__old";
  CREATE TYPE "public"."enum_case_studies_type" AS ENUM('featured-project', 'hackathon', 'real-implementation');
  ALTER TABLE "case_studies"
    ALTER COLUMN "type" DROP DEFAULT,
    ALTER COLUMN "type" TYPE "public"."enum_case_studies_type" USING "type"::text::"public"."enum_case_studies_type",
    ALTER COLUMN "type" SET DEFAULT 'featured-project';
  DROP TYPE "public"."enum_case_studies_type__old";`)
}
