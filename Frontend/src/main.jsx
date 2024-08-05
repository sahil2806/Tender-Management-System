/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx'

import { Provider } from 'react-redux';
import store from './store/store.js'

import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

let persistor = persistStore(store);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/login",
            element: (
                <Login />
            ),
        },
        {
            path: "/signup",
            element: (
              <Signup />
            ),
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <PersistGate persistor={persistor} > 
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
