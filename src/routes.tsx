import { MainContent, ProjectContent, TechContent } from '@/components';
import { Route, Routes } from 'react-router-dom';

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/tech" element={<TechContent />} />
      <Route path="/projects" element={<ProjectContent />} />
    </Routes>
  );
};
