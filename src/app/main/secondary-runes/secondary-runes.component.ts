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
  public runePage =  runes[1];
  public activeBranch = 'domination';
  public hovered = -1;
  public tree = {
    secondary: 'domination',
    secondaryList: []
  };
  constructor() { }

  ngOnInit() {
  }

  public selectBranch(type: string, index: number, rowIndex: number) {
    switch (type) {
      case 'branch':
        this.tree.secondaryList = [];
        this.runePage = this.runes[index];
        this.activeBranch = this.runePage.branch;
        this.tree.secondary =  this.runePage.branch;
        break;
      case 'casual':
        this.tree.secondaryList[rowIndex] = index;
        break;
        case 'stats':
        this.tree.secondaryList[rowIndex + 3] = index;
        break;
    }
  }

}
