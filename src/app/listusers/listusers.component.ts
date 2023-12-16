import { Component, inject } from '@angular/core';
import { UsersService } from '../users.service';
import { ThisReceiver } from '@angular/compiler';
import { User } from '../user';
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent {
 users : User []=[];
  userserve :UsersService= inject(UsersService);

constructor(){
  this.users=this.userserve.getalluser();
}
}
