import {Pipe, PipeTransform} from '@angular/core';
import {Student} from './model/user-model';


@Pipe({
  name: 'dateFilter'
})
export class DatePipe implements PipeTransform {
  transform(students: Student[], beg: Date, end: Date): any {
    // console.log(beg.toLocaleString());
       return students.filter(student => {
          return student.dateOfBirth.getTime() <= new Date(end.toLocaleString()).getTime()
            && student.dateOfBirth.getTime() >= new Date(beg.toLocaleString()).getTime();
        });
  }
}
