import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECTS } from './data/portfolio.content';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'projects/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return PROJECTS.map((project) => ({ id: project.id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
