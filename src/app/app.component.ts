import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from './http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient, private httpClientService: HttpClientService){}
  response;
  launchYears = [];
  launchSuccessFlag = false;
  landSuccessFlag = false;
  launchYearFlag;

  ngOnInit() {
    for (let year = 2006; year <= 2020; year++) {
      this.launchYears.push(year);
    }
    this.loadLaunchPrograms();
  }


  onSelectYear(year) {
    this.launchYearFlag = year;
    this.loadLaunchPrograms();
  }

  onSelectLaunch(value) {
    this.launchSuccessFlag = value;
    this.loadLaunchPrograms();
  }

  onSelectLand(value) {
    this.landSuccessFlag = value;
    this.loadLaunchPrograms();
  }

  loadLaunchPrograms() {
    const params = [];

    if (this.launchSuccessFlag) {
      params.push({param_name: 'launch_success', param_value: this.launchSuccessFlag});
    }
    if (this.landSuccessFlag) {
      params.push({param_name: 'land_success', param_value: this.landSuccessFlag});
    }
    if (this.launchYearFlag) {
      params.push({param_name: 'launch_year', param_value: this.launchYearFlag});
    }

    this.httpClientService.get(params).subscribe((res) => {
      this.response = res;
    });
  }
}
