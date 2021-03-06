



export class MyStyle {

  private _id: number;
  private _name: string;
  private _parameter: string;


  constructor(id: number, name: string, parameter: string) {
    this._id = id;
    this._name = name;
    this._parameter = parameter;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get parameter(): string {
    return this._parameter;
  }

  set parameter(value: string) {
    this._parameter = value;
  }
}
