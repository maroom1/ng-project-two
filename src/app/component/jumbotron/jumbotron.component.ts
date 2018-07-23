import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
 private jbtHeading:String;
 private jbtText:String;
 private jbtBtnText:String;
 private jbtBtnUrl:String;
  constructor() {
    this.jbtHeading='Hello World';
    this.jbtText='This is something interesting';
    this.jbtBtnText='Read More';
    this.jbtBtnUrl='/about';
   }

  ngOnInit() {
  }

}
