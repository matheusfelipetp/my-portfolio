import { Header, MainContent } from '@/components';
import { MobileProvider } from '@/context/MobileContext';
import '@/styles/style.css';

export const App = () => {
  return (
    <MobileProvider>
      <Header />
      <MainContent />
    </MobileProvider>
  );
};
