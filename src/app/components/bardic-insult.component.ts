import { Component, OnInit } from '@angular/core';
import { BardicInsultService, Insult} from '../services/bardic-insult.service';
import { } from '@angular/common/';

@Component({
  selector: 'app-bardic-insult',
  templateUrl: '../templates/bardic-insult.component.html',
  styleUrls: ['../templates/bardic-insult.component.css']
})
export class BardicInsultComponent implements OnInit {

  insult = {
    id: 0,
    insult: ""
  };
  insults;

  constructor(private _bardicInsultService: BardicInsultService) { }

  ngOnInit() {
  }

  getInsult(){
    this.insults = this._bardicInsultService.getInsults();
    let ran = Math.ceil(Math.random() * 273);
    console.log("This is a random num: " + ran);
    this.insults.forEach(ins => {
      if (ran == ins.id){
        this.insult = {
          id: ins.id,
          insult: ins.insult
        }
        console.log(ins.insult);
      }
    }); 
  }

  resetInsult(){
    this.insult = {id:0, insult: ""};
  }

}
