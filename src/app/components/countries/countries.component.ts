import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private api: ServiceService) { }

  values;
  columns: any[];
  dataSource = this.values;

  ngOnInit(): void {
    this.columns = [
      { field: 'country', header: 'Country' },
      { field: 'cases', header: 'Cases' },
      { field: 'todayCases', header: 'Today cases' },
      { field: 'deaths', header: 'Deaths' },
      { field: 'todayDeaths', header: 'Today deaths'},
      { field: 'recovered', header: 'Recovered'},
      { field: 'active', header: 'Active'},  
      { field: 'critical', header: 'Critical'}
    ];

    this.api.getCountriesData().subscribe(
      (data) => {
        this.values = data;
      }
    );
  }

}
