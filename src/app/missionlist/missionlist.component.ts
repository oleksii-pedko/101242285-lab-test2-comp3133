import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any;
  showList: boolean = true;

  missionSelect(mission: Mission): void {
    this.showList = false;

   }
  constructor(private spaceXApi: SpacexapiService) { }

  ngOnInit(): void {

    this.spaceXApi.getMissions().subscribe((missions:any) => {
  		this.missions = missions;

  	})
  }
  goBackList(value: boolean): void {

    this.showList = value;
  }

}
