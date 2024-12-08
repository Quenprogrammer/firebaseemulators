import {RouterLink} from "@angular/router";
import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import {CurrencyPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import { FormsModule } from "@angular/forms";
import { take } from 'rxjs/operators';

interface customerData {
  id?: string;
  amountPaid: number;          // The amount paid
  balanceOutstanding: number;  // The outstanding balance
  customerName: string;        // The name of the customer
  invoice: string;
}

interface Item {
  title: string;
  detail: string;
  amount: number;
}



@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    CurrencyPipe
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent implements OnInit{

  items: Item[] = [
    {
      title: "Total paid",
      detail: "Total received",
      amount: 0
    },
    {
      title: "Total outstanding",
      detail: "Total receivable",
      amount: 0
    },
    {
      title: "Total customers",
      detail: "Total added",
      amount: 0
    }
  ];

  firestore: Firestore = inject(Firestore);
  inquiriesCollection = collection(this.firestore, 'customers');

  inquiriesMessage$: Observable<customerData[]> = collectionData(this.inquiriesCollection, { idField: 'id' }) as Observable<customerData[]>;

  invoice: customerData[] = [];
  loading: boolean = true;

  ngOnInit() {
    this.inquiriesMessage$.subscribe(inquiries => {
      this.invoice = inquiries;
      this.loading = false;
      console.log('Data Loaded:', this.invoice);
    });
  }


}
