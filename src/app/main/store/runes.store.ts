import { State, Action, StateContext } from '@ngxs/store';

export class SaveRunes {
  static readonly type = '[Zoo] SaveRunes';
  constructor(public runes) {}
}

export interface RunesStateModel {
  branch: 'precision' | 'domination' | 'sorcery' | 'inspiration' | 'resolve';
  secondary: 'precision' | 'domination' | 'sorcery' | 'resolve' | 'inspiration';
  mainList: Array<number>;
  secondaryList: Array<number>;
}

@State<RunesStateModel>({
  name: 'runes',
  defaults: {
    branch: 'precision',
    secondary: 'domination',
    mainList: [],
    secondaryList: []
  }
})
export class ZooState {
  @Action(SaveRunes)
  SaveRunes(ctx: StateContext<RunesStateModel>, action: SaveRunes) {
    console.log(action)
    ctx.patchState({
      ...action.runes
    });
  }
}
