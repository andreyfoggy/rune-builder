import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  public edit = false;

  constructor() { }

  ngOnInit() {
  }

  public editable() {
    this.edit = !this.edit;
  }
}
