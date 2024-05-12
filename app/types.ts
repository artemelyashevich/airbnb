export interface ICategory {
    name: string,
    title: string,
    imageUrl: string,
    description: string,
    id: number
}

export interface IUserLink {
    to: string,
    text: string
}

export interface IHome {
    id?: string,
    title: string,
    description: string,
    photo: string,
    price: number,
    country?: string,
    createdAt?: string
}