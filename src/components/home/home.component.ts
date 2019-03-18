import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { User } from '../../models/user';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{

  public user: User;

  constructor(private data: DataService) { 
  }

  cidade : string = "";

  ngOnInit() {
    this.data.currentMessage.subscribe(users => this.user = users);
  }

  ngAfterViewChecked() {
    this.user.cidade = this.cidade;
  }

}
