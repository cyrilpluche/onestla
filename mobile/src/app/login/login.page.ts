import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private loginForm: FormGroup
    private signInForm: FormGroup

    constructor(private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.signInForm = this.formBuilder.group({
            pseudo: ['', Validators.required],
            email: ['', Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            dateOfBirth: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    submit() {
        console.log(this.loginForm)
    }

}
