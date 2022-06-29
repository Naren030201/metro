import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLineComponent } from './add-line/add-line.component';
import { AddStationToLineComponent } from './add-station-to-line/add-station-to-line.component';
import { AddStationComponent } from './add-station/add-station.component';
import { AddTicketPolicyComponent } from './add-ticket-policy/add-ticket-policy.component';
import { HomeComponent } from './home/home.component';
import { LineComponent } from './line/line.component';
import { LoginComponent } from './login/login.component';
import { ManageStationInALineComponent } from './manage-station-in-a-line/manage-station-in-a-line.component';
import { ModifyStationComponent } from './modify-station/modify-station.component';
import { PlanLayoutComponent } from './plan-layout/plan-layout.component';
import { RemoveLineFromStationComponent } from './remove-line-from-station/remove-line-from-station.component';
import { SignupComponent } from './signup/signup.component';
import { StationsComponent } from './stations/stations.component';
import { TicketHistoryComponent } from './ticket-history/ticket-history.component';
import { TicketPolicyComponent } from './ticket-policy/ticket-policy.component';
import { TravelPlannerComponent } from './travel-planner/travel-planner.component';
const routes: Routes = [
  { path:"signup", component: SignupComponent},
  {path: "login", component:LoginComponent},
  {path:"planner", component:TravelPlannerComponent},
  {path:"home", component:HomeComponent},
  {path:"layout", component:PlanLayoutComponent},
  {path:"tickets", component:TicketHistoryComponent},
  {path:"add-station-to-line/:lineId/:lineStationId/:start", component:AddStationToLineComponent},
  {path:"manage-station-in-a-line/:lineId",component:ManageStationInALineComponent},
  {path:"line",component:LineComponent},
  {path:"add-station",component:AddStationComponent},
  {path:"modify-station/:stationId",component:ModifyStationComponent},
  {path:"stations",component:StationsComponent},
  {path:"add-line",component:AddLineComponent},
  {path:"ticket",component:TicketPolicyComponent},
  {path:"add-ticket-policy",component:AddTicketPolicyComponent},
  {path:"remove-station-to-line/:lineId/:lineStationId/:start",component:RemoveLineFromStationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
