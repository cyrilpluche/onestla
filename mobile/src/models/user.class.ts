export class User {

    dateOfBirth: string = '01/01/1970'
    email: string
    firstname: string = 'Benjamin'
    lastname: string = 'Pavard'
    password: string
    passwordConfirmation: string
    profilePicture: string
    pseudo: string = 'second_poteau'
    userId: number = -1


    eventTotalRate: number = 0
    eventWeekRate: number = 0
    eventSum: number = 0
    firstClub: string
    secondClub: string
    thirdClub: string

    followerSum: number = 0
    followSum: number = 0

    constructor(data: Object = {}) {
        Object.assign({}, data)
    }

}
