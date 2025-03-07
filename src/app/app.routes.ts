import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ManagecustomerComponent } from './managecustomer/managecustomer.component';

export const routes: Routes = [
    { path:"login", component:LoginComponent },
    { path:"", component:LoginComponent },
    { path:"dashboard", component:DashboardComponent,
        children:[
            {path:"addCustomer", component:AddcustomerComponent},
            {path:"manageCustomer", component:ManagecustomerComponent}
        ]
    }

];
