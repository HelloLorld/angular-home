import {Component, Input} from '@angular/core';
import {Student} from './model/user-model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-home';
  students: Student[];
  student: Student;
  search = '';
  addingForm = false;
  sortFlag = false;
  sortAvg = false;
  sortDate = false;
  sortFullName = false;
  beg = new Date('1990-01-01').toISOString().slice(0, 16);
  end = new Date('2004-12-31').toISOString().slice(0, 16);
  begAvg = 2.0;
  endAvg = 5.0;

  studentForm: any = {
    firstName: '',
    lastName: '',
    patronymic: '',
    dateOfBirth: '',
    avgMark: '',
    index: ''
  };

  constructor() {
    this.students = [];
    this.students.push(new Student('Данилов', 'Руслан', 'Олегович'
      , new Date('2001-09-03'), 4.6), new Student('Василенко', 'Петр', 'Иванович'
      , new Date('1995-04-28'), 3.89), new Student('Руденко', 'Михаил', 'Петрович'
      , new Date('1999-08-11'), 4.86), new Student('Ляпушко', 'Наталья', 'Алексевна'
      , new Date('2003-04-24'), 3.67), new Student('Соловьев', 'Никита', 'Анатольевич'
      , new Date('2001-07-15'), 4.32), new Student('Крапивина', 'Марина', 'Федоровна'
      , new Date('2002-02-31'), 3.3));
  }

  sortOnOff(): void {
    this.sortFlag = !this.sortFlag;
  }

  addStudent(): void {
    console.log('add student');
    console.log(this.studentForm.firstName);
    this.student = new Student(this.studentForm.lastName, this.studentForm.firstName, this.studentForm.patronymic
      , new Date(this.studentForm.dateOfBirth.toLocaleString()), this.studentForm.avgMark);
    console.log(this.student.fullName);
    // обнуление формы
    this.students.push(this.student);
    this.clearForm();
  }

  find(student: Student): boolean {
    return this.search === student.lastName;
  }

  checkAvgMark(): boolean {
    console.log(!(this.studentForm.avgMark <= 5 && this.studentForm.avgMark >= 2));
    return this.studentForm.avgMark <= 5 && this.studentForm.avgMark >= 2;
  }

  checkDateOfBirth(): boolean {
    return new Date(this.studentForm.dateOfBirth.toLocaleString()).getTime() >= new Date('1990-01-01').getTime()
      && new Date(this.studentForm.dateOfBirth.toLocaleString()).getTime() <= new Date('2004-12-31').getTime();
  }

  deleteStudent(index: number): void {
    this.students.splice(index, 1);
  }

  addOrChange(): void {
    this.addingForm = !this.addingForm;
  }

  changeStudent(): void {
    console.log('change');
    this.students[this.studentForm.index - 1] = new Student(this.studentForm.lastName, this.studentForm.firstName
      , this.studentForm.patronymic, new Date(this.studentForm.dateOfBirth.toLocaleString()), this.studentForm.avgMark);
    this.clearForm();
  }

  checkIndex(): boolean {
    return this.studentForm.index - 1 >= 0 && this.studentForm.index - 1 <= this.students.length - 1;
  }

  sortByAvgMark(): void {
    console.log('sortAVG');
    this.sortAvg = !this.sortAvg;
    if (this.sortAvg) {
      this.students = this.students.sort(
        (obj1, obj2) => {
          if (obj1.avgMark > obj2.avgMark) {
            return 1;
          }

          if (obj1.avgMark < obj2.avgMark) {
            return -1;
          }
          return 0;
        }
      );
    }
    else {
      this.students = this.students.sort(
        (obj1, obj2) => {
          if (obj1.avgMark > obj2.avgMark) {
            return -1;
          }

          if (obj1.avgMark < obj2.avgMark) {
            return 1;
          }
          return 0;
        }
      );
    }
  }

  sortByFullName(): void {
    this.sortFullName = !this.sortFullName;
    if (this.sortFullName) {
      this.students = this.students.sort(
        (obj1, obj2) => {
          if (obj1.fullName > obj2.fullName) {
            return 1;
          }

          if (obj1.fullName < obj2.fullName) {
            return -1;
          }
          return 0;
        }
      );
    }
    else {
      this.students = this.students.sort(
        (obj1, obj2) => {
          if (obj1.fullName > obj2.fullName) {
            return -1;
          }

          if (obj1.fullName < obj2.fullName) {
            return 1;
          }
          return 0;
        }
      );
    }
  }

  sortByDateOfBirth(): void {
    this.sortDate = !this.sortDate;
    if (this.sortDate) {
      this.students = this.students.sort(
        (obj1, obj2) => {
          if (obj1.dateOfBirth.getTime() > obj2.dateOfBirth.getTime()) {
            return 1;
          }

          if (obj1.dateOfBirth.getTime() < obj2.dateOfBirth.getTime()) {
            return -1;
          }
          return 0;
        }
      );
    }
    else {
      this.students = this.students.sort(
        (obj1, obj2) => {
          if (obj1.dateOfBirth.getTime() > obj2.dateOfBirth.getTime()) {
            return -1;
          }

          if (obj1.dateOfBirth.getTime() < obj2.dateOfBirth.getTime()) {
            return 1;
          }
          return 0;
        }
      );
    }
  }

  private clearForm(): void {
    this.studentForm.firstName = '';
    this.studentForm.lastName = '';
    this.studentForm.patronymic = '';
    this.studentForm.dateOfBirth = '';
    this.studentForm.avgMark = '';
    this.studentForm.index = '';
  }
}
