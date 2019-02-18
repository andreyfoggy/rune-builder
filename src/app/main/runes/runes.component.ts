import { Component, OnInit } from '@angular/core';
import { runes } from './../runes.constants';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.less']
})
export class RunesComponent implements OnInit {
  public runes = runes;
  public runePage: any = [];
  public activeBranch: string;
  public hovered = -1;
  constructor() { }

  ngOnInit() {
  }

  public selectBranch(index: number) {
    this.runePage = this.runes[index];
    this.activeBranch = this.runePage.branch;
  }

}
