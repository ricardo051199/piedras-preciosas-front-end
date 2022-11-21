import { Component, OnInit } from '@angular/core';
import { Piedra } from "../../interfaces/piedra.interface";
import {GemstoneService} from "../../service/gemstone.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gemstone-form',
  templateUrl: './gemstone-form.component.html',
  styleUrls: ['./gemstone-form.component.scss']
})
export class GemstoneFormComponent implements OnInit {

    gemstone: Piedra = {
        nombre: '',
        color: '',
        significado: '',
        unidad_masa: '',
        masa: 0,
        moneda: '',
        precio: 0
    };

  constructor(private gemstoneService: GemstoneService, private router: Router) { }

  ngOnInit(): void {
  }

  submitGemstone() {
      this.gemstoneService.addGemstone(this.gemstone).subscribe(res => {console.log(res);this.router.navigate(['/']);}, err => console.log(err));
  }
}