# Projeto de Automação E2E com Cypress

## Descrição do Projeto
Este projeto foi desenvolvido para atender o desafio técnico da DTI Digital de automação E2E utilizando Cypress . Foram criados 6 cenários de teste:
- **Login:**
  1. Login com credenciais válidas.
  2. Login com credenciais inválidas.
  3. Login com campos vazios.
- **Cadastro de Conta:**
  1. Cadastro com e-mail válido.
  2. Cadastro com e-mail inválido.
  3. Cadastro sem preencher o campo de e-mail.

Além disso, foi utilizada a biblioteca **Faker.js** para geração de dados aleatórios, como e-mails e senhas.

## Ferramentas Utilizadas
- **Framework:** Cypress
- **Linguagem de Programação:** JavaScript
- **Biblioteca:** Faker.js
- **IDE Recomendada:** Visual Studio Code (VSCode)

---

## Como Clonar o Projeto
1. Certifique-se de que você possui o **Git** instalado em sua máquina.
2. Execute o seguinte comando no terminal para clonar o repositório:
   ```bash
   git clone <https://github.com/jmarcal/desafio_tecnico_dti_digital.git>
   ```
3. Acesse o diretório do projeto:
   ```bash
   cd <NOME_DO_DIRETORIO_NOMEADO>
   ```

---

## Como Configurar o Ambiente
1. Certifique-se de que você possui o **Node.js** instalado em sua máquina.
2. Instale as dependências do projeto executando o comando:
   ```bash
   npm install
   ```
3. Instale o **Cypress** (caso não esteja instalado como dependência):
   ```bash
   npm install cypress --save-dev
   ```
4. Instale a biblioteca **Faker.js**:
   ```bash
   npm install @faker-js/faker
   ```

---

## Como Executar os Testes
1. Abra o Cypress no terminal com o seguinte comando:
   ```bash
   npx cypress open
   ```
2. No painel do Cypress, selecione o arquivo de teste desejado e execute os testes.

---

## Estrutura do Projeto
```
project-root/
├── cypress/
│   ├── e2e/
│   │   ├── criar-conta.cy.js
│   │   ├── login.cy.js
│   ├── fixtures/
│   ├── support/
├── node_modules/
├── package.json
├── package-lock.json
└── README.md
```

---

## Instruções Adicionais
- Certifique-se de que as URLs de teste estão disponíveis antes de executar os testes.
- Utilize a IDE **VSCode** para melhor experiência de desenvolvimento e edição.
- Os dados gerados com **Faker.js** são dinâmicos e podem ser utilizados para cenários de teste variados.

---

## Contato
Caso tenha dúvidas ou precise de suporte, entre em contato pelo e-mail: [jamescarlos.984@gmail.com].


