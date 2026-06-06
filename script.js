const formularioGerador = document.getElementById("formGerador");
const comprimento = document.getElementById("comprimento");
const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");
const senhaGerada = document.getElementById("senhaGerada");
const botaoCopiar = document.getElementById("copiarSenha");
const mensagem = document.getElementById("mensagem");

// Conjuntos de caracteres
const LETRAS_MAIUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LETRAS_MINUSCULAS = "abcdefghijklmnopqrstuvwxyz";
const NUMEROS = "0123456789";
const SIMBOLOS = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Gerar senha
formularioGerador.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const tamanho = Number(comprimento.value);

  const incluirMaiusculas = maiusculas.checked;
  const incluirMinusculas = minusculas.checked;
  const incluirNumeros = numeros.checked;
  const incluirSimbolos = simbolos.checked;

  // Validação
  if (
    !incluirMaiusculas &&
    !incluirMinusculas &&
    !incluirNumeros &&
    !incluirSimbolos
  ) {
    mensagem.textContent =
      "Selecione pelo menos um tipo de caractere.";

    mensagem.classList.remove("text-green-600");
    mensagem.classList.add("text-red-600");

    senhaGerada.value = "";
    return;
  }

  mensagem.textContent = "";

  const senha = gerarSenha(
    tamanho,
    incluirMaiusculas,
    incluirMinusculas,
    incluirNumeros,
    incluirSimbolos
  );

  senhaGerada.value = senha;
});

// Copiar senha
botaoCopiar.addEventListener("click", async function () {
  if (senhaGerada.value === "") {
    mensagem.textContent = "Gere uma senha antes de copiar.";

    mensagem.classList.remove("text-green-600");
    mensagem.classList.add("text-red-600");

    return;
  }

  try {
    await navigator.clipboard.writeText(
      senhaGerada.value
    );

    mensagem.textContent = "✓ Senha copiada!";

    mensagem.classList.remove("text-red-600");
    mensagem.classList.add("text-green-600");

    setTimeout(() => {
      mensagem.textContent = "";
    }, 3000);
  } catch {
    mensagem.textContent =
      "Erro ao copiar a senha.";
  }
});

// Gerar senha segura
function gerarSenha(
  tamanho,
  incluirMaiusculas,
  incluirMinusculas,
  incluirNumeros,
  incluirSimbolos
) {
  let caracteresDisponiveis = "";
  let senha = "";

  // Garantir pelo menos um caractere de cada grupo
  if (incluirMaiusculas) {
    caracteresDisponiveis += LETRAS_MAIUSCULAS;
    senha += caractereAleatorio(LETRAS_MAIUSCULAS);
  }

  if (incluirMinusculas) {
    caracteresDisponiveis += LETRAS_MINUSCULAS;
    senha += caractereAleatorio(LETRAS_MINUSCULAS);
  }

  if (incluirNumeros) {
    caracteresDisponiveis += NUMEROS;
    senha += caractereAleatorio(NUMEROS);
  }

  if (incluirSimbolos) {
    caracteresDisponiveis += SIMBOLOS;
    senha += caractereAleatorio(SIMBOLOS);
  }

  // Completar o restante da senha
  while (senha.length < tamanho) {
    senha += caractereAleatorio(
      caracteresDisponiveis
    );
  }

  // Embaralhar a ordem dos caracteres
  return embaralharSenha(senha);
}

// Retorna um caractere aleatório
function caractereAleatorio(caracteres) {
  const indiceAleatorio = Math.floor(
    Math.random() * caracteres.length
  );

  return caracteres[indiceAleatorio];
}

// Embaralha a senha
function embaralharSenha(senha) {
  const caracteres = senha.split("");

  for (
    let i = caracteres.length - 1;
    i > 0;
    i--
  ) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [caracteres[i], caracteres[j]] = [
      caracteres[j],
      caracteres[i],
    ];
  }

  return caracteres.join("");
}