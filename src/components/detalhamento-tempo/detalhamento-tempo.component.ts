import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from '../../services/data-service';
import { User } from '../../models/user';

@Component({
  selector: 'app-detalhamento-tempo',
  templateUrl: './detalhamento-tempo.component.html',
  styleUrls: ['./detalhamento-tempo.component.css']
})


export class DetalhamentoTempoComponent  {

  public user: User;

  constructor(private data: DataService) {  }

  ngOnInit() {
    this.data.currentMessage.subscribe(users => this.user = users);
    console.log(this.user);
  }

  ngAfterContentInit() {
    this.data.DetalhamentoPorDia()
  }


  dayName = new Array ("Sun", "Mon", "Tue", "Wend", "Thu", "Fri", "Sat")
  monName = new Array ("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")

  dataAtual: Date = new Date();
  formato: boolean = true;

  dia1 = this.dataAtual.getDate() +1;
  dia2 = this.dataAtual.getDate() +2;
  dia3 = this.dataAtual.getDate() +3;
  dia4 = this.dataAtual.getDate() +4;
  dia5 = this.dataAtual.getDate() +5;

  mes = this.monName [this.dataAtual.getMonth()];

  diasemana1 = this.dayName[this.dataAtual.getDay()+1]
  diasemana2 = this.dayName[this.dataAtual.getDay()+2]
  diasemana3 = this.dayName[this.dataAtual.getDay()+3]
  diasemana4 = this.dayName[this.dataAtual.getDay()+4]
  diasemana5 = this.dayName[this.dataAtual.getDay()+5]

	get formatar() {
		return this.formato ? 'HH:mm MMM dd' : 'dd/MM/yy';
	}

}
