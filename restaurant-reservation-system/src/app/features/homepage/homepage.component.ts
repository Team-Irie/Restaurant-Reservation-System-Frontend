import { Component, OnInit } from '@angular/core';
import{ CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  // TODO: Check if in use

  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {
    // unused
  }

}
