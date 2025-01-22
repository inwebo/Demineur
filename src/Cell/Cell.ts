import {Cell as BaseCell} from '@inwebo/grid.js'
import Vector2D from "@inwebo/vector"

export default class Cell extends BaseCell {
  private _hasFlag: boolean
  private _neighborBombs: number
  private _hasBomb: boolean

  get hasFlag(): boolean {
    return this._hasFlag;
  }

  set hasFlag(value: boolean) {
    this._hasFlag = value;
  }

  get neighborBombs(): number {
    return this._neighborBombs;
  }

  set neighborBombs(value: number) {
    this._neighborBombs = value;
  }

  get hasBomb(): boolean {
    return this._hasBomb;
  }

  set hasBomb(value: boolean) {
    this._hasBomb = value;
  }

  constructor(index: Vector2D) {
    super(index);
    this._hasFlag = false;
    this._neighborBombs = 0;
    this._hasBomb = false;
  }
}
