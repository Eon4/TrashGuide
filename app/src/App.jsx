
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { FrontPage } from './pages/FrontPage/FrontPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { SortingPage } from './pages/SortingPage/SortingPage';
import { RecyclingPage } from './pages/RecyclingPage/RecyclingPage';
import { OrderPage } from './pages/OrderPage/OrderPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<FrontPage />} />
          <Route path='/forside' element={<FrontPage />} />
          <Route path='/sorting' element={<SortingPage />} />
          <Route path='/recycling' element={<RecyclingPage />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/*' element={<NotFoundPage />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



