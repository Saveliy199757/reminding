import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActiveEditRemindingState } from "../../common/states/active-edit-reminding.state";
import {FormGroup} from "@angular/forms";
import {EditRemindingFormService} from "../../common/services/edit-reminding-form-service";
import {map, takeUntil} from "rxjs";
import {RemindingService} from "../../common/services/reminding.service";
import {Destroy} from "../../common/helpers/destroy";

@Component({
  selector: 'app-edit-reminding',
  templateUrl: './edit-reminding.component.html',
  styleUrls: ['./edit-reminding.component.scss']
})
export class EditRemindingComponent extends Destroy implements OnInit {
  form: FormGroup;
  remindingId: number;

  constructor(private _activeEditRemindingState: ActiveEditRemindingState,
              private _router: Router,
              private _editRemindingFormService: EditRemindingFormService,
              private _remindingService: RemindingService,
              ) { super(); }

  ngOnInit() {
    this._activeEditRemindingState.reminding$
      .pipe(
        map((reminding) => {
          this.form = this._editRemindingFormService.init(reminding);
          this.remindingId = reminding.id;
        }),
        takeUntil(this.destroy)
      )
      .subscribe()
  }

  backToRemindingList() {
    this._router.navigate(['/reminding']);
  }

  send() {
    this._remindingService.setEdit({
      id: this.remindingId,
      status: Number(this.form.value.status),
      shortDescription: this.form.value.shortDescription,
      fullDescription: this.form.value.fullDescription,
      createDate: this.form.value.createDate,
      endDate: this.form.value.endDate,
    })
    this._router.navigate(['/reminding']);
  }
}
