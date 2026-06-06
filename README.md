# 🔐 Gerador de Senhas Aleatórias

Um gerador de senhas seguras desenvolvido com **HTML**, **Tailwind CSS** e **JavaScript**, permitindo personalizar o tamanho da senha e os tipos de caracteres utilizados.

## 📸 Demonstração

Digite o comprimento desejado da senha, selecione os tipos de caracteres que deseja incluir e clique em **Gerar Senha**. A aplicação cria uma senha aleatória e segura que pode ser copiada para a área de transferência com apenas um clique.

---

## 🚀 Funcionalidades

* Geração de senhas aleatórias
* Definição do comprimento da senha
* Inclusão opcional de:

  * Letras maiúsculas
  * Letras minúsculas
  * Números
  * Símbolos
* Garantia de pelo menos um caractere de cada categoria selecionada
* Botão para copiar a senha gerada
* Feedback visual ao copiar a senha
* Validação para impedir a geração de senhas sem categorias selecionadas
* Interface responsiva e intuitiva

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* Tailwind CSS
* JavaScript

---

## 📂 Estrutura do Projeto

```text
gerador-de-senhas/
│
├── index.html
├── script.js
└── README.md
```

---

## ⚙️ Como Executar

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/gerador-de-senhas.git
```

2. Acesse a pasta do projeto:

```bash
cd gerador-de-senhas
```

3. Abra o arquivo `index.html` em seu navegador.

---

## 🧠 Lógica da Aplicação

A senha é gerada seguindo os seguintes passos:

1. Captura das configurações selecionadas pelo usuário.
2. Montagem do conjunto de caracteres disponíveis.
3. Inclusão obrigatória de pelo menos um caractere de cada categoria escolhida.
4. Preenchimento do restante da senha com caracteres aleatórios.
5. Embaralhamento da ordem dos caracteres.
6. Exibição da senha na interface.

Esse processo garante maior segurança e evita que uma categoria selecionada fique ausente na senha final.

---

## 🔒 Exemplo de Senha Gerada

```text
A@7mK#2qP9!x
```

---

## 🎯 Possíveis Melhorias Futuras

* Barra de força da senha
* Histórico de senhas geradas
* Alternância entre tema claro e escuro
* Configuração de caracteres semelhantes (0/O, l/I)
* Geração automática em tempo real
* Indicador visual da complexidade da senha

---

## 👨‍💻 Autor

Desenvolvido por Valney Rodrigues como projeto de prática e aperfeiçoamento em JavaScript, manipulação do DOM e construção de interfaces responsivas.
