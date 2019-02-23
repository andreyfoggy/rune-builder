import { Component, OnInit } from '@angular/core';
import { runes } from './../runes.constants';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.less']
})
export class RunesComponent implements OnInit {
  public runes = runes;
  public runePage =  runes[0];
  public activeBranch: string;
  public hovered = -1;
  public tree = {
    branch: 'precision',
    mainList: []
  };
  constructor() { }

  ngOnInit() {
  }

  public selectBranch(type: string, index, rowIndex = 0) {
    switch (type) {
      case 'branch':
        this.tree.mainList = [];
        this.runePage = this.runes[index];
        this.activeBranch = this.runePage.branch;
        this.tree.branch =  this.runePage.branch;
        break;
      case 'keystone':
        this.tree.mainList[0] = index;
        break;
      case 'casual':
        this.tree.mainList[rowIndex + 1] = index;
        break;
    }
  }
}
