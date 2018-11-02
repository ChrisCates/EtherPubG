import { Component, OnInit } from '@angular/core';

import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public items = [
    {
      'name': 'Gold S12K',
      'asset': '/assets/gold.s12k.png',
      'cost': 0.1
    },
    {
      'name': 'Gold AKM',
      'asset': '/assets/gold.akm.png',
      'cost': 0.2
    },
    {
      'name': 'Gold AWM',
      'asset': '/assets/gold.awm.png',
      'cost': 0.3
    },
    {
      'name': 'Gold M4',
      'asset': '/assets/gold.m4.png',
      'cost': 0.5
    },
    {
      'name': 'Olive Pan',
      'asset': '/assets/olive.branch.png',
      'cost': 10.0
    }
  ];

  public activeItem = null;

  constructor(public main: MainService) {

  }

  ngOnInit() { }

}
