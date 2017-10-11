import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';

export class User{
    nomeCompleto: string;
    email: string;
    matricula: string;
    password: string;
}


@Component({
selector: 'page-login',
templateUrl: 'login.html'
})
export class LoginPage {

    user: User = new User();                 // providers
    @ViewChild('form') form: NgForm;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private toastCtrl: ToastController,
        private authService: AuthProvider,
        private carregarCtrl: LoadingController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    signIn() {
        let carregando = this.carregarCtrl.create({
        content: "Em instantes...",
        duration: 500
        });

        if (this.user.email.indexOf('@') == -1)                         // COMPLETA O EMAIL COM @uft.edu.br
            this.user.email = this.user.email + '@uft.edu.br'

        if (this.form.form.valid) {                                     // se o formulario for valido
            this.authService.signIn(this.user)
                .then(() => {                                               // se login aceito
                carregando.present();                                     // CARREGANDO
                this.authService.blockLogin = true;                       // bloqueia a página de login
                this.navCtrl.setRoot(HomePage);                           // entra na pagina Home
            })
            .catch((error: any) => {                                    // se der erro
            let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            if (error.code == 'auth/invalid-email') {                 // email invalido
                toast.setMessage('O e-mail digitado não é valido.');
            } else if (error.code == 'auth/user-disabled') {          // usuario ja autenticado ou desabilitado
                toast.setMessage('O usuário está desativado.');
            } else if (error.code == 'auth/user-not-found') {         // usuario nao encontrado
                toast.setMessage('O usuário não foi encontrado.');
            } else if (error.code == 'auth/wrong-password') {         // senha fraca
                toast.setMessage('A senha digitada não é valida.');
            }
            toast.present();
            });
        }
    }

    openPage(){
        this.navCtrl.setRoot(CadastroPage);
    }

}
