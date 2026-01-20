import { DrivetrainTypesType } from '../models/DrivetrainTypes/drivetrain-types-type';

export async function getDrivetrainTypes(): Promise<DrivetrainTypesType[]> {
  const response = await fetch('../../static-data/drivetrain-types-drivetrain-types-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
