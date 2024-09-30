import {Pipe, PipeTransform} from "@angular/core";
import {RemindingStatus} from "../enums";

@Pipe({
  name: 'status',
  standalone: true,
})
export class StatusPipe implements PipeTransform {
  transform(value: RemindingStatus): string {
    switch (value) {
      case RemindingStatus.New:
        return "Новый";
      case RemindingStatus.Done:
        return "Исполнен";
      case RemindingStatus.Planned:
        return "Запланирован";
      case RemindingStatus.Expired:
        return "Просрочен";
    }
  }
}
