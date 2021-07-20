import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }
  ch:number=1;
  ngOnInit(): void {
  }
  goToRegister():void{
  this.ch=0;
  }
  goToLogin():void
  {
    this.ch=1;
  }
}