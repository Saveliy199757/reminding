import { Injectable } from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {Reminding} from "../interfaces/reminding";

@Injectable()
export class EditRemindingFormService {

  constructor(private _formBuilder: FormBuilder,) {}

  init(reminding: Reminding) {
    return this._formBuilder.group({
      status: reminding.status.toString(),
      shortDescription: reminding.shortDescription,
      fullDescription: reminding.fullDescription,
      createDate: reminding.createDate,
      endDate: reminding.endDate,
    })
  }
}
