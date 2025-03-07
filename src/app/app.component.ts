import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ManagecustomerComponent } from './managecustomer/managecustomer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterComponent, LoginComponent, AddcustomerComponent, ManagecustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'customerManagement-frontend';
  ngOnInit(): void {
    initFlowbite();
  }
}
