import * as homeScreenList from './Home';
import * as vehicleScreenList from './Vehicle';
import * as notificationScreenList from './Notifications';
import * as settingScreenList from './Setting';
import * as premiumScreenList from './Premium';
const screenList: any = {
  ...homeScreenList,
  ...vehicleScreenList,
  ...notificationScreenList,
  ...settingScreenList,
  ...premiumScreenList,
};
export default screenList;
