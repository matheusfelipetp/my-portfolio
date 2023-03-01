import { MainContent, ProjectContent, TechContent } from '@/components';
import { Route, Routes } from 'react-router-dom';
import { ContactContent } from './components/ContactContent';

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/tech" element={<TechContent />} />
      <Route path="/projects" element={<ProjectContent />} />
      <Route path="/contact" element={<ContactContent />} />
    </Routes>
  );
};
