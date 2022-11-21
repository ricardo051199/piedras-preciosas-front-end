import { Component, OnInit } from '@angular/core';
import {GemstoneService} from "../../service/gemstone.service";
import {Piedra} from "../../interfaces/piedra.interface";

@Component({
  selector: 'app-gemstone-list',
  templateUrl: './gemstone-list.component.html',
  styleUrls: ['./gemstone-list.component.scss']
})
export class GemstoneListComponent implements OnInit {

  gemstones: Piedra[] = [];

  constructor(private gemstoneService: GemstoneService) { }

  ngOnInit(): void {
  }
}
