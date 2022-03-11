import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alyssa',
  templateUrl: './alyssa.component.html',
  styleUrls: ['./alyssa.component.css']
})
export class AlyssaComponent implements OnInit {
  @Input('email') inputEmail:string | undefined;
  @Input('phone') inputPhone:string | undefined;

  constructor() { }

  ngOnInit() {
  }

}