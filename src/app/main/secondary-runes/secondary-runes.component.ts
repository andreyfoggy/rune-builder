import { Component, OnInit } from '@angular/core';
import { runes, stats } from './../runes.constants';
import { Store } from '@ngxs/store';
import { SaveRunes } from '../store/runes.store';

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
  public casualRunesBuffer = [];
  public tempIndex;
  constructor(private store: Store) { }

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
        this.handleCasual(index, rowIndex);
        break;
        case 'stats':
        this.tree.secondaryList[rowIndex + 3] = index;
        break;
    }
    this.store.dispatch(new SaveRunes(this.tree));
  }

  private handleCasual(index, rowIndex) {
    this.tree.secondaryList[rowIndex] = index;
    if (rowIndex === this.tempIndex) return;

    this.tempIndex = rowIndex;
    this.casualRunesBuffer.push(rowIndex);
    if (this.casualRunesBuffer.length < 3) return;

    this.tree.secondaryList[this.casualRunesBuffer[0]] = null;
    this.casualRunesBuffer.shift();
    this.tree.secondaryList[rowIndex] = index;
  }
}
