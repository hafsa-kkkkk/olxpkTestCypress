import '../support/ovationCommand.js'

///<reference types="cypress"/>
describe("verifty Ovation flows", () => {
    it.only("call ovation from LPV", () => {
        //login with phone number and post an ad with "sell" button from home page
        cy.visit("https://olx.com.pk"); //open olxpk
        cy.get("button[aria-label='Login']").click();
        cy.get('button[class="_4408f4a8 _5d33e436"]:last-child').click();
        cy.get("#phone").type("03092083036");
        cy.get('button[class="_4408f4a8 _58676a35"]').click();
        cy.wait(10000);
        cy.get("#password").type("qa1234");
        cy.get('button[class="_4408f4a8 _58676a35"]').click();
        cy.wait(10000);

        // going to search page
        cy.get('button[aria-label="Search"]').click();
        cy.wait(15000);
        //clicking on call button
        cy.get('span[class="_5079de6b f21b9e70 be13fe44"]').eq(0).click();
        //check ocvation value of call
        cy.ovationCall();



    });

});
