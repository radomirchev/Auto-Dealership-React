import styles from './contact-us.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function ContactUs() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("column-layout contact-us-container")}>
        <h3 className={classes("contact-us-page-title")}>
          <span>Contact Us</span>
        </h3>
      </div>
    </>
  );
}
