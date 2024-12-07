import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { inject } from '@angular/core';




import {RouterLink} from "@angular/router";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe
  ],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.scss'
})
export class InvoiceDetailsComponent implements OnInit{
  invoice: any = null;
  firestore: Firestore = inject(Firestore);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve 'id' from query parameters
    const invoiceId = this.route.snapshot.queryParamMap.get('id');
    if (invoiceId) {
      this.fetchInvoiceDetails(invoiceId);
    }
  }

  // Fetch the invoice details from Firestore using the 'id'
  fetchInvoiceDetails(id: string): void {
    const invoiceRef = doc(this.firestore, `customers/${id}`);
    docData(invoiceRef, { idField: 'id' }).subscribe((data:any) => {
      this.invoice = data;
      console.log('Invoice details:', this.invoice);
    });
  }

  deleteInvoice() {

  }

  updateInvoice() {

  }
}
