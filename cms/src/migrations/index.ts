import * as migration_20250911_120048 from './20250911_120048';
import * as migration_20260510_174225 from './20260510_174225';

export const migrations = [
  {
    up: migration_20250911_120048.up,
    down: migration_20250911_120048.down,
    name: '20250911_120048'
  },
  {
    up: migration_20260510_174225.up,
    down: migration_20260510_174225.down,
    name: '20260510_174225'
  },
];
