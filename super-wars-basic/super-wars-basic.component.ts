import { Component, OnInit } from '@angular/core';
import { details } from '../details';
import { userdetail } from '../detail';

@Component({
  selector: 'app-super-wars-basic',
  templateUrl: './super-wars-basic.component.html',
  styleUrls: ['./super-wars-basic.component.css']
})
export class SuperWarsBasicComponent implements OnInit {

  details: userdetail[];
  newdetail: userdetail;

  constructor() { }

  ngOnInit(): void {

    this.details = details;
  }

}
