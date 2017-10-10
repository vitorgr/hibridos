import { Component } from '@angular/core';
//import { AngularFireDatabase, AuthProviders,AuthMethods } from "angularfire2/database";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  //autenticacao: FirebaseAuthState;
  email: string;
  senha: string;

  /*constructor(public af: AngularFire) {
    this.af.auth.subscribe( estado => {
       this.autenticacao = estado !== null;
    });
  }*/

  cadastrar(){
    /*let dados = { 'email': this.email, 'password': this.senha };
    this.af.auth.createUser(dados).then(() => {
       console.log(this.af.auth); // USUÁRIO CRIADO
    }, erro => {
       console.log("Erro no cadastro"); // TRATAR O ERRO
    });
  */
  console.log("entrou no cadastro");
  }
  /*login() {
   af.auth.login({
     email: this.email,
     password: this.senha,
   },
   {
     provider: AuthProviders.Password,
     method: AuthMethods.Password,
   });
}
logout(){
  this.af.auth.logout();
}*/
}
