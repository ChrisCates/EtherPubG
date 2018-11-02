import { Component, OnInit } from '@angular/core';

import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public main: MainService) { }

  ngOnInit() {
    
  }

}
