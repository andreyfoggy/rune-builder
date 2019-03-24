import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  public editRunes = false;
  public editComment = false;
  public inputValue: string;
  public textValue: string;
  @Select(state => state.runes) test;
  constructor() { }

  ngOnInit() {
    this.test.subscribe(res => {
      console.log(res);
    });
  }

  public editable(flagToChange) {
    this[flagToChange] = !this[flagToChange];
  }

  public saveText() {
    this.editComment = false;
    this.textValue = this.inputValue;
  }
}
