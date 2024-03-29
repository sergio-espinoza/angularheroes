import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Item {
  name: string;
  age: number;
}

@Component({
  selector: 'app-hero-check',
  templateUrl: './hero-check.component.html',
  styleUrls: ['./hero-check.component.css']
})
export class HeroCheckComponent implements OnInit {
  input = 0;
  actionName = 'Action☻';

  item: Item = {
    name: 'item Name☺',
    age: 23
  };
  currentItem = {
    name: 'current item Name☺',
    age: 23
  };
  itemImageUrl = 'assets/img-test1.png';
  displayNone = '';
  lineThrough = '';

  @Output() deleteRequest = new EventEmitter();

  constructor(

  ) {
  }

  ngOnInit(): void {

  }

  inputAdd(): void {
    this.input++;
  }

  delete(): void {
    this.deleteRequest.emit('');
    this.displayNone = this.displayNone ? '' : 'none';
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }

}