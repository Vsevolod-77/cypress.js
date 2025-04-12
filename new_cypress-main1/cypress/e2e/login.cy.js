describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');//Зашёл на сайт

         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверил кнопку забыли пароль

         cy.get('#mail').type('german@dolnikov.ru');//Ввел верный логин
         cy.get('#pass').type('iLoveqastudio1');//Ввел верный пароль
         cy.get('#loginButton').click();//Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно');//Сверил текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверил, что есть крестик и он виден пользователю
 
     })

     it('Проверка логики востановления пароля', function () {
        cy.visit('https://login.qa.studio/');//Зашёл на сайт

        cy.get('#forgotEmailButton').click();//Нашёл кнопку забыли пароль и нажал

        cy.get('#mailForgot').type('german@dolnikov.ru');//ввел логин
        cy.get('#restoreEmailButton').click();//Нашёл кноку отправить код и нажал
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//Сверил сообщение
        
 })

 it('Неверный пароль и верный логин', function () {
    cy.visit('https://login.qa.studio/');//Зашёл на сайт

    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверил кнопку забыли пароль

    cy.get('#mail').type('german@dolnikov.ru');//Ввел верный логин
    cy.get('#pass').type('iLoveqastudio7');//Ввел неверный пароль
    cy.get('#loginButton').click();//Нажал войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет');//Сверил текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверил, что есть крестик и он виден пользователю

})

it('Верный пароль и неверный логин', function () {
    cy.visit('https://login.qa.studio/');//Зашёл на сайт

    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверил кнопку забыли пароль

    cy.get('#mail').type('Podsvirov@mail.ru');//Ввел неверный логин
    cy.get('#pass').type('iLoveqastudio1');//Ввел верный пароль
    cy.get('#loginButton').click();//Нажал войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет');//Сверил текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверил, что есть крестик и он виден пользователю

})

it('Негативный кейс валидации', function () {
    cy.visit('https://login.qa.studio/');//Зашёл на сайт

    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверил кнопку забыли пароль

    cy.get('#mail').type('germandolnikov.ru');//Ввел логин без @
    cy.get('#pass').type('iLoveqastudio1');//Ввел верный пароль
    cy.get('#loginButton').click();//Нажал войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//Сверил текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверил, что есть крестик и он виден пользователю

})

it('Приведение к строчным буквам', function () {
    cy.visit('https://login.qa.studio/');//Зашёл на сайт

    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверил кнопку забыли пароль

    cy.get('#mail').type('GerMan@Dolnikov.ru');//Ввел верный логин с строчными буквами
    cy.get('#pass').type('iLoveqastudio1');//Ввел верный пароль
    cy.get('#loginButton').click();//Нажал войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно');//Сверил текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверил, что есть крестик и он виден пользователю

})
  
 })
 
 