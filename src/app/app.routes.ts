import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sc-1',
    loadComponent: () =>
      import(
        './components/scenario-1/sc-one-parent/sc-one-parent.component'
      ).then((m) => m.ScOneParentComponent),
  },
  {
    path: 'sc-2',
    loadComponent: () =>
      import(
        './components/scenario-2/sc-two-parent/sc-two-parent.component'
      ).then((m) => m.ScTwoParentComponent),
  },
  {
    path: 'sc-3',
    loadComponent: () =>
      import(
        './components/scenario-3/sc-three-parent/sc-three-parent.component'
      ).then((m) => m.ScThreeParentComponent),
  },
  {
    path: 'sc-4',
    loadComponent: () =>
      import(
        './components/scenario-4/sc-four-parent/sc-four-parent.component'
      ).then((m) => m.ScFourParentComponent),
  },
  {
    path: 'sc-5',
    loadComponent: () =>
      import(
        './components/scenario-5/sc-five-parent/sc-five-parent.component'
      ).then((m) => m.ScFiveParentComponent),
  },
];
