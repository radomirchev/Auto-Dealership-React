import { useCallback, useEffect, useState } from 'react';
import { CitiesType } from '../models/CityNames/cities-type';
import { getCities } from '../services/city-names';

export const useGetCities = () => {
  const [cities, setCities] = useState<CitiesType[]>([]);

  const requestCities = useCallback(() => {
    let ignore = false;
    getCities()
      .then((data) => {
        if (!ignore) {
          setCities(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCities();
  }, [requestCities]);

  return { requestCityNamesCities: requestCities, cityNamesCities: cities, setCityNamesCities: setCities };
}
