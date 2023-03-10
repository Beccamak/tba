import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { DisplayDetailsProvider } from './contexts/display.details.context';
import {CategoriesProvider} from './contexts/categories.context.jsx';
import { Provider } from 'react-redux';
import { FilterDetailsProvider } from './contexts/filter.details';
import ScrollTopToDown from './components/scrollTopToDown/scrollTopToDown.component';
import { Fragment } from 'react';
import { store, persistor } from './store/store';
import {PersistGate }from 'redux-persist/integration/react';



const container = document.getElementById('root');
const root = createRoot( container );
root.render(
  <React.StrictMode>
  <Provider store={store} >
  <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter>
  
  {/*<UserProvider> remeber their clsoin tags*/}
  {/*<CategoriesProvider>*/}
  <DisplayDetailsProvider>
  <FilterDetailsProvider>
  <ScrollTopToDown>
  <App /> 
  </ScrollTopToDown>
  </FilterDetailsProvider>
  </DisplayDetailsProvider>
  </BrowserRouter>
  </PersistGate>
  </Provider>
   </React.StrictMode>
)
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
