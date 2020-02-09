import {Validators} from "@angular/forms";

export interface Field {
    label: string
    type: string
    name: string
    placeholder: string,
    model?: string
}

export const forms = {
    login: {
        username: ['', Validators.required],
        password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    },
    signin: {
        // pseudo: ['', Validators.required],
        email: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
    },
    userUpdate: {
        email: [{value: '', disabled: true}],
        firstname: [''],
        lastname: [''],
        dateOfBirth: [{value: '', disabled: true}],
    }
}

export const fields = {
    login: [
        {label: 'Login', name: 'username', type: 'text', placeholder: 'mugiwara@gum.fr'},
        {label: 'Mot de passe', name: 'password', type: 'password', placeholder: 'mot de passe'}
    ],
    signin: [
        // { label: 'Pseudo', name: 'pseudo', type: 'text', placeholder: 'gros-choco50' },
        {label: 'Email', name: 'email', type: 'text', placeholder: 'roronoa@sword.fr'},
        {label: 'Prénom', name: 'firstname', type: 'text', placeholder: 'Zoro'},
        {label: 'Nom', name: 'lastname', type: 'text', placeholder: 'Roronoa'},
        {label: 'Date de naissance', name: 'dateOfBirth', type: 'number', placeholder: '1990'},
        {label: 'Mot de passe', name: 'password', type: 'password', placeholder: ''},
        {label: 'Confirmation', name: 'passwordConfirmation', type: 'password', placeholder: ''}
    ],
    userUpdate: [
        {label: 'Email', name: 'email', type: 'text', placeholder: 'roronoa@sword.fr', model: 'email'},
        {label: 'Prénom', name: 'firstname', type: 'text', placeholder: 'Zoro', model: 'firstname'},
        {label: 'Nom', name: 'lastname', type: 'text', placeholder: 'Roronoa', model: 'lastname'},
        {label: 'Date de naissance', name: 'dateOfBirth', type: 'number', placeholder: '1990', model: 'dateOfBirth'}
    ],
}
