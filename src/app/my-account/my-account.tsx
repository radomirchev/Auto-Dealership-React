import styles from './my-account.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function MyAccount() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("column-layout my-account-container")}>
        <h3 className={classes("my-account-title")}>
          <span>My Account</span>
        </h3>
      </div>
    </>
  );
}
