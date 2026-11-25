
const prompt = require("prompt-sync")()

const sistema = {
    usuarioCorreto: "antonio.silva4721@aluno.ce.gov.br",
    senhaCorreta: "@EEEp.2026",
    tentativasMaximas: 3
}

let usuarios = [
    {
        email: "antonio.silva4721@aluno.ce.gov.br",
        senha: "@EEEp.2026",
        nome: "Antonio",
        ativo: true
    },
    {
        email: "aluno2@aluno.ce.gov.br",
        senha: "123456",
        nome: "Carlos",
        ativo: true
    },
    {
        email: "aluno3@aluno.ce.gov.br",
        senha: "654321",
        nome: "Pedro",
        ativo: false
    }
]

let tentativas = 0
let loginsRealizados = 0
let continuar = true

const verificarCampos = (usuario, senha) => {
    return usuario.trim() !== "" && senha.trim() !== ""
}

function realizarLogin() {

    let usuarioDigitado = prompt("Digite seu email: ")
    let senhaDigitada = prompt("Digite sua senha: ")

    const procurarUsuario = () => {
        return usuarios.find(
            pessoa => pessoa.email === usuarioDigitado
        )
    }

    if (!verificarCampos(usuarioDigitado, senhaDigitada)) {
        console.log("Preencha todos os campos!")
        return false
    }

    let usuarioEncontrado = procurarUsuario()

    if (usuarioEncontrado && usuarioEncontrado.ativo &&
        usuarioEncontrado.senha === senhaDigitada) {

        console.log("Login realizado com sucesso!")
        console.log("Bem-vindo(a), " + usuarioEncontrado.nome)

        loginsRealizados++

        return true

    } else {
        console.log("Usuário ou senha incorretos!")
        tentativas++

        return false
    }
}

while (tentativas < sistema.tentativasMaximas && continuar) {

    console.log("===== SISTEMA DE LOGIN =====")

    let sucesso = realizarLogin()

    if (sucesso) {
        continuar = false
    } else {
        console.log("Tentativas restantes: " +
            (sistema.tentativasMaximas - tentativas))
    }
}

if (tentativas >= sistema.tentativasMaximas) {
    console.log("Acesso bloqueado!")
}

console.log("===== LISTA DE USUÁRIOS =====")

usuarios.push({
    email: "aluno4@aluno.ce.gov.br",
    senha: "789456",
    nome: "Lucas",
    ativo: true
})

console.log("Total de usuários: " + usuarios.length)

let usuariosAtivos = 0
let usuariosInativos = 0

for (let i = 0; i < usuarios.length; i++) {

    if (usuarios[i].ativo === true) {
        usuariosAtivos++
    } else {
        usuariosInativos++
    }

    console.log(usuarios[i].nome + " - " + usuarios[i].email)
}

let listaAtivos = usuarios.filter(
    pessoa => pessoa.ativo === true
)

let nomes = usuarios.map(
    pessoa => pessoa.nome
)

nomes.sort()

console.log("===== NOMES EM ORDEM ALFABÉTICA =====")

nomes.forEach(nome => {
    console.log(nome)
})

let opcao

do {
    console.log("===== MENU =====")
    console.log("1 - Mostrar usuários")
    console.log("2 - Mostrar estatísticas")
    console.log("3 - Sair")

    opcao = prompt("Escolha uma opção: ")

    if (opcao === "1") {
        console.log("Usuários cadastrados:")

        usuarios.forEach(pessoa => {
            console.log(pessoa.nome + " - " + pessoa.ativo)
        })

    } else if (opcao === "2") {

        console.log("===== ESTATÍSTICAS =====")
        console.log("Logins realizados: " + loginsRealizados)
        console.log("Tentativas incorretas: " + tentativas)
        console.log("Usuários ativos: " + usuariosAtivos)
        console.log("Usuários inativos: " + usuariosInativos)

    } else if (opcao !== "3") {
        console.log("Opção inválida!")
    }

} while (opcao !== "3")

console.log("Sistema encerrado!")
