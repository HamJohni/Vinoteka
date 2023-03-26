export type formType = {
    agree: boolean,
    confirm: string,
    email: string,
    gender: string,
    name: string,
    password: string,
    phone: string,
    surname: string
}

export type userType = {
    user : formType
}

export type typeLocal = {
    agree: boolean,
    confirm: string,
    email: string,
    gender: string,
    name: string,
    password: string,
    phone: string,
    surname: string,
    token: string
}

export type typeLocalUser = {
    user : typeLocal | null
}

export type winesType =  {
    "id": number,
    "image": string,
    "category": string,
    "name": string,
    "price": number,
    "region": string,
    "producer": string,
    "year": number,
    "alc": number,
    "grape": string,
    "country": string,
    "dry": string,
    "description": string,
    "bought": number,
    "review": Array<any>,
    "rating": number
}

export type propsWine = {
    item: winesType
}


