export type LicensesType = {
  licensePlate: string;
  violations: {
    licensePlate: string;
    plateColor: string;
    vehicleType: string;
    violationTime: string;
    violationLocation: string;
    violationBehavior: string;
    status: string;
    detectionUnit: string;
    resolutionPlaces: {
      name: string;
      address: string;
    }[];
  }[];
};
