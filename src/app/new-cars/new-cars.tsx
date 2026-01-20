import styles from './new-cars.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function NewCars() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("column-layout new-cars-container")}>
        <h3 className={classes("new-cars-title")}>
          <span>New Cars</span>
        </h3>
      </div>
    </>
  );
}
