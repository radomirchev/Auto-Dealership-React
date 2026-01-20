import { useCallback, useEffect, useState } from 'react';
import { DrivetrainTypesType } from '../models/DrivetrainTypes/drivetrain-types-type';
import { getDrivetrainTypes } from '../services/drivetrain-types';

export const useGetDrivetrainTypes = () => {
  const [drivetrainTypes, setDrivetrainTypes] = useState<DrivetrainTypesType[]>([]);

  const requestDrivetrainTypes = useCallback(() => {
    let ignore = false;
    getDrivetrainTypes()
      .then((data) => {
        if (!ignore) {
          setDrivetrainTypes(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestDrivetrainTypes();
  }, [requestDrivetrainTypes]);

  return { requestDrivetrainTypesDrivetrainTypes: requestDrivetrainTypes, drivetrainTypesDrivetrainTypes: drivetrainTypes, setDrivetrainTypesDrivetrainTypes: setDrivetrainTypes };
}
