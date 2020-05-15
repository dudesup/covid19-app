import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ServiceService) { }
info;

  ngOnInit(): void {
    this.api.getGlobalData().subscribe(
      (data) => {
        this.info = data;
      }
    );
  }

}
