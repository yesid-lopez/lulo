import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_case_studies_type" AS ENUM('featured-project', 'hackathon');
  ALTER TABLE "case_studies" ADD COLUMN "type" "enum_case_studies_type" DEFAULT 'featured-project' NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies" DROP COLUMN "type";
  DROP TYPE "public"."enum_case_studies_type";`)
}
