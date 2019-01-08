import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {ResponsiveSidenavComponent} from './components/responsive-sidenav/responsive-sidenav.component';
import {WavesApiService} from "./services/waves-api-service";
import {LatestBlocksComponent} from './components/latest-blocks/latest-blocks.component';
import {RouterModule, Routes} from "@angular/router";
import {BlockDetailsComponent} from './components/block-details/block-details.component';
import {Dataservice} from "./services/dataservice";
import {TransactionDetailsComponent} from './components/transaction-details/transaction-details.component';
import {AddressDetailsComponent} from './components/address-details/address-details.component';
import {MaterialModule} from "./material-module";
import {TransactionListComponent} from './components/transaction-list/transaction-list.component';
import {TransactionListAllComponent} from './components/transaction-list-all/transaction-list-all.component';
import {SharedService} from './services/shared.service';
import {ChartsModule} from 'ng2-charts';
import {OrderDetailsComponent} from './components/order-details/order-details.component';
import {TransferListComponent} from './components/transfer-list/transfer-list.component';
import {IconEdit2, IconTrash2} from "angular-feather";
import { StatusComponent } from './components/status/status.component';
import {UltimakerService} from "./services/ultimaker-service";
import { SystemPropertiesComponent } from './components/system-properties/system-properties.component';
import {SystemProperties} from "./shared/SystemProperties";

const appRoutes: Routes = [
  {path: 'status', component: StatusComponent},
  {path: 'system', component: SystemPropertiesComponent},
  {path: 'latestBlocks', component: LatestBlocksComponent},
  {path: 'transactionDetails/:transactionId', component: TransactionDetailsComponent},
  {path: 'addressDetails/:addressValue', component: AddressDetailsComponent},
  {path: '', redirectTo: '/latestBlocks', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveSidenavComponent,
    LatestBlocksComponent,
    BlockDetailsComponent,
    TransactionDetailsComponent,
    AddressDetailsComponent,
    TransactionListComponent,
    TransactionListAllComponent,
    OrderDetailsComponent,
    TransferListComponent,
    StatusComponent,
    SystemPropertiesComponent
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
  providers: [WavesApiService, Dataservice,  SharedService, UltimakerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
