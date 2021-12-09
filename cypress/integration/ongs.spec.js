//Auto completa um comando cypress e traz o link da documentacao
/// <reference types="cypress" />

const cypress = require("cypress");

describe('Ongs', () =>{
    it('devem poder realizar um cadastro', () => {

        cy.visit('http://localhost:3000/register');

                //cy.wait('@getProfile')

        //cy.get - busca um elemtento
        //.type - insere um texto
        cy.get('[data-cy=name]').type('Dogs queridos');
        cy.get('[data-cy=email]').type('dogs@mail.com');
        cy.get('[data-cy=whatsapp]').type('51999999999');
        cy.get('[data-cy=city]').type('Cuiaba');
        cy.get('[data-cy=uf]').type('MT');
       
        //routing
        //start server com cy.server()
        //criar uma rota com cy.router()
        //atribuir rota a um alias
        //esperar com cy.wait e fazer uma validacao

        //cy.server();
        cy.route('POST', '**/ongs').as('postOng');


        cy.get('[data-cy=submit]').click();

        

        cy.wait('@postOng').then((xhr)=>{
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        });
    });

    it('deve poder realizar um login no sistema', () =>{
        // cy.request({
        //     method: 'POST',
        //     url: 'http://localhost:3000/',
        //     body:{
        //         name: "Gatos queridos",
        //         email: "gatos@mail.com",
        //         whatsapp: "51999999999",
        //         city: "Cuiaba",
        //         uf: "MT"
        //     }
        // }).then(response =>{
        //     expect(response.body.id).is.not.null;
        //     cy.log(response.body.id);

        //     cypress.env('createdOngId', response.body.id);
        // });

        // const createOngId = ;

        // cy.log(createOngId);

        cy.visit('http://localhost:3000/');
        cy.get('input').type(Cypress.env('createdOngId'));
        cy.get('.button').click();
    });
});