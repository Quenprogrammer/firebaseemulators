
import {RouterLink} from "@angular/router";
import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss'
})
export class CustomersListComponent {

}
