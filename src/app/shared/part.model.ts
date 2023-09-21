export class Part {
  constructor(
    public number: string,
    public name: string,
    public imgPath: string | null, // might come as null from API
    public amount: number
  ) {}
}
