const usuario = "antonio.silva4721@aluno.ce.gov.br"
const senha = "@EEEp.2026"

let usuarioDigitado = "antonio.silva4721@aluno.ce.gov.br"
let senhaDigitada = "@EEEp.2026"

if (!usuarioDigitado || !senhaDigitada) {
  console.log("Preencha todos os campos")
} else if (usuarioDigitado === usuario && senhaDigitada === senha) {
  console.log("Login realizado com sucesso")
} else {
  console.log("Usuário ou senha incorretos")
}