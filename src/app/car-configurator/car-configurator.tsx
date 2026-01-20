import { IgrStep, IgrStepper } from '@infragistics/igniteui-react';
import styles from './car-configurator.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function CarConfigurator() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("column-layout car-configurator-container")}>
        <IgrStepper titlePosition="bottom" linear={true} className={classes("car-configurator-steps")}>
          <IgrStep invalid={true}>
            <div className={classes("column-layout step-content")}>
              <p className={classes("typography__body-1 model-step-content")}>
                <span>Choose your car model.</span>
              </p>
            </div>
            <p slot="title">Model</p>
          </IgrStep>
          <IgrStep invalid={true}>
            <div className={classes("column-layout step-content")}>
              <p className={classes("typography__body-1 model-step-content")}>
                <span>Select the trim level.</span>
              </p>
            </div>
            <p slot="title">Trim</p>
          </IgrStep>
          <IgrStep invalid={true}>
            <div className={classes("column-layout step-content")}>
              <p className={classes("typography__body-1 model-step-content")}>
                <span>Configure your powertrain.</span>
              </p>
            </div>
            <p slot="title">Powertrain</p>
          </IgrStep>
          <IgrStep invalid={true}>
            <div className={classes("column-layout step-content")}>
              <p className={classes("typography__body-1 model-step-content")}>
                <span>Pick an exterior color.</span>
              </p>
            </div>
            <p slot="title">Exterior Color</p>
          </IgrStep>
          <IgrStep invalid={true}>
            <div className={classes("column-layout step-content")}>
              <p className={classes("typography__body-1 model-step-content")}>
                <span>Add optional packages.</span>
              </p>
            </div>
            <p slot="title">Packages</p>
          </IgrStep>
          <IgrStep invalid={true}>
            <div className={classes("column-layout step-content")}>
              <p className={classes("typography__body-1 model-step-content")}>
                <span>Choose additional accessories.</span>
              </p>
            </div>
            <p slot="title">Accessories</p>
          </IgrStep>
          <IgrStep invalid={true}>
            <div className={classes("column-layout step-content")}>
              <p className={classes("typography__body-1 model-step-content")}>
                <span>Arrange your financing.</span>
              </p>
            </div>
            <p slot="title">Finance</p>
          </IgrStep>
          <IgrStep invalid={true}>
            <div className={classes("column-layout step-content")}>
              <p className={classes("typography__body-1 model-step-content")}>
                <span>Review your configuration.</span>
              </p>
            </div>
            <p slot="title">Summary</p>
          </IgrStep>
        </IgrStepper>
      </div>
    </>
  );
}
