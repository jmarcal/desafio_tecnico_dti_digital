/// <reference types="cypress" />

describe('Desafio Técnico - Quality Assurance Engineer', () => {
    beforeEach(() => {
      // Acessando a página de login 
      cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
    });
  
    it('Cenário 1: Login com credenciais válidas', () => {
      // Dado que o usuário esteja na página "automation practice"
      cy.get('#email').type('emailvalido@example.com');
      cy.get('#passwd').type('senhaValida123');
  
      // Quando o usuário clicar no botão "Sign in"
      cy.get('#SubmitLogin').click();
  
      // Então o usuário deve ser redirecionado para a página "My Account"
      cy.url().should('include', 'controller=my-account');
      cy.get('.page-heading').should('contain', 'My account');
    });
  
    it('Cenário 2: Login com credenciais inválidas', () => {
      // Dado que o usuário esteja na página "automation practice"
      cy.get('#email').type('emailinvalido@example.com');
      cy.get('#passwd').type('senhaInvalida123');
  
      // Quando o usuário clicar no botão "Sign in"
      cy.get('#SubmitLogin').click();
  
      // Então o sistema deve exibir uma mensagem de erro
      cy.get('.alert-danger').should('be.visible');
      cy.get('.alert-danger').should('contain', 'Authentication failed.');
    });
  
    it('Cenário 3: Tentativa de login com campos vazios', () => {
      // Dado que o usuário esteja na página "automation practice"
  
      // Quando o usuário clicar no botão "Sign in" sem preencher os campos
      cy.get('#SubmitLogin').click();
  
      // Então o sistema deve exibir mensagens de erro indicando os campos obrigatórios
      cy.get('.alert-danger').should('be.visible');
      cy.get('.alert-danger').should('contain', 'An email address required.');
    });
  });