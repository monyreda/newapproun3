import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {}

//logic
getalluser():User[]{
  return this.users;
}
 
usercount(){

  return this.users.length;
}


 private users : User[] = [
{ id:1,
  name:"menna",
  age:5,
  username:"mennareda",
  password:"123"
},
{ id:2,
  name:"allah",
  age:5,
  username:"more",
  password:"123"
},
   
{ id:3,
  name:"reda",
  age:5,
  username:"mennareda",
  password:"123"
},
   


  ]
}
