describe('позитивный кейс авторизации', function () {

    it('Верный логин и пароль', function () {
         cy.visit('https://login.qa.studio'); // зашел на сайт

         cy.get('#mail').type('german@dolnikov.ru'); // ввод верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввод верный пароль
         cy.get('#loginButton').click(); // нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно') // после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // есть текст и он виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крест и он виден
     })
 }) 

 describe('Проверка логики восстановления пароля', function () {

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio'); // зашел на сайт
    
        cy.get('#forgotEmailButton').click(); // нажал ввосстановить пароль
        cy.get('#mailForgot').click();
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввел почту для восстановления 
        cy.get('#restoreEmailButton').click(); // нажать отправить код
    
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail') // увижу текст проверка на совпадение
        cy.get('#messageHeader').should('be.visible'); // есть текст и он виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крест и он виден
     })
 }) 

 describe('негативный кейс авторизации', function () {

    it('Верный логин и не верный пароль', function () {
         cy.visit('https://login.qa.studio'); // зашел на сайт

         cy.get('#mail').type('german@dolnikov.ru'); // ввод верный логин
         cy.get('#pass').type('kakoyjetammogbytparo1'); // ввод не верный пароль
         cy.get('#loginButton').click(); // нажал войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет') // после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // есть текст и он виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крест и он виден
     })
 }) 

 describe('негативный кейс авторизации', function () {

    it('НЕ Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio'); // зашел на сайт

         cy.get('#mail').type('semen.uglev@ingka.com'); // ввод не верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввод верный пароль
         cy.get('#loginButton').click(); // нажал войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет') // после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // есть текст и он виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крест и он виден
     })
 }) 

 describe('негативный кейс валидации', function () {

    it('ввод почты без @', function () {
         cy.visit('https://login.qa.studio'); // зашел на сайт

         cy.get('#mail').type('semen.uglev.ingka.com'); // ввод не верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввод верный пароль
         cy.get('#loginButton').click(); // нажал войти

         cy.get('#messageHeader').contains('Нужно исправить проблему валидации') // после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // есть текст и он виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крест и он виден
     })
 }) 

 describe('приведение к строчным буквам в логине', function () {

    it('Верный логин и пароль', function () {
         cy.visit('https://login.qa.studio'); // зашел на сайт

         cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввод верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввод верный пароль
         cy.get('#loginButton').click(); // нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно') // после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // есть текст и он виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крест и он виден
     })
 }) 