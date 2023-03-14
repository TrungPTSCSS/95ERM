import store from './store';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Layout} from './components';
import AdministrativeInfo from './pages/AdministrativeInfo';
import HealthHistory from './pages/HealthHistory';
import HealthRecords from './pages/HealthRecords';
import HealthSummary from './pages/HealthSummary';
import {createContext} from 'react';
import Home from './pages/Home';
import {useSelector} from 'react-redux';
import Login from './pages/Login';
import Account from './pages/Account';
import NotFound from './pages/404NotFound';
export const Context = createContext();

function PrivateRoute({children}) {
  let {user} = useSelector((store) => store.auth);
  return user ? children : <Navigate to='/Login' />;
}
function App() {
  let {user} = useSelector((store) => store.auth);
  return (
    <BrowserRouter>
      <Context.Provider value={{user}}>
        <Layout
          main={
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <PrivateRoute>
                    {' '}
                    <Home />{' '}
                  </PrivateRoute>
                }
              />
              <Route
                path='/administrativeInfo'
                element={
                  <PrivateRoute>
                    {' '}
                    <AdministrativeInfo />{' '}
                  </PrivateRoute>
                }
              />
              <Route
                path='/healthSummary'
                element={
                  <PrivateRoute>
                    {' '}
                    <HealthSummary />{' '}
                  </PrivateRoute>
                }
              />
              <Route
                path='/healthHistory'
                element={
                  <PrivateRoute>
                    {' '}
                    <HealthHistory />{' '}
                  </PrivateRoute>
                }
              />
              <Route
                path='/healthRecords'
                element={
                  <PrivateRoute>
                    {' '}
                    <HealthRecords />{' '}
                  </PrivateRoute>
                }
              />
              <Route
                path='/account'
                element={
                  <PrivateRoute>
                    {' '}
                    <Account />{' '}
                  </PrivateRoute>
                }
              />
              <Route path='/Login' element={<Login />} />
              <Route path='/404' element={<NotFound />} />
              <Route path='*' element={<Navigate replace to='/404' />} />
            </Routes>
          }
        ></Layout>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
