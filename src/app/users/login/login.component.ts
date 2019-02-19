import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthServiceService:AuthServiceService, private Router:Router, private CommonService: CommonService) { }

  ngOnInit() {
  }

  body = {    
    "email":"",
    "password":""    
  }

signIn(){
  this.AuthServiceService.login(this.body).subscribe((v)=>{
    if (v.status) {
      localStorage.setItem('token', v.result.token);
      localStorage.setItem('useruuid', v.result.user.uuid);
      this.Router.navigate(['/dashboard']);      
    } else {  
      this.CommonService.msgFun(v.result.error, true, 'error');                      
    } 
  });
}

}
