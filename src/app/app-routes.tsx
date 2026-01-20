import { redirect } from 'react-router-dom';
import Homepage from './homepage/homepage';
import HomeView from './home-view/home-view';
import NewCars from './new-cars/new-cars';
import UsedCars from './used-cars/used-cars';
import Offers from './offers/offers';
import ContactUs from './contact-us/contact-us';
import Login from './login/login';
import Register from './register/register';
import MyAccount from './my-account/my-account';
import CarConfigurator from './car-configurator/car-configurator';

export const routes = [
  { index: true, loader: () => redirect('homepage') },
  { path: 'homepage', element: <Homepage />, text: 'Homepage' },
  { path: 'home-view', element: <HomeView />, text: 'Home View' },
  { path: 'new-cars', element: <NewCars />, text: 'New Cars' },
  { path: 'used-cars', element: <UsedCars />, text: 'Used Cars' },
  { path: 'offers', element: <Offers />, text: 'Offers' },
  { path: 'contact-us', element: <ContactUs />, text: 'Contact Us' },
  { path: 'login', element: <Login />, text: 'Login' },
  { path: 'register', element: <Register />, text: 'Register' },
  { path: 'my-account', element: <MyAccount />, text: 'My Account' },
  { path: 'car-configurator', element: <CarConfigurator />, text: 'Car Configurator' }
];
