describe('Busca por voos', () => { // suite de testes

    context('Não Logado', () => { // cenario de teste
        const massaVoos = require('../../fixtures/massaVoos')

        beforeEach(() => { // a cada novo teste, ira abrir uma nova aba
            cy.visit('/') // acessar a url
        })

        it('Buscar voos entre São Paolo e Cairo - Simples', () => { // verificar se estamos na pagina correta
            cy.title().should('eq', 'BlazeDemo') // verificar o titulo da guia

            cy.get('select.form-inline')
                .eq(0) // o primeiro elemento com esse css selector
                .select('São Paolo') // cidade de origem

            cy.get('select.form-inline')
                .eq(1) // segundo elemento do css selector
                .select('Cairo') // destino

            cy.get('input.btn-primary')
                .click() // clicar no botão

            // carregar a proxima pagina

            // validar o titulo da guia e verificar o cabeçalho

            cy.title().should('eq', 'BlazeDemo - reserve') // verificar o titulo da guia

            cy.get('.container h3') // clase começa com ponto e a tag é a filha da classe
                .should('have.text', 'Flights from São Paolo to Cairo: ') // validar texto
        })

        massaVoos.array.forEach(({ origem, destino }) => {

            it(`Buscar voos entre ${origem} e ${destino} - Data Driven`, () => { // verificar se estamos na pagina correta
                cy.title().should('eq', 'BlazeDemo') // verificar o titulo da guia
    
                cy.get('select.form-inline')
                    .eq(0) // o primeiro elemento com esse css selector
                    .select(origem) // cidade de origem
    
                cy.get('select.form-inline')
                    .eq(1) // segundo elemento do css selector
                    .select(destino) // destino
    
                cy.get('input.btn-primary')
                    .click() // clicar no botão
    
                // carregar a proxima pagina
    
                // validar o titulo da guia e verificar o cabeçalho
    
                cy.title().should('eq', 'BlazeDemo - reserve') // verificar o titulo da guia
    
                cy.get('.container h3') // clase começa com ponto e a tag é a filha da classe
                    .should('have.text', `Flights from ${origem} to ${destino}: `) // validar texto
            })

        }) 
        
    })

})