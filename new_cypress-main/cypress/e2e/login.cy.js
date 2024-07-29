describe('Проверка авторизации', function () {

    it('Верный логин и пароль', function () {
         cy.visit('https://login.qa.studio'); // зашел на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки 

         cy.get('#mail').type('german@dolnikov.ru'); // ввод верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввод верный пароль
         cy.get('#loginButton').click(); // нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно') // после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // есть текст и он виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крест и он виден
     })
 }) 

 describe('Проверка авторизации не верный пароль', function () {

    it('Верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio'); // зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки 
    
        cy.get('#mail').type('german@dolnikov.ru'); // ввод верный логин
        cy.get('#pass').type('iLoveqastudio2'); // ввод не верный парль
        cy.get('#loginButton').click(); // нажал войти
    
        cy.get('#messageHeader').contains('Такого логина или пароля нет') // после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // есть текст и он виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крест и он виден
     })
 }) 

 describe('Проверка валидации', function () {

    it('Верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio'); // зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки 
    
        cy.get('#mail').type('germandolnikov.ru'); // ввод логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввод верный парль
        cy.get('#loginButton').click(); // нажал войти
    
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации') // после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // есть текст и он виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крест и он виден
     })
 }) 

 describe('Проверка восстановелния пароля', function () {

    it('Верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio'); // зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки 
    
        cy.get('#forgotEmailButton').click(); // нажал ввосстановить пароль
        cy.get('#mailForgot').click();
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввлж почты для восстановления 
        cy.get('#restoreEmailButton').click(); // отправить код
    
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail') // увижу текст проверка на совпадение
        cy.get('#messageHeader').should('be.visible'); // есть текст и он виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крест и он виден
     })
 }) 