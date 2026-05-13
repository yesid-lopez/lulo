import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_case_studies_platform" AS ENUM('mobile', 'web');
   ALTER TABLE "case_studies" ADD COLUMN "platform" "enum_case_studies_platform" DEFAULT 'mobile' NOT NULL;
   ALTER TABLE "case_studies" ALTER COLUMN "platform" DROP DEFAULT;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies" DROP COLUMN "platform";
   DROP TYPE "public"."enum_case_studies_platform";`)
}
