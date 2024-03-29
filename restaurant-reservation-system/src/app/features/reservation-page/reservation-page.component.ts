import { CookieService } from 'ngx-cookie-service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Reservation } from 'src/app/core/models/Reservation';
import { ReservationService } from 'src/app/core/services/reservation.service';

@Component({
  selector: 'reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {

  reservation:Reservation = {
    customer:0,
    partySize:0,
    reservationTime:0,
    restaurantName: "",
    restaurantAddress: "",
    restaurantPhoneNumber: "",
    reservationStatus: "PENDING",
  };
  
  restaurantName:string ="";
  reservationTime!:Date;
  partySize: number = 0;
  restaurantPhoneNumber:string ="";
  restaurantAddress:string ="";
 
// TODO: check formbuilder implementation and see if it is in use

  constructor(
    @Inject(MAT_DIALOG_DATA) public info: any,
    private formBuilder:FormBuilder, 
    private reservationService:ReservationService,
    private cookieService:CookieService
    ) { }

  ngOnInit(): void {
    this.restaurantName = this.info.restaurantName;
    this.restaurantAddress = this.info.restaurantAddress;
    this.restaurantPhoneNumber = this.info.restaurantPhone;
  }

  confirmReservation(): boolean{
    if(window.confirm("Confirm Changes?")){
      return true;
    } else {
      return false;
    }
  }

  onSubmit(data:any){
    console.log(data);
    if(!this.confirmReservation()){
      return;
    }
    const userIdNumber = parseInt(this.cookieService.get('userId'));

    this.reservation.customer = userIdNumber;
    this.reservation.restaurantName = data.restaurantName;
    this.reservation.reservationTime = data.reservationTime;
    this.reservation.partySize = data.partySize;
    this.reservation.restaurantPhoneNumber = data.restaurantPhoneNumber;
    this.reservation.restaurantAddress = data.restaurantAddress;

    this.reservationService.create(this.reservation).subscribe(Response => {
      console.log(Response)
    })

    alert("Your reservation has been made");

    location.reload();
  }
}
