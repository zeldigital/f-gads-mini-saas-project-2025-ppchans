import React, { useEffect, useState } from 'react';
import HomePage from './App';
import CaseStudiesPage from './pages/CaseStudies';
import FrameworkPage from './pages/Framework';
import MisrepresentationFixPage from './pages/MisrepresentationFix';
import CostCalculatorPage from './pages/CostCalculator';
import GuidesPage from './pages/Guides';
import FractionalPPCPage from './pages/FractionalPPC';
import FullManagementPage from './pages/FullManagement';
import CalculatorPage from './pages/Calculator';

function Router() {
  const [path, setPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  if (path === '/case-studies') return <CaseStudiesPage />;
  if (path === '/framework') return <FrameworkPage />;
  if (path === '/misrepresentation-fix') return <MisrepresentationFixPage />;
  if (path === '/cost-calculator') return <CostCalculatorPage />;
  if (path === '/guides') return <GuidesPage />;
  if (path === '/fractional-ppc-director') return <FractionalPPCPage />;
  if (path === '/google-ads-management') return <FullManagementPage />;
  if (path === '/calculator') return <CalculatorPage />;
  return <HomePage />;
}

export default Router;


