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
        cy.wait(10000);
        //clicking on call button
        cy.get('body > div:nth-child(10) > div:nth-child(2) > header:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(3) > li:nth-child(1) > article:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(9) > div:nth-child(1) > button:nth-child(1)]').click();



    });

});
