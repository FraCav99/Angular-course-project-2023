export class Recipe {

  constructor(
    private name: string,
    private description: string,
    private imagePath: string
  ) { }


  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getImagePath(): string {
    return this.imagePath;
  }
}
