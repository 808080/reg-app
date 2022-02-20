import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import WarnModal from './modules/Warn';
import { loggedInRoutes, loggedOutRoutes } from './routes';
import Header from './modules/Header';
import { LoadStatus } from './utils/constants';
import { fetchUser } from './store/dispatchers/user';

const App = () => {
  const { status } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const isLoading = status === LoadStatus.PENDING;
  const isLoggedIn = status === LoadStatus.SUCCESS;
  const routes = isLoggedIn ? loggedInRoutes : loggedOutRoutes;

  useEffect(() => {
    dispatch(fetchUser());
  }, [LoadStatus.PENDING]);

  return (
    <div className='container'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header routes={routes} isLoggedIn={isLoggedIn} />

          <main>
            <Routes>
              {routes.map((route) => (
                <Route path={route.path} element={<route.element />} key={route.path} />
              ))}
              <Route
                path='*'
                element={<Navigate to='/' />}
              />
            </Routes>
          </main>
          <WarnModal />
        </>
      )}
    </div>
  );
};

export default App;