import { Component, OnInit } from '@angular/core';

import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(public main: MainService) { }

  ngOnInit() {
    this.main.getTransactions();
  }

}
