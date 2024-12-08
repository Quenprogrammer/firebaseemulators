import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./invoice/invoice.component').then(m => m.InvoiceComponent),
  },
  {
    path: 'invoice',
    loadComponent: () => import('./invoice/invoice.component').then(m => m.InvoiceComponent),
  },
  {
    path: 'invoiceDetails',
    loadComponent: () => import('./invoice/invoice-details/invoice-details.component').then(m => m.InvoiceDetailsComponent),
  },
  {
    path: 'customers',
    loadComponent: () => import('./customers-list/customers-list.component').then(m => m.CustomersListComponent),
  },
];
