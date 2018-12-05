import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DroneService} from '../../shared/services/drone.service';
import {Drone} from '../../shared/model/drone';

@Component({
  selector: 'app-drone-details',
  templateUrl: './drone-details.component.html',
  styleUrls: ['./drone-details.component.css']
})
export class DroneDetailsComponent implements OnInit {

  drone: Drone;

  constructor(private route: ActivatedRoute,
              private droneService: DroneService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.droneService.getDroneById(id).subscribe(singleDrone => {
      this.drone = singleDrone;
    });
  }

}
