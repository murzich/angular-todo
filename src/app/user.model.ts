export class User {
  public name: string;
  public age: number;
  public lastName?: string

  constructor(json: any) {
    this.name = json.userName;
    this.age = json.userAge;
    this.lastName = json.userLastName;
  }
}
