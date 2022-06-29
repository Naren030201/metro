import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent} from './login/login.component';
import { TravelPlannerComponent } from './travel-planner/travel-planner.component';
import { HomeComponent } from './home/home.component';
import { PlanLayoutComponent } from './plan-layout/plan-layout.component';
import { TicketPricingComponent } from './ticket-pricing/ticket-pricing.component';
import{HttpClientModule} from '@angular/common/http';
import { TicketHistoryComponent } from './ticket-history/ticket-history.component';
import { AddStationComponent } from './add-station/add-station.component';
import { AddLineComponent } from './add-line/add-line.component';
import { AddStationToLineComponent } from './add-station-to-line/add-station-to-line.component';
import { AddTicketPolicyComponent } from './add-ticket-policy/add-ticket-policy.component';
import { ManageStationInALineComponent } from './manage-station-in-a-line/manage-station-in-a-line.component';
import { ModifyStationComponent } from './modify-station/modify-station.component';
import { RemoveLineFromStationComponent } from './remove-line-from-station/remove-line-from-station.component';
import { UpdateComponent } from './update/update.component';
import { StationsComponent } from './stations/stations.component';
import { LineComponent } from './line/line.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SignupComponent,
    LoginComponent,
    TravelPlannerComponent,
    HomeComponent,
    PlanLayoutComponent,
    TicketPricingComponent,
    TicketHistoryComponent,
    AddLineComponent,
    AddStationComponent,
    AddStationToLineComponent,
    AddTicketPolicyComponent,
    ManageStationInALineComponent,
    ModifyStationComponent,
    RemoveLineFromStationComponent,
    UpdateComponent,
    StationsComponent,
    LineComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
