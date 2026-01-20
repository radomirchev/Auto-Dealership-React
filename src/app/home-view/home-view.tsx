import { IgrButton, IgrCarousel, IgrCarouselSlide } from '@infragistics/igniteui-react';
import styles from './home-view.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function HomeView() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("column-layout home-view-container")}>
        <div className={classes("row-layout hero-section")}>
          <div className={classes("row-layout hero-max-width-container")}>
            <div className={classes("column-layout hero-content")}>
              <div className={classes("column-layout hero-titles")}>
                <h2 className={classes("content")}>
                  <span>Find Your Dream Car</span>
                </h2>
                <h6 className={classes("content")}>
                  <span>New and Used Vehicles Available Now</span>
                </h6>
              </div>
              <div className={classes("column-layout hero-actions")}>
                <div className={classes("row-layout hero-actions")}>
                  <IgrButton type="button" className={classes("browse-new-cars-button")}>
                    <span>Browse New Cars</span>
                  </IgrButton>
                  <IgrButton variant="outlined" type="button" className={classes("browse-new-cars-button")}>
                    <span>Browse Used Cars</span>
                  </IgrButton>
                </div>
                <p className={classes("typography__body-2 hero-engage-statement")}>
                  <span>Explore our wide selection and drive away happy.</span>
                </p>
              </div>
            </div>
            <img src="/src/assets/Auto%20generated%20image%20for%206eea0385-197a-4795-9392-7c25a7f0f28c-a963ddda-49bd-42e4-b4b9-e92fcaf98e66.png" alt="" className={classes("hero-image")} />
          </div>
        </div>
        <div className={classes("row-layout image-carousel-section")}>
          <div className={classes("column-layout image-carousel-container")}>
            <div className={classes("column-layout image-carousel-titles")}>
              <h4 className={classes("image-carousel-title")}>
                <span>Featured New Cars</span>
              </h4>
              <h6 className={classes("image-carousel-subtitle")}>
                <span>SUV, Sedan, and Combi</span>
              </h6>
            </div>
            <IgrCarousel vertical={false} animationType="slide" interval={3000} indicatorsOrientation="end" className={classes("featured-new-cars-carousel")}>
              <IgrCarouselSlide className={classes("row-layout suv-slide")}>
                <img src="/src/assets/Auto%20generated%20image%20for%208c1574fb-2561-49c1-8b97-82d042bb72fc-d6042f43-f465-44be-97c7-a3ea664c1366.png" alt="" className={classes("suv-image")} />
              </IgrCarouselSlide>
              <IgrCarouselSlide className={classes("row-layout suv-slide")}>
                <img src="/src/assets/Auto%20generated%20image%20for%20e4760c13-407d-4e00-9c7b-cb4793e8bec9-744cf5dc-ea3e-4dfd-ac81-ed14e5eeb0da.png" alt="" className={classes("suv-image")} />
              </IgrCarouselSlide>
              <IgrCarouselSlide className={classes("row-layout suv-slide")}>
                <img src="/src/assets/Auto%20generated%20image%20for%20ca3a398c-fea9-4f06-a002-8b39400bdb3a-6f0034b0-db43-4aad-a001-2ac8c1814af6.png" alt="" className={classes("suv-image")} />
              </IgrCarouselSlide>
            </IgrCarousel>
          </div>
        </div>
        <div className={classes("row-layout image-gallery-section")}>
          <div className={classes("column-layout image-carousel-container")}>
            <div className={classes("column-layout image-carousel-titles")}>
              <h4 className={classes("image-carousel-title")}>
                <span>Our Showroom</span>
              </h4>
              <h6 className={classes("image-carousel-subtitle")}>
                <span>Explore our collection</span>
              </h6>
            </div>
            <div className={classes("row-layout image-gallery-grid")}>
              <img src="/src/assets/Auto%20generated%20image%20for%20ed9cd3c7-683d-4cd1-95ba-0d2dbeed4996-ecd33999-58eb-4fd3-9c22-1423c646025a.png" alt="" className={classes("suv-image")} />
              <img src="/src/assets/Auto%20generated%20image%20for%2043362ae3-f611-4cd0-9543-d7f29f852dd3-42b7c73d-bf7b-4fc5-ba8d-1a57197effc1.png" alt="" className={classes("suv-image")} />
              <img src="/src/assets/Auto%20generated%20image%20for%20e18fa910-a800-47b5-aa56-7956ac8e71a4-9f6cee93-9adf-4d8a-a8a4-26355592435b.png" alt="" className={classes("suv-image")} />
              <img src="/src/assets/Auto%20generated%20image%20for%203950ded1-aa1b-447d-b825-8543ac0007f3-76de5841-3b34-4d15-8c17-1a1cb9de858e.png" alt="" className={classes("suv-image")} />
              <img src="/src/assets/Auto%20generated%20image%20for%207a078f37-9f71-4180-8f3b-5c7d744fceb7-61852f53-a8c7-46e5-84f4-a59925e3816c.png" alt="" className={classes("suv-image")} />
              <img src="/src/assets/Auto%20generated%20image%20for%2006c1c0a0-a985-4c7c-b03f-ac496a876aa8-a041f904-a5a4-423d-86e7-b81926fdf9d4.png" alt="" className={classes("suv-image")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
