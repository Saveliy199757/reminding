import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {ActiveEditRemindingState} from "../states/active-edit-reminding.state";
import {RemindingService} from "../services/reminding.service";
import {Observable, tap} from "rxjs";
import {Reminding} from "../interfaces/reminding";

@Injectable()
export class EditRemindingResolver implements Resolve<Observable<Reminding>> {
  constructor(private _activeEditRemindingState: ActiveEditRemindingState, private _remindingService: RemindingService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Reminding> {
   return this._remindingService.getById(+route.params['id'])
     .pipe(
       tap((remind: Reminding) => this._activeEditRemindingState.setActiveEditReminding(remind))
     )
  }

}
