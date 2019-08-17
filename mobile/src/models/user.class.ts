export class User {

    _id: string
    dateOfBirth: string = '01/01/1970'
    email: string
    firstname: string = 'Benjamin'
    lastname: string = 'Pavard'
    password: string
    passwordConfirmation: string
    profilePicture: string
    status: number
    friendsSum: number = 0

    eventTotalRate: number = 0
    eventWeekRate: number = 0
    eventSum: number = 0
    firstClub: string
    secondClub: string
    thirdClub: string

    followerSum: number = 0
    followSum: number = 0

    constructor(data: Object = {}) {
        Object.assign(this, data)
    }

}
