import { useCallback, useEffect, useState } from 'react';
import { getTransmissionTypes } from '../services/transmission-types';
import { TransmissionTypesType } from '../models/TransmissionTypes/transmission-types-type';

export const useGetTransmissionTypes = () => {
  const [transmissionTypes, setTransmissionTypes] = useState<TransmissionTypesType[]>([]);

  const requestTransmissionTypes = useCallback(() => {
    let ignore = false;
    getTransmissionTypes()
      .then((data) => {
        if (!ignore) {
          setTransmissionTypes(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestTransmissionTypes();
  }, [requestTransmissionTypes]);

  return { requestTransmissionTypesTransmissionTypes: requestTransmissionTypes, transmissionTypesTransmissionTypes: transmissionTypes, setTransmissionTypesTransmissionTypes: setTransmissionTypes };
}
