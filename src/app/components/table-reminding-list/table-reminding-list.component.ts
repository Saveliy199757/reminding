import { Component } from '@angular/core';
import { RemindingService } from '../../common/services/reminding.service';
import { Observable } from 'rxjs';
import { Reminding } from '../../common/interfaces/reminding';
import {Router} from "@angular/router";

@Component({
  selector: 'app-table-reminding-list',
  templateUrl: './table-reminding-list.component.html',
  styleUrls: ['./table-reminding-list.component.scss']
})
export class TableRemindingListComponent {
  remindingList$: Observable<Reminding[]> = this._remindingService.getAll();
  displayedColumns: Array<keyof Reminding> = ['status', 'shortDescription', 'createDate', 'endDate'];

  constructor(private _remindingService: RemindingService, private _router: Router) { }

  editRow(id: number) {
     this._router.navigate(['/reminding', id]);
  }
}
