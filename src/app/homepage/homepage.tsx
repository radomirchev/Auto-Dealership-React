import { IgrButton, IgrIconButton, IgrNavbar, IgrSelect, IgrSelectItem } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './homepage.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function Homepage() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();
  const [value, setValue] = useState<string>('en');

  return (
    <>
      <div className={classes("column-layout homepage-container")}>
        <IgrNavbar className={classes("top-navigation-bar")}>
          <div className={classes("row-layout group")}>
            <div className={classes("row-layout navbar-title-container")}>
              <span className={classes("material-icons car_icon")}>
                <span>directions_car</span>
              </span>
              <h6 className={classes("content")}>
                <span>Auto Dealership</span>
              </h6>
            </div>
            <IgrButton variant="flat" type="button" onClick={() => navigate(`/home-view`)} className={classes("home-nav-button")}>
              <span>Home</span>
            </IgrButton>
            <IgrButton variant="flat" type="button" onClick={() => navigate(`/new-cars`)} className={classes("home-nav-button")}>
              <span>New Cars</span>
            </IgrButton>
            <IgrButton variant="flat" type="button" onClick={() => navigate(`/used-cars`)} className={classes("home-nav-button")}>
              <span>Used Cars</span>
            </IgrButton>
            <IgrButton variant="flat" type="button" onClick={() => navigate(`/offers`)} className={classes("home-nav-button")}>
              <span>Offers</span>
            </IgrButton>
            <IgrButton variant="flat" type="button" onClick={() => navigate(`/contact-us`)} className={classes("home-nav-button")}>
              <span>Contact</span>
            </IgrButton>
            <IgrButton variant="flat" type="button" onClick={() => navigate(`/login`)} className={classes("home-nav-button")}>
              <span>Login</span>
            </IgrButton>
            <IgrButton variant="flat" type="button" onClick={() => navigate(`/register`)} className={classes("home-nav-button")}>
              <span>Register</span>
            </IgrButton>
          </div>
          <div style={{ display: 'contents' }} slot="end" onClick={() => navigate(`/my-account`)}>
            <IgrIconButton variant="flat" className={classes("account-nav-button")}>
              <span className={classes("material-icons icon")}>
                <span>person</span>
              </span>
            </IgrIconButton>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrSelect outlined={true} value={value} onChange={(e) => setValue(e.detail.value ?? '')} className={classes("language-selector")}>
              <span slot="suffix">
                <span className={classes("material-icons car_icon")}>
                  <span>arrow_drop_down</span>
                </span>
              </span>
              <IgrSelectItem value="en" key="a4a9e6f6-5426-4409-93de-643bef4e177b">
                <span>en</span>
              </IgrSelectItem>
              <IgrSelectItem value="de" key="014653f4-bbb9-435e-8e33-9e50e1148159">
                <span>de</span>
              </IgrSelectItem>
              <IgrSelectItem value="bg" key="4a0e3085-1080-4178-a757-6030f6194765">
                <span>bg</span>
              </IgrSelectItem>
            </IgrSelect>
          </div>
        </IgrNavbar>
        <div className={classes("page-container")}>
          <Outlet></Outlet>
        </div>
        <div className={classes("column-layout footer-section")}>
          <div className={classes("row-layout footer-content-row")}>
            <div className={classes("row-layout footer-max-width-container")}>
              <div className={classes("column-layout footer-company-info")}>
                <div className={classes("row-layout footer-logo-row")}>
                  <span className={classes("material-icons footer-site-icon")}>
                    <span>directions_car</span>
                  </span>
                  <p className={classes("typography__subtitle-2 footer-site-name")}>
                    <span>Auto Dealership</span>
                  </p>
                </div>
                <p className={classes("typography__body-2 content_2")}>
                  <span>Auto Dealership: Your City, On Demand.</span>
                </p>
                <div className={classes("row-layout footer-social-media")}>
                  <span className={classes("imx-icon imx-twitter footer-site-icon")}></span>
                  <span className={classes("imx-icon imx-facebook footer-site-icon")}></span>
                  <span className={classes("imx-icon imx-instagram footer-site-icon")}></span>
                </div>
              </div>
              <div className={classes("column-layout footer-company-info")}>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>Shop</span>
                </p>
                <a className={classes("typography__body-2 content_2")}>
                  <span>New Cars</span>
                </a>
                <a className={classes("typography__body-2 content_2")}>
                  <span>Used Cars</span>
                </a>
                <a className={classes("typography__body-2 content_2")}>
                  <span>Offers</span>
                </a>
                <a className={classes("typography__body-2 content_2")}>
                  <span>Car Configurator</span>
                </a>
              </div>
              <div className={classes("column-layout footer-company-info")}>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>Ask</span>
                </p>
                <a className={classes("typography__body-2 content_2")}>
                  <span>Privacy Policy</span>
                </a>
                <a className={classes("typography__body-2 content_2")}>
                  <span>Terms of Service</span>
                </a>
                <a className={classes("typography__body-2 content_2")}>
                  <span>Cookie Policy</span>
                </a>
                <a className={classes("typography__body-2 content_2")}>
                  <span>FAQ</span>
                </a>
              </div>
              <div className={classes("column-layout footer-company-info")}>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>Contact Us</span>
                </p>
                <div className={classes("row-layout footer-logo-row")}>
                  <span className={classes("material-icons mail-icon")}>
                    <span>mail_outline</span>
                  </span>
                  <a className={classes("typography__body-2 customer-support-link")}>
                    <span>Customer Support</span>
                  </a>
                </div>
                <div className={classes("row-layout footer-logo-row")}>
                  <span className={classes("material-icons mail-icon")}>
                    <span>phone</span>
                  </span>
                  <p className={classes("typography__body-2 content_2")}>
                    <span>+1 800 123 4567</span>
                  </p>
                </div>
                <div className={classes("row-layout footer-logo-row")}>
                  <span className={classes("material-icons mail-icon")}>
                    <span>business</span>
                  </span>
                  <p className={classes("typography__body-2 content_2")}>
                    <span>123 Dealership Ave., Anytown USA</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes("row-layout footer-copyright-row")}>
            <p className={classes("typography__body-2 content_2")}>
              <span>© 2025 Auto Dealership - All Rights Reserved</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
