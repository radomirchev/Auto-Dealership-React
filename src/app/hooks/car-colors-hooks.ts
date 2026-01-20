import { useCallback, useEffect, useState } from 'react';
import { CarColorsType } from '../models/CarColors/car-colors-type';
import { getCarColors } from '../services/car-colors';

export const useGetCarColors = () => {
  const [carColors, setCarColors] = useState<CarColorsType[]>([]);

  const requestCarColors = useCallback(() => {
    let ignore = false;
    getCarColors()
      .then((data) => {
        if (!ignore) {
          setCarColors(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCarColors();
  }, [requestCarColors]);

  return { requestCarColorsCarColors: requestCarColors, carColorsCarColors: carColors, setCarColorsCarColors: setCarColors };
}
