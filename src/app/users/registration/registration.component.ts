import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private CommonService: CommonService) { }

  ngOnInit() {
  }

  addUser = {
    state_id:"",
    city_id:"",
    name:"",
    dob:"",
    gender:"",
    address:"",
    email:"",
    mobile:"",
    password:""
  }

  signUp(){
    this.CommonService.postRequestWoT('users', this.addUser).subscribe(
      res => {
      if(res.status){
           this.CommonService.msgFun(res.result.message, true, 'success');
        } else {    
          this.CommonService.msgFun(res.result.error, true, 'error');                      
        } 
      },
      err => { 
        this.CommonService.msgFun(err.error.result.error, true, 'error');                      
      }     
  )
  }

}