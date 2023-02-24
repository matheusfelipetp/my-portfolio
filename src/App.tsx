import { Header } from '@/components';
import { MobileProvider } from '@/context/MobileContext';
import '@/styles/style.css';
import { RoutesApp } from './routes';

export const App = () => {
  return (
    <MobileProvider>
      <Header />
      <RoutesApp />
    </MobileProvider>
  );
};
