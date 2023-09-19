describe( "Exercicios",() =>{
   
       
    
    it('Exercicio 1',()=>{
        cy.visit("https://www.google.com");
        cy.get('[class="gLFyf"]').click();
        cy.get('[class="gLFyf"]').type("Casa na natureza").type("{ENTER}");
        cy.get('[class="uhHOwf BYbUcd"]').eq(0).click();
        cy.contains('Airbnb Newsroom').should('be.visible');

    })
    it.only('Adicionar item no carrinho', () => {
        cy.visit('https://www.madeiramadeira.com.br/')
        cy.get('[class="cav--c-iIPOwB"]', { timeout: 20000 }).eq(0).click({ force: true });
        cy.get('[href="/cama-solteiro-multifuncional-2-gavetas-kiara-conquista-moveis-709194.html?index=vr-prod-poc-madeira-listings-best-seller-desc"]', { timeout: 20000 }).eq(0).click({ force: true });
        cy.get('[class="cav--c-iOefvc cav--c-iOefvc-fGlPcc-variant-primary cav--c-iOefvc-ieZmGuu-css"]', { timeout: 30000 }).eq(0).click({ force: true });
        cy.get('[class="cav--c-gNPphv cav--c-gNPphv-cdLabr-textStyle-bodyMediumSemibold cav--c-gNPphv-iDlqYz-css"]', { timeout: 6000 }).should('be.visible')
    
      })
      cy.visit("https://www.madeiramadeira.com.br/");
      cy.get('[id="searchAutoComplete"]').eq(1).click();
      cy.get('[id="searchAutoComplete"]').eq(1).type("Armário").type("{ENTER}")
      cy.get('[class="cav--c-lesPJm cav--c-eittNB cav--c-hsAhXH"]').eq(0).click();
      cy.get('[class="cav--c-iOefvc cav--c-iOefvc-kAkgtL-variant-secondary cav--c-iOefvc-icLCAaD-css"]', {timeout:5000}).click({force: true});
      cy.get('[class="svg-inline--fa fa-shopping-cart fa-w-18 "]').eq(0).click();
      cy.get('[class="cav--c-fcCJfA cav--c-fcCJfA-bICGYT-orientation-horizontal"]').eq(0).click();
  })

    
