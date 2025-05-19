import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageService {
  static async setItem<T>(key: string, value: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.log(`Error saving data to storage for key: ${key}`, error);
    }
  }

  static async getItem<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log(`Error retrieving data from storage for key: ${key}`, error);
      return null;
    }
  }

  static async multiSet(items: { key: string; value: any }[]): Promise<void> {
    try {
      const keyValuePairs: any = items.map(({ key, value }) => [key, JSON.stringify(value)]);
      await AsyncStorage.multiSet(keyValuePairs);
    } catch (error) {
      console.log('Error saving multiple items to storage', error);
    }
  }

  static async multiGet(keys: string[]): Promise<{ key: string; value: any }[]> {
    try {
      const result = await AsyncStorage.multiGet(keys);
      return result.map(([key, value]) => ({
        key,
        value: value ? JSON.parse(value) : null,
      }));
    } catch (error) {
      console.log('Error retrieving multiple items from storage', error);
      return [];
    }
  }

  static async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(`Error removing data from storage for key: ${key}`, error);
    }
  }

  static async multiRemove(keys: string[]): Promise<void> {
    try {
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.log('Error removing multiple items from storage', error);
    }
  }

  static async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log('Error clearing storage', error);
    }
  }

  static async getAllKeys(): Promise<string[]> {
    try {
      return (await AsyncStorage.getAllKeys()).slice();
    } catch (error) {
      console.log('Error retrieving all keys from storage', error);
      return [];
    }
  }
}

export default StorageService;
