export type RootStackParamList = {
    Home: undefined
    Login: undefined
    Registration: undefined
    Registration2:  {
        email: string
        password: string
    }
    SuccessRegistration: {
        email: string
        password: string
        firstName: string
        lastName: string
        civilStatus: string
        birthDate: string
    }
}