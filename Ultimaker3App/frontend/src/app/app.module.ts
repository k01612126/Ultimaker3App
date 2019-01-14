import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {ResponsiveSidenavComponent} from './components/responsive-sidenav/responsive-sidenav.component';
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "./material-module";
import {ChartsModule} from 'ng2-charts';
import {IconEdit2, IconTrash2} from "angular-feather";
import { StatusComponent } from './components/status/status.component';
import {UltimakerService} from "./services/ultimaker-service";
import { SystemPropertiesComponent } from './components/system-properties/system-properties.component';
import { PrintJobComponent } from './components/print-job/print-job.component';

const appRoutes: Routes = [
  {path: 'status', component: StatusComponent},
  {path: 'system', component: SystemPropertiesComponent},
  {path: '', redirectTo: '/status', pathMatch: 'full'},
  {path: 'printJob', component: PrintJobComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveSidenavComponent,
    StatusComponent,
    SystemPropertiesComponent,
    PrintJobComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes),
    IconTrash2,
    IconEdit2
  ],
  providers: [UltimakerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
