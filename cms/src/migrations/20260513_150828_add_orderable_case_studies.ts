import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies" ADD COLUMN "_order" varchar;
  CREATE INDEX "case_studies__order_idx" ON "case_studies" USING btree ("_order");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "case_studies__order_idx";
  ALTER TABLE "case_studies" DROP COLUMN "_order";`)
}
