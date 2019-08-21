import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationController} from "../../controllers/authentication.controller";
import {Router} from "@angular/router";
import {User} from "../../models/user.class";
import {Field, fields, forms} from "../forms/login.form";
import {Utility} from "../../helpers/utility.helper";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private loginForm: FormGroup
    private signupForm: FormGroup
    public selectedForm: FormGroup

    public loginFields: Field[]
    public signinFields: Field[]
    public selectedFields: Field[]

    public isLogin: boolean
    public logoUrl: string = '../../assets/images/logo.png'

    constructor(private formBuilder: FormBuilder,
                private _util: Utility,
                private _authenticationCtrl: AuthenticationController,
                private _router: Router) {
        this.loginForm = formBuilder.group(forms.login)
        this.signupForm = formBuilder.group(forms.signin)
    }

    ngOnInit() {
        this.loginFields = fields.login
        this.signinFields = fields.signin
        this.selectedFields = this.loginFields
        this.selectedForm = this.loginForm

        this.isLogin = true
    }

    test() {
        console.log(this.signupForm)
    }

    selectSigninForm() {
        this.selectedFields = this.signinFields
        this.selectedForm = this.signupForm
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
        const user: User = this.signupForm.value

        if (user.password !== user.passwordConfirmation) {
            this.signupForm.controls['passwordConfirmation'].setErrors({ incorrect: true})
        } else {
            this._authenticationCtrl.signup(user)
                .then(createdUser => {
                    if (!this._util.isNull(createdUser)) {
                        this.signupForm.reset()
                        this.selectLoginForm()
                    }
                })
        }
    }

    submit() {
        if (this.isLogin) this.submitLogin()
        else this.submitSignup()
    }

}
