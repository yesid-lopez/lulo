import * as migration_20250911_120048 from './20250911_120048';
import * as migration_20260511_120700 from './20260511_120700';
import * as migration_20260513_120000 from './20260513_120000';

export const migrations = [
  {
    up: migration_20250911_120048.up,
    down: migration_20250911_120048.down,
    name: '20250911_120048',
  },
  {
    up: migration_20260511_120700.up,
    down: migration_20260511_120700.down,
    name: '20260511_120700'
  },
  {
    up: migration_20260513_120000.up,
    down: migration_20260513_120000.down,
    name: '20260513_120000'
  },
];
