import * as StorageKey from './storage_key';
import * as Api from './api';

export const MAX_LENGTH_IMAGES = 5;
export const MAX_LENGTH_FILES = 5;
export const MAX_LENGTH_VIDEOS = 1;
export const FEATURE_CURRENT_PIN = {
  ENABLED: 'ENABLED',
  CREATE_NEW: 'CREATE_NEW',
  CHANGE_PIN: 'CHANGE_PIN',
  VIEW_DIARY: 'VIEW_DIARY',
};
export { StorageKey, Api };
