import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-managecustomer',
  imports: [FormsModule, CommonModule],
  templateUrl: './managecustomer.component.html',
  styleUrl: './managecustomer.component.css'
})
export class ManagecustomerComponent {
  public customers:any = [];

  constructor(private http:HttpClient){
    this.loadCustomer();
  }

  loadCustomer(){
    this.http.get("http://localhost:8080/customer/all").subscribe(data=>{
      console.log(data);
      this.customers = data;
    });
  }

  // public customers = [
  //   {
  //     id: 1,
  //     name: "Nipun Sathsara B",
  //     address: "Gampaha",
  //     phone: "0987654321",
  //     email: "nipun@gmail.com"
  //   },
  //   {
  //     id: 2,
  //     name: "Nipun Sathsara",
  //     address: "Gampaha",
  //     phone: "0987654321",
  //     email: "nipun@gmail.com"
  //   },
  //   {
  //     id: 4,
  //     name: "Nipun S",
  //     address: "Gampaha",
  //     phone: "0987654321",
  //     email: "nipun@gmail.com"
  //   },
  //   {
  //     id: 5,
  //     name: "Nipun S",
  //     address: "Gampaha",
  //     phone: "0987654321",
  //     email: "nipun@gmail.com"
  //   }
  // ]

}
