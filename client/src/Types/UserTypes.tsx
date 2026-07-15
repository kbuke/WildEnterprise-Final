export type UserType = {
    id: number,
    email: string,
    name: string,
    img: string
}

export type OutletContextType = {
    loggedUser: UserType
}

export type SignInUpType = {
    onChange: () => void
}