import { IgrButton, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCombo, IgrInput, IgrSelect, IgrSelectItem } from '@infragistics/igniteui-react';
import { useState } from 'react';
import { useGetCarBodyTypes } from '../hooks/car-body-types-hooks';
import { useGetCarColors } from '../hooks/car-colors-hooks';
import { useGetCarManufacturers } from '../hooks/car-manufacturers-hooks';
import { useGetCarModels } from '../hooks/car-models-hooks';
import { useGetCarYears } from '../hooks/car-years-info-hooks';
import { useGetCities } from '../hooks/city-names-hooks';
import { useGetDrivetrainTypes } from '../hooks/drivetrain-types-hooks';
import { useGetFuelTypes } from '../hooks/fuel-types-hooks';
import { useGetPriceRanges } from '../hooks/price-ranges-hooks';
import { useGetTransmissionTypes } from '../hooks/transmission-types-hooks';
import { useGetUsedCarListings } from '../hooks/used-car-listings-with-make-model-year-milea-hooks';
import styles from './used-cars.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function UsedCars() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [value, setValue] = useState<number>(0);
  const [value1, setValue1] = useState<string>('newest');
  const { carManufacturersCarManufacturers } = useGetCarManufacturers();
  const { carModelsCarModels } = useGetCarModels();
  const { carYearsInfoCarYears } = useGetCarYears();
  const { priceRangesPriceRanges } = useGetPriceRanges();
  const { fuelTypesFuelTypes } = useGetFuelTypes();
  const { transmissionTypesTransmissionTypes } = useGetTransmissionTypes();
  const { drivetrainTypesDrivetrainTypes } = useGetDrivetrainTypes();
  const { carBodyTypesCarBodyTypes } = useGetCarBodyTypes();
  const { carColorsCarColors } = useGetCarColors();
  const { cityNamesCities } = useGetCities();
  const { usedCarListingsWithMakeModelYearMileaUsedCarListings } = useGetUsedCarListings();

  return (
    <>
      <div className={classes("column-layout used-cars-container")}>
        <div className={classes("row-layout used-car-gallery-section")}>
          <div className={classes("column-layout used-car-gallery-container")}>
            <div className={classes("column-layout used-car-gallery-header")}>
              <h3 className={classes("content")}>
                <span>Used Car Inventory</span>
              </h3>
              <p className={classes("typography__body-1 content")}>
                <span>Browse our selection of pre-owned vehicles.</span>
              </p>
            </div>
            <div className={classes("row-layout used-car-filters-sort")}>
              <div className={classes("row-layout used-car-filters")}>
                <IgrCombo outlined={true} data={carManufacturersCarManufacturers} label="Make" displayKey="id" singleSelect={true} className={classes("user-input")}></IgrCombo>
                <IgrCombo outlined={true} data={carModelsCarModels} label="Model" displayKey="id" singleSelect={true} className={classes("user-input")}></IgrCombo>
                <IgrCombo outlined={true} data={carYearsInfoCarYears} label="Year" displayKey="id" singleSelect={true} className={classes("user-input")}></IgrCombo>
                <IgrInput type="number" value={value.toString()} label="Duration" outlined={true} onChange={(e) => setValue(parseFloat(e.detail))} className={classes("user-input")}></IgrInput>
                <IgrCombo outlined={true} data={priceRangesPriceRanges} label="Price Range" displayKey="range_id" singleSelect={true} className={classes("user-input")}></IgrCombo>
                <IgrCombo outlined={true} data={fuelTypesFuelTypes} label="Fuel Type" displayKey="id" singleSelect={true} className={classes("user-input")}></IgrCombo>
                <IgrCombo outlined={true} data={transmissionTypesTransmissionTypes} label="Transmission" displayKey="id" singleSelect={true} className={classes("user-input")}></IgrCombo>
                <IgrCombo outlined={true} data={drivetrainTypesDrivetrainTypes} label="Drivetrain" displayKey="type" singleSelect={true} className={classes("user-input")}></IgrCombo>
                <IgrCombo outlined={true} data={carBodyTypesCarBodyTypes} label="Body Type" displayKey="id" singleSelect={true} className={classes("user-input")}></IgrCombo>
                <IgrCombo outlined={true} data={carColorsCarColors} label="Color" displayKey="color_id" singleSelect={true} className={classes("user-input")}></IgrCombo>
                <IgrCombo outlined={true} data={cityNamesCities} label="Location" displayKey="city_id" singleSelect={true} className={classes("user-input")}></IgrCombo>
              </div>
              <IgrSelect outlined={false} label="Sort by" value={value1} onChange={(e) => setValue1(e.detail.value ?? '')} className={classes("user-input")}>
                <IgrSelectItem value="newest" key="32ee3726-36a3-434e-8cbe-d27e9f3bc0c6">
                  <span>Newest</span>
                </IgrSelectItem>
                <IgrSelectItem value="price_low" key="c44c6cde-c522-48bc-8ae0-c44b86355888">
                  <span>Price (Low to High)</span>
                </IgrSelectItem>
                <IgrSelectItem value="price_high" key="f663d9e5-164a-43d0-b3b9-f6cfbb6986ba">
                  <span>Price (High to Low)</span>
                </IgrSelectItem>
                <IgrSelectItem value="mileage_low" key="3c9da30e-765e-44ea-9fd6-0655f42bca58">
                  <span>Mileage (Low to High)</span>
                </IgrSelectItem>
                <IgrSelectItem value="mileage_high" key="3cf3aac5-66f5-4c15-ac79-701db2f574b0">
                  <span>Mileage (High to Low)</span>
                </IgrSelectItem>
              </IgrSelect>
            </div>
            {usedCarListingsWithMakeModelYearMileaUsedCarListings?.map(() => (
              <IgrCard className={classes("used-car-card")} key={uuid()}>
                <IgrCardMedia className={classes("media-content")}>
                  <img src="/src/assets/Auto%20generated%20image%20for%20f61a4485-5738-4762-8b1d-e0b0be58a6da-99d8d7b1-1f9b-447f-a5b8-32faad17ab19.png" alt="" className={classes("image")} />
                </IgrCardMedia>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span>[[make]]</span>
                  </h3>
                  <h5 slot="subtitle">
                    <span>[[model]]</span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout card-content-container")}>
                    <h6 className={classes("content_1")}>
                      <span>[[price]]</span>
                    </h6>
                    <p className={classes("typography__body-2 content_1")}>
                      <span>[[mileage]] miles</span>
                    </p>
                    <p className={classes("typography__body-2 content_1")}>
                      <span>[[year]]</span>
                    </p>
                    <p className={classes("typography__body-2 content_1")}>
                      <span>[[fuel]]</span>
                    </p>
                  </div>
                </IgrCardContent>
                <IgrCardActions className={classes("actions-content")}>
                  <div style={{ display: 'contents' }} slot="start">
                    <IgrButton type="button" className={classes("view-details-button")}>
                      <span className={classes("material-icons")}>
                        <span>info</span>
                      </span>
                      <span>View Details</span>
                    </IgrButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
