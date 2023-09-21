export class Set {
  public name: string;
  public description: string;
  public parts: number;
  public imagePath: string;
  public theme: string;

  constructor(
    name: string,
    description: string,
    parts: number,
    imagePath: string,
    theme: string
  ) {
    this.name = name;
    this.description = description;
    this.parts = parts;
    this.imagePath = imagePath;
    this.theme = theme;
  }
}
