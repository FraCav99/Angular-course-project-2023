export class Ingredient {

  constructor(
    private _name: string,
    private _amount: number
  ) { }

  public get amount(): number {
    return this._amount;
  }

  public get name(): string {
    return this._name;
  }

  updateAmount(value: number): void {
    if (this._amount !== undefined) {
      this._amount += value;
    }
  }
}
