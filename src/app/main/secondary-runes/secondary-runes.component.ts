import { Component, OnInit } from '@angular/core';
import { runes, stats } from './../runes.constants';

@Component({
  selector: 'app-secondary-runes',
  templateUrl: './secondary-runes.component.html',
  styleUrls: ['./secondary-runes.component.less']
})
export class SecondaryRunesComponent implements OnInit {
  public runes = runes;
  public stats = stats;
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
