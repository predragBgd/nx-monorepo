import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
