import * as homeScreenList from './Home';
import * as vehicleScreenList from './Vehicle';
import * as notificationScreenList from './Notifications';
import * as settingScreenList from './Setting';

const screenList: any = {
  ...homeScreenList,
  ...vehicleScreenList,
  ...notificationScreenList,
  ...settingScreenList,
};
export default screenList;
