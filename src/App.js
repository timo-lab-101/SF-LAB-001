import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

// 懒加载页面组件
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Trade = lazy(() => import('./pages/Trade'));

function App() {
  return (
    <Router>
      <Navbar />
      {/* 使用 Suspense 包裹懒加载组件 */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trade" element={<Trade />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
