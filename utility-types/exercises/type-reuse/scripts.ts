type NovoUsuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string,
    dataNascimento?: string | null,
}

type UsuarioSemRG = Required<Omit<NovoUsuario, 'rg'>>;

const cadastrarUsuário = (info: NovoUsuario): NovoUsuario => {
    return info;
}