export type ClientCreate = {
    name: string,
    status: string,
    phone: string,
    nationality: string,
    maritalStatus: string,
    mother: string,
    father: string,
    rg: string,
    cpf: string,
    cityBirth: string,
    stateBirth: string,
    urlImg: string,
    process: string,
    address: Address,
    documents: Document[],
    comments: Comment[],
    userId: number
};

export type Address = {
    cep: string,
    rua: string,
    bairro: string,
    numero: number,
    cidade: string,
    estado: string
};

export type Document = {
    name: string,
    description: string,
    url: string,
    type: string,
    clientId: number
};

export type Comment = {
    comment: string
}