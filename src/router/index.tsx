import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../components/auth';
import Login from '../pages/login';
import Order from '../pages/order';
import ReceiveStock from '../pages/receiveStock';
import ReceiveStockHandle from '../pages/receiveStockHandle';
import LeaveStock from '../pages/leaveStock';
import LeaveStockHandle from '../pages/leaveStockHandle';
import NotFound from '../pages/notFound';

function Router() {

  const auth = useContext(AuthContext);

  const isLogin = Boolean(auth.user);

  const isLoading = auth.loading;

  const authRequiredRoutes = [
    {
      path: '/',
      element: <Navigate to="/receiveStock" />,
    },
    {
      path: '/login',
      element: <Navigate to="/receiveStock" />,
    },
    {
      path: '/order',
      element: <Order />,
    },
    {
      path: '/receiveStock',
      element: <ReceiveStock />,
    },
    {
      path: '/receiveStockHandle',
      element: <ReceiveStockHandle />,
    },
    {
      path: '/leaveStock',
      element: <LeaveStock />,
    },
    {
      path: '/leaveStockHandle',
      element: <LeaveStockHandle />,
    },
    {
      path: '*',
      element: <NotFound />,
    }
  ]

  const authNotRequiredRoutes = [
    {
      path: '*',
      element: <Navigate to="/login" />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    
  ];

  let filteredRoutes
    
  if (!isLogin && !isLoading) { 
    filteredRoutes = authNotRequiredRoutes;
  } else { 
    filteredRoutes = authRequiredRoutes;
  }

  return (
    <Routes>
      {filteredRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default Router;