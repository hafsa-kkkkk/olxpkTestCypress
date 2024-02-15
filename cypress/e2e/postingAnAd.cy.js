///<reference types="cypress"/>

describe("verifty ad posting flows", () => {
    it.only("POst an ad with sell faster now", () => {
    //login with phone number and post an ad with "sell" button from home page
      cy.visit("https://olx.com.pk"); //open olxpk
      cy.get("button[aria-label='Login']").click();
      cy.get('button[class="_4408f4a8 _5d33e436"]:last-child').click();
      cy.get("#phone").type("03092083036");
      cy.get('button[class="_4408f4a8 _58676a35"]').click();
      cy.wait(10000);
      cy.get("#password").type("qa1234");
      cy.get('button[class="_4408f4a8 _58676a35"]').click();

      //click on sell
      cy.get("div[class='_1075545d a662c662 _42f36e3b _96d4439a']").click();
      
  
      //cy.get(".gLFyf").type("{enter}");
    });

});