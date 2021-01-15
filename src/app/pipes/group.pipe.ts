import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'group',
})
export class GroupPipe implements PipeTransform {
  transform(workers: { group: number }[], group: number): any[] {
    return workers.filter((worker) => worker.group == group);
  }
}
