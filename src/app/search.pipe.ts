import {Pipe, PipeTransform} from '@angular/core';
import {Student} from './model/user-model';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(students: Student[], beg: number, end: number): any {
    // console.log(beg.toLocaleString());
/*    return students.filter(student => {
      return student.dateOfBirth.getTime() <= new Date(end.toLocaleString()).getTime()
        && student.dateOfBirth.getTime() >= new Date(beg.toLocaleString()).getTime();
    });*/
    return students.filter(student => {
      return student.avgMark >= beg && student.avgMark <= end;
    });
  }
}
