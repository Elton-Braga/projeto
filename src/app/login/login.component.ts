import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './recursos/auth.service';
import { Credenciais } from './recursos/credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastr : ToastrService, 
              private service : AuthService) { }

  creds : Credenciais = {
    email : '',
    senha : '',
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(8));
  validaCampos(): boolean{
    return this.email.valid && this.senha.valid
  }

  logar(){
      this.service.authenticate(this.creds).subscribe(resposta => {
      this.service.sucessfullLogin(resposta.headers.get('Authorization').substring(7));
    }, 
    () => {
      this.toastr.error('Usuário ou senha incorreta')
    })
  }

  ngOnInit(): void {
  }

}
