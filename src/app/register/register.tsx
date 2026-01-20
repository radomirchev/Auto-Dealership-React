import { IgrButton, IgrInput } from '@infragistics/igniteui-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './register.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function Register() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();
  const [value, setValue] = useState<string | undefined>();
  const [value1, setValue1] = useState<string | undefined>();
  const [value2, setValue2] = useState<string | undefined>();
  const [value3, setValue3] = useState<string | undefined>();

  return (
    <>
      <div className={classes("row-layout register-container")}>
        <div className={classes("row-layout register-form-container")}>
          <div className={classes("column-layout register-column-layout")}>
            <div className={classes("column-layout register-titles-container")}>
              <h4 className={classes("content")}>
                <span>Create Account</span>
              </h4>
              <h6 className={classes("content")}>
                <span>Join our community</span>
              </h6>
            </div>
            <div className={classes("column-layout register-inputs-container")}>
              <IgrInput value={value} label="Full Name" placeholder="Enter your full name" required={true} outlined={true} onChange={(e) => setValue(e.detail)} className={classes("register-full-name")}>
                <p slot="value-missing">This field is required</p>
              </IgrInput>
              <IgrInput type="email" value={value1} label="Email address" placeholder="your.email@example.com" required={true} outlined={true} onChange={(e) => setValue1(e.detail)} className={classes("register-full-name")}>
                <p slot="value-missing">This field is required</p>
              </IgrInput>
              <IgrInput type="password" value={value2} label="Password" placeholder="Create a password" required={true} outlined={true} onChange={(e) => setValue2(e.detail)} className={classes("register-full-name")}>
                <p slot="value-missing">This field is required</p>
              </IgrInput>
              <IgrInput type="password" value={value3} label="Password" placeholder="Confirm your password" required={true} outlined={true} onChange={(e) => setValue3(e.detail)} className={classes("register-full-name")}>
                <p slot="value-missing">This field is required</p>
              </IgrInput>
              <IgrButton type="button" className={classes("create-account-button")}>
                <span>Create account</span>
              </IgrButton>
            </div>
            <div className={classes("row-layout sign-in-prompt-row")}>
              <p className={classes("typography__body-2 content")}>
                <span>Already have an account?</span>
              </p>
              <a target="_blank" onClick={() => navigate(`/login`)} className={classes("typography__body-2 sign-in-link")}>
                <span>Sign in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
