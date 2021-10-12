import { Component, OnInit } from '@angular/core';
import json from './../../json/data.json';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  jsonObject = json;

  constructor() { }

  ngOnInit(): void {

    let jsonObj = this.jsonObject;

    for(let object in jsonObj){

      for(let element in jsonObj[object]){

        if(element == "email"){

          console.log(jsonObj[object][element]);

        }

      }

    }

  }

}
