import styles from './offers.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function Offers() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("column-layout offers-container")}>
        <h3 className={classes("offers-title")}>
          <span>Special Offers</span>
        </h3>
      </div>
    </>
  );
}
