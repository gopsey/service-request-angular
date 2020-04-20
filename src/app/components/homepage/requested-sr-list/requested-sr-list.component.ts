import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-requested-sr-list',
  templateUrl: './requested-sr-list.component.html',
  styleUrls: ['./requested-sr-list.component.css']
})
export class RequestedSrListComponent implements OnInit {

  @Input() companyTicketsList: any;

  constructor() { }

  ngOnInit(): void {

  }

}
