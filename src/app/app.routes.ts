import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePage),
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./pages/project-detail-page/project-detail-page').then((m) => m.ProjectDetailPage),
  },
  { path: '**', redirectTo: '' },
];
