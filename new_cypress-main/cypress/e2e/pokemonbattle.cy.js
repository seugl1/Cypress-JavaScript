describe('Еду в магазин Gucci в Санкт-Петербурге', function () {
    it('покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get('input[type="email"]').type('USER_LOGIN');
         cy.get('input[type="password"]').type('USER_PASSWORD');
         cy.get('.auth__button').click();
         cy.get('.header__btns > :nth-child(4)').click();
         cy.get('.available > button').first().click();
         cy.get('.credit').type('4111111111111111');
         cy.get('.k_input_ccv').type('125');
         cy.get('.k_input_date').type('1225');
         cy.get('.k_input_name').type('SEREGA OTPAD');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.contains('Покупка прошла успешно').should('be.visible');
     });
 });
 