import { TransmissionTypesType } from '../models/TransmissionTypes/transmission-types-type';

export async function getTransmissionTypes(): Promise<TransmissionTypesType[]> {
  const response = await fetch('../../static-data/transmission-types-transmission-types-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
