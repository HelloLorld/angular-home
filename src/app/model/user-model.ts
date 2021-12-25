export class Student {
  private _firstName: string;
  private _lastName: string;
  private _patronymic: string;
  private _dateOfBirth: Date;
  private _avgMark: number;


  constructor(lastName: string, firstName: string, patronymic: string, dateOfBirth: Date, avgMark: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._patronymic = patronymic;
    this._dateOfBirth = dateOfBirth;
    this._avgMark = avgMark;
  }

  get fullName(): string {
    return this._lastName + ' ' + this._firstName + ' ' + this._patronymic;
  }

  public getDateOfBirth(): string {
    const time = this._dateOfBirth.toLocaleString().split(',');
    return time[0];
  }

  get avgMark(): number {
    return this._avgMark;
  }


  get dateOfBirth(): Date {
    return this._dateOfBirth;
  }

  get lastName(): string {
    return this._lastName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  set patronymic(value: string) {
    this._patronymic = value;
  }

  set dateOfBirth(value: Date) {
    this._dateOfBirth = value;
  }

  set avgMark(value: number) {
    this._avgMark = value;
  }
}
