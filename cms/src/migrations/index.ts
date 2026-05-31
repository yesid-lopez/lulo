import * as migration_20250911_120048 from './20250911_120048';
import * as migration_20260511_120700 from './20260511_120700';
import * as migration_20260513_120000 from './20260513_120000';
import * as migration_20260513_150828_add_orderable_case_studies from './20260513_150828_add_orderable_case_studies';
import * as migration_20260514_131500_add_real_implementation_to_case_studies_type from './20260514_131500_add_real_implementation_to_case_studies_type';
import * as migration_20260531_120000_add_psychologist_demo_to_case_studies_type from './20260531_120000_add_psychologist_demo_to_case_studies_type';
import * as migration_20260531_140000_add_psychologist_demos_collection from './20260531_140000_add_psychologist_demos_collection';

export const migrations = [
  {
    up: migration_20250911_120048.up,
    down: migration_20250911_120048.down,
    name: '20250911_120048',
  },
  {
    up: migration_20260511_120700.up,
    down: migration_20260511_120700.down,
    name: '20260511_120700',
  },
  {
    up: migration_20260513_120000.up,
    down: migration_20260513_120000.down,
    name: '20260513_120000',
  },
  {
    up: migration_20260513_150828_add_orderable_case_studies.up,
    down: migration_20260513_150828_add_orderable_case_studies.down,
    name: '20260513_150828_add_orderable_case_studies'
  },
  {
    up: migration_20260514_131500_add_real_implementation_to_case_studies_type.up,
    down: migration_20260514_131500_add_real_implementation_to_case_studies_type.down,
    name: '20260514_131500_add_real_implementation_to_case_studies_type'
  },
  {
    up: migration_20260531_120000_add_psychologist_demo_to_case_studies_type.up,
    down: migration_20260531_120000_add_psychologist_demo_to_case_studies_type.down,
    name: '20260531_120000_add_psychologist_demo_to_case_studies_type'
  },
  {
    up: migration_20260531_140000_add_psychologist_demos_collection.up,
    down: migration_20260531_140000_add_psychologist_demos_collection.down,
    name: '20260531_140000_add_psychologist_demos_collection'
  },
];
