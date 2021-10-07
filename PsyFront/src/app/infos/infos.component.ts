import { Component, OnInit } from '@angular/core';
import { psyInfos } from '../data/psy/psyInfos';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  psyInfos: any = psyInfos

  constructor() { }

  ngOnInit(): void {
  }

}
