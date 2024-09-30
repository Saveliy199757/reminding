import {Injectable, OnDestroy} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export abstract class Destroy implements OnDestroy {
  protected destroy: Subject<boolean> = new Subject<boolean>();

  public ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }
}
