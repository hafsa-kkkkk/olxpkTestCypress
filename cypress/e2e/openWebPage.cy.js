///<reference types="cypress"/>

describe("verifty login all test cases", () => {
  it("verify login with phonenumber valid credentials", () => {
    cy.visit("https://olx.com.pk"); //open olxpk
    cy.get("button[aria-label='Login']").click();
    cy.get('button[class="_4408f4a8 _5d33e436"]:last-child').click();
    cy.get("#phone").type("03092083036");
    cy.get('button[class="_4408f4a8 _58676a35"]').click();
    cy.wait(10000);
    cy.get("#password").type("qa1234");
    cy.get('button[class="_4408f4a8 _58676a35"]').click();

    //cy.get(".gLFyf").type("{enter}");
  });

  it("verify login with phonenumber invalid password", () => {
    cy.visit("https://olx.com.pk"); //open olxpk
    cy.get("button[aria-label='Login']").click();
    cy.get('button[class="_4408f4a8 _5d33e436"]:last-child').click();
    cy.get("#phone").type("03092083036");
    cy.get('button[class="_4408f4a8 _58676a35"]').click();
    cy.wait(3000);
    cy.get("#password").type("qa123467");
    cy.get('button[class="_4408f4a8 _58676a35"]').click();
    cy.get('span[aria-label="Input error message"]').should(
      "have.text",
      "Invalid credentials."
    );

    //cy.get(".gLFyf").type("{enter}");
  });
  it("verify login with email valid credentials", () => {
    cy.visit("https://olx.com.pk"); //open olxpk
    cy.get("button[aria-label='Login']").click();
    cy.get('button[class="_4408f4a8 _5d33e436"]:nth-child(3)').click();
    cy.get("#email").type("hafsa.khan@dubizzlelabs.com");
    cy.get('button[class="_4408f4a8 _58676a35"]').click();
    cy.wait(3000);
    cy.get("#password").type("qa1234");
    cy.get('button[class="_4408f4a8 _58676a35"]').click();
  });
  it("verify login with email invalid password", () => {
    cy.visit("https://olx.com.pk"); //open olxpk
    cy.get("button[aria-label='Login']").click();
    cy.get('button[class="_4408f4a8 _5d33e436"]:nth-child(3)').click();
    cy.get("#email").type("hafsa.khan@dubizzlelabs.com");
    cy.get('button[class="_4408f4a8 _58676a35"]').click();
    cy.wait(3000);
    cy.get("#password").type("qa1234342");
    cy.get('button[class="_4408f4a8 _58676a35"]').click();
    cy.get('span[aria-label="Input error message"]').should(
      "have.text",
      "Invalid credentials."
    );
  });

  //.skip for skipping this test
  it.skip("passes", () => {
    cy.visit("https://olx.com.pk");
    //cy.get(".gLFyf").type("{enter}");
  });
});
// hello
