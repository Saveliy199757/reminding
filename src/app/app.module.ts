import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableRemindingListComponent } from './components/table-reminding-list/table-reminding-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RemindingService } from './common/services/reminding.service';
import { MatTableModule } from "@angular/material/table";
import { EditRemindingComponent } from './components/edit-reminding/edit-reminding.component';
import {ActiveEditRemindingState} from "./common/states/active-edit-reminding.state";
import {EditRemindingResolver} from "./common/resolvers/edit-reminding.resolver";
import {ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {EditRemindingFormService} from "./common/services/edit-reminding-form-service";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {StatusPipe} from "./common/pipes/status.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TableRemindingListComponent,
    EditRemindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StatusPipe
  ],
  providers: [
    RemindingService,
    ActiveEditRemindingState,
    EditRemindingResolver,
    EditRemindingFormService,
    MatDatepickerModule,
    StatusPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
