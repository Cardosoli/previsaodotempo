import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataService {
    public user = new User();

    public messageSource = new BehaviorSubject(this.user);
    currentMessage = this.messageSource.asObservable();
  
    constructor(private http : Http) { }

    previsaoTempo() {

    this.user.apiUrl  = "http://api.openweathermap.org/data/2.5/weather?APPID=76d1b43ba3695cfae59aa9f7dc9b4877&units=metric&q="; 
  
      this.http.get(this.user.apiUrl + this.user.cidade)
      .subscribe(
        (res: Response) => {
          const previsaoCidade = res.json();
          this.user.cidadeid = previsaoCidade.id;
          this.user.uf = previsaoCidade.sys.country;
          this.user.cidade = previsaoCidade.name;
          this.user.uficon = "http://openweathermap.org/images/flags/" + previsaoCidade.sys.country.toLowerCase() + ".png";
          this.user.descicon = "http://openweathermap.org/img/w/" + previsaoCidade.weather[0].icon + ".png";
          this.user.descricao = previsaoCidade.weather[0].description;
          this.user.temperatura = previsaoCidade.main.temp;
          this.user.maxima = previsaoCidade.main.temp_max;
          this.user.minima = previsaoCidade.main.temp_min;
        }
      )
    }

    DetalhamentoPorDia() {
        this.user.apiUrldesc = "https://api.openweathermap.org/data/2.5/forecast?APPID=76d1b43ba3695cfae59aa9f7dc9b4877&units=metric&id="; 

            this.http.get(this.user.apiUrldesc + this.user.cidadeid)
        .subscribe(
        (res: Response) => {
            const previsaoDia = res.json();
            this.user.cidadedia = previsaoDia.city.name;
            this.user.ufdesc = previsaoDia.city.country;
            this.user.max1 = previsaoDia.list[0].main.temp_max;
            this.user.min1 = previsaoDia.list[0].main.temp_min;
            this.user.desc1 = previsaoDia.list[0].weather[0].description;
            this.user.icon1 = "http://openweathermap.org/img/w/" + previsaoDia.list[0].weather[0].icon + ".png";
            this.user.max2 = previsaoDia.list[1].main.temp_max;
            this.user.min2 = previsaoDia.list[1].main.temp_min;
            this.user.desc2 = previsaoDia.list[1].weather[0].description;
            this.user.icon2 = "http://openweathermap.org/img/w/" + previsaoDia.list[1].weather[0].icon + ".png";
            this.user.max3 = previsaoDia.list[2].main.temp_max;
            this.user.min3 = previsaoDia.list[2].main.temp_min;
            this.user.desc3 = previsaoDia.list[2].weather[0].description;
            this.user.icon3 = "http://openweathermap.org/img/w/" + previsaoDia.list[2].weather[0].icon + ".png";
            this.user.max4 = previsaoDia.list[3].main.temp_max;
            this.user.min4 = previsaoDia.list[3].main.temp_min;
            this.user.desc4 = previsaoDia.list[3].weather[0].description;
            this.user.icon4 = "http://openweathermap.org/img/w/" + previsaoDia.list[3].weather[0].icon + ".png";
            this.user.max5 = previsaoDia.list[4].main.temp_max;
            this.user.min5 = previsaoDia.list[4].main.temp_min;
            this.user.desc5 = previsaoDia.list[4].weather[0].description;
            this.user.icon5 = "http://openweathermap.org/img/w/" + previsaoDia.list[4].weather[0].icon + ".png";
    
        }
        )
    }


}