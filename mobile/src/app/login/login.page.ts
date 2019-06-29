import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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

    constructor(private formBuilder: FormBuilder) {
        this.loginForm = this.initLoginForm(formBuilder)
        this.signInForm = this.initSigninForm(formBuilder)
    }

    ngOnInit() {
        this.loginFields = this.initLoginFields()
        this.signinFields = this.initSigninFields()
        this.selectedFields = this.loginFields
        this.selectedForm = this.loginForm
    }

    submit() {
        console.log(this.loginForm)
    }

    initLoginForm(formBuilder: FormBuilder) {
        return formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        });
    }

    initSigninForm(formBuilder: FormBuilder) {
        return formBuilder.group({
            pseudo: ['', Validators.required],
            email: ['', Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            dateOfBirth: ['', Validators.required]
        });
    }

    initLoginFields(): Field[] {
        return [
            { label: 'Login', name: 'login', type: 'text', placeholder: 'mugiwara@gum.fr' },
            { label: 'Mot de passe', name: 'password', type: 'password', placeholder: 'mot de passe' }
        ]
    }

    initSigninFields(): Field[] {
        return [
            { label: 'Pseudo', name: 'pseudo', type: 'text', placeholder: 'gros-choco50' },
            { label: 'Email', name: 'email', type: 'text', placeholder: 'roronoa@sword.fr' },
            { label: 'Prénom', name: 'firstname', type: 'text', placeholder: 'Zoro' },
            { label: 'Nom', name: 'lastname', type: 'text', placeholder: 'Roronoa' },
            { label: 'Date de naissance', name: 'dateOfBirth', type: 'number', placeholder: '1990' }
        ]
    }

    selectSigninForm() {
        this.selectedFields = this.signinFields
        this.selectedForm = this.signInForm
    }

    selectLoginForm() {
        this.selectedFields = this.loginFields
        this.selectedForm = this.loginForm
    }

}
