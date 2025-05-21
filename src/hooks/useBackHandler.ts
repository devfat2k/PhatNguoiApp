import { useEffect } from 'react';
import { BackHandler } from 'react-native';

interface IParams {
  enabled?: boolean;
  callback: () => void;
}

const useBackHandler = ({ enabled = true, callback }: IParams) => {
  useEffect(() => {
    const backHandler = () => {
      callback();
      return true;
    };

    let subscription: ReturnType<typeof BackHandler.addEventListener> | null = null;

    if (enabled) {
      // Lưu trữ giá trị trả về của addEventListener để sử dụng cho việc cleanup
      subscription = BackHandler.addEventListener('hardwareBackPress', backHandler);
    }

    return () => {
      // Cleanup sử dụng phương thức remove() từ đối tượng subscription
      if (subscription) {
        subscription.remove();
      }
    };
  }, [enabled, callback]);
};

export default useBackHandler;
