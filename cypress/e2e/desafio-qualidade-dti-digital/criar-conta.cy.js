/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Desafio Técnico - Quality Assurance Engineer - Criar Conta', () => {

    let emailAleatorio;
    let senhaAleatoria;
    
    before(() => {
    // Gerar email e senha aleatórios antes dos testes
        emailAleatorio = faker.internet.email();
        senhaAleatoria = faker.internet.password(8); // Senha com pelo menos 8 caracteres
    });

    beforeEach(() => {
      // Acessando a página para realizar o fluxo de criação de conta
      cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
    });
  
    it('Cenário 1: Criar conta com email válido', () => {
      // Dado que o usuário esteja na página "automation practice" na seção de criar conta
      cy.get('#email_create').type(emailAleatorio);
  
      // Quando o usuário clicar no botão "Create an account" ou "Criar conta"
      cy.get('#SubmitCreate').click();
  
      // E o sistema deve redirecionar para o formulário de registro
      cy.url().should('include', 'controller=authentication&back=my-account#account-creation');
      cy.get('#account-creation_form').should('be.visible');

      // E preencher o formulário de cadastro
      cy.get('#customer_firstname').type('DTI');
      cy.get('#customer_lastname').type('DIGITAL');
      cy.get('#passwd').type(senhaAleatoria);
      cy.get('#submitAccount > span').click();

      // Então o sistema deve apresentar a mensagem de sucesso "Your account has been created."
      cy.contains('Your account has been created.').should('be.visible');
    });
  
    it('Cenário 2: Criar conta com email inválido', () => {
      // Dado que o usuário esteja na página "automation practice" na seção de criar conta
      cy.get('#email_create').type('emailinvalido');
  
      // Quando o usuário clicar no botão "Create an account" ou "Criar conta"
      cy.get('#SubmitCreate').click();
  
      // Então o sistema deve exibir uma mensagem de erro indicando email inválido
      cy.get('#create_account_error').should('be.visible');
      cy.get('#create_account_error').should('contain', 'Invalid email address.');
    });
  
    it('Cenário 3: Criar conta sem preencher o campo de email', () => {
      // Dado que o usuário esteja na página "automation practice" na seção de criar conta
  
      // Quando o usuário clicar no botão "Create an account" ou "Criar conta" sem preencher o campo
      cy.get('#SubmitCreate').click();
  
      // Então o sistema deve exibir uma mensagem de erro indicando o campo e-mail como inválido
      cy.get('#create_account_error').should('be.visible');
      cy.get('#create_account_error').should('contain', 'Invalid email address.');
    });
  });

  