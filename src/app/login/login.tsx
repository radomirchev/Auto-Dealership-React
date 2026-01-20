import { IgrButton, IgrCheckbox, IgrInput } from '@infragistics/igniteui-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './login.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function Login() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();
  const [value, setValue] = useState<string | undefined>();
  const [value1, setValue1] = useState<string | undefined>();
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <div className={classes("row-layout login-container")}>
        <div className={classes("row-layout login-form-container")}>
          <div className={classes("column-layout login-column-layout")}>
            <h4 className={classes("content")}>
              <span>Login</span>
            </h4>
            <div className={classes("column-layout login-inputs-container")}>
              <IgrInput type="email" value={value} label="Email address" required={true} outlined={true} onChange={(e) => setValue(e.detail)} className={classes("user-input")}>
                <p slot="value-missing">This field is required</p>
              </IgrInput>
              <IgrInput type="password" value={value1} label="Password" required={true} outlined={true} onChange={(e) => setValue1(e.detail)} className={classes("user-input")}>
                <p slot="value-missing">This field is required</p>
              </IgrInput>
              <div className={classes("row-layout login-options-row")}>
                <IgrCheckbox labelPosition="after" checked={checked} onChange={(e) => setChecked(!!e.detail.checked)} className={classes("user-input")}>
                  <span>Remember me</span>
                </IgrCheckbox>
                <a target="_blank" className={classes("typography__body-2 forgot-password-link")}>
                  <span>Forgot your password?</span>
                </a>
              </div>
              <IgrButton type="button" className={classes("sign-in-button")}>
                <span>Sign in</span>
              </IgrButton>
            </div>
            <div className={classes("row-layout create-account-row")}>
              <p className={classes("typography__body-2 content")}>
                <span>Don't have an account?</span>
              </p>
              <a target="_blank" onClick={() => navigate(`/register`)} className={classes("typography__body-2 create-new-account-link")}>
                <span>Create new account</span>
              </a>
            </div>
          </div>
        </div>
        <img src="/src/assets/Auto%20generated%20image%20for%2094ff16e2-a25e-4ebc-88ed-4008878ae1ef-43847e76-69cd-494a-8892-13dd25bb145f.png" alt="" className={classes("login-image")} />
      </div>
    </>
  );
}
