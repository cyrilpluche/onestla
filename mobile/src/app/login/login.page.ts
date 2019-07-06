import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationController} from "../../controllers/authentication.controller";
import {Router} from "@angular/router";
import {User} from "../../models/user.class";

interface Field {
    label: string
    type: string
    name: string
    placeholder: string
}

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private loginForm: FormGroup
    private signInForm: FormGroup
    public selectedForm: FormGroup

    public loginFields: Field[]
    public signinFields: Field[]
    public selectedFields: Field[]

    public isLogin: boolean
    public logoUrl: string = '../../assets/images/logo.png'

    constructor(private formBuilder: FormBuilder,
                private _authenticationCtrl: AuthenticationController,
                private _router: Router) {
        this.loginForm = this.initLoginForm(formBuilder)
        this.signInForm = this.initSigninForm(formBuilder)
    }

    ngOnInit() {
        this.loginFields = this.initLoginFields()
        this.signinFields = this.initSigninFields()
        this.selectedFields = this.loginFields
        this.selectedForm = this.loginForm

        this.isLogin = true
    }

    initLoginForm(formBuilder: FormBuilder) {
        return formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        });
    }

    initSigninForm(formBuilder: FormBuilder) {
        return formBuilder.group({
            pseudo: ['', Validators.required],
            email: ['', Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            dateOfBirth: ['', Validators.required],
            password: ['', Validators.required],
            passwordConfirmation: ['', Validators.required]
        });
    }

    initLoginFields(): Field[] {
        return [
            { label: 'Login', name: 'username', type: 'text', placeholder: 'mugiwara@gum.fr' },
            { label: 'Mot de passe', name: 'password', type: 'password', placeholder: 'mot de passe' }
        ]
    }

    initSigninFields(): Field[] {
        return [
            { label: 'Pseudo', name: 'pseudo', type: 'text', placeholder: 'gros-choco50' },
            { label: 'Email', name: 'email', type: 'text', placeholder: 'roronoa@sword.fr' },
            { label: 'Prénom', name: 'firstname', type: 'text', placeholder: 'Zoro' },
            { label: 'Nom', name: 'lastname', type: 'text', placeholder: 'Roronoa' },
            { label: 'Date de naissance', name: 'dateOfBirth', type: 'number', placeholder: '1990' },
            { label: 'Mot de passe', name: 'password', type: 'password', placeholder: '' },
            { label: 'Confirmation', name: 'passwordConfirmation', type: 'password', placeholder: '' }
        ]
    }

    selectSigninForm() {
        this.selectedFields = this.signinFields
        this.selectedForm = this.signInForm
        this.isLogin = false
    }

    selectLoginForm() {
        this.selectedFields = this.loginFields
        this.selectedForm = this.loginForm
        this.isLogin = true
    }

    switchForm() {
        if (this.isLogin) this.selectSigninForm()
        else this.selectLoginForm()
    }

    submitLogin() {
        const credentials: {username: string, password: string} = this.loginForm.value
        this._authenticationCtrl.login(credentials.username, credentials.password)
            .then(success => {
                if (success) this._router.navigate(['/home'])
            })
    }

    submitSignup() {
        const user: User = this.signInForm.value
        this._authenticationCtrl.signup(user)
            .then(success => {
                if (success) console.log('Youpi !')
            })
    }

    submit() {
        if (this.isLogin) this.submitLogin()
        else this.submitSignup()
    }

}
