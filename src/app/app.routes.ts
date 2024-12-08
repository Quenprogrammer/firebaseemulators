import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./invoice/invoice.component').then(m => m.InvoiceComponent),
  },
  {
    path: 'customers',
    loadComponent: () => import('./customers-list/customers-list.component').then(m => m.CustomersListComponent),
  },
];
