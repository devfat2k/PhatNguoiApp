import { LicensesType } from '@src/types/licenses';

export type mainStackParamList = {
  HomeScreen: undefined;
  OnboardingScreen: undefined;
  MyVehicleScreen: undefined;
  NotificationScreen: undefined;
  SettingScreen: undefined;
  SearchResultsScreen: {
    data: LicensesType;
  };
  PrivacyScreen: undefined;
  VehicleDetailScreen: undefined;
  AddVehicleScreen: undefined;
  EditVehicleScreen: undefined;
  PremiumScreen: undefined;
  ConfigNotificationScreen: undefined;
  AuthScreen: undefined;
};
