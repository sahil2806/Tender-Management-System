/* eslint-disable no-unused-vars */
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom';

function App() {
 

  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App
