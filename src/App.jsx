/* eslint-disable react/jsx-no-undef */
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer'; // Corrected the component name to PascalCase

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer /> {/* Corrected the component name to PascalCase */}
    </>
  );
}

export default App;
