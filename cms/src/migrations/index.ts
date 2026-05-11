import * as migration_20250911_120048 from './20250911_120048';

export const migrations = [
  {
    up: migration_20250911_120048.up,
    down: migration_20250911_120048.down,
    name: '20250911_120048'
  },
];
