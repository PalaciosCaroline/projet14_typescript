import Home from './pages/Home';
import Spinner from './pages/Spinner';
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const NewEmployee = lazy(() => import('./pages/NewEmployee'));
const ListEmployees = lazy(() => import('./pages/ListEmployees'));

export default function App() {
  document.title = 'HRnet';

  return (
    <Suspense fallback={<Spinner></Spinner>}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/newemployee" element={<NewEmployee />} />
        <Route path="/listemployees" element={<ListEmployees />} />
      </Routes>
    </Suspense>
  );
}
