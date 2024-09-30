import { Injectable } from "@angular/core";
import { Reminding } from "../interfaces/reminding";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class ActiveEditRemindingState {
  private _reminding$: BehaviorSubject<Reminding> = new BehaviorSubject<Reminding>(null);
  reminding$: Observable<Reminding> = this._reminding$.asObservable();

  setActiveEditReminding(reminding: Reminding): void {
    this._reminding$.next(reminding);
  }
}
