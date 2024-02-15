// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import Cypress from 'cypress';


Cypress.Commands.add('ovationCall', () => {
    cy.request({
        method: "POST",
        url: "https://ovation.olx.com.pk/ingest/adMetric/",
        body: {
            "ad_external_id": "1078184457",
            "ad_source": "imported",
            "ad_type": "general",
            "app_type": "web_desktop",
            "attributions": [],
            "client_device_id": "lnbn7ywop5ozo9mle",
            "client_session_id": "2f67b4c9-82e9-4c0b-a71c-29b4cbe258f4",
            "client_user_external_id": "2963bfbe-07bf-4a06-ad21-c20e385abca6",
            "facebook_browser_id": "fb.2.1696417574710.1980353261",
            "facebook_click_id": null,
            "google_client_id": "536979957.1696417574",
            "metric_action": "view",
            "metric_entity": "phone",
            "metric_source": "search",
            "unique_event_id": "44a6e242-f4fe-40be-b1fa-30fe432b8112"
        }
    }).then((Response) => {
        expect(Response.status).eq(201);
        //let actualValue = Response.body[0].app_type
        //expect(Response.body[0].app_type).to.eq("web_desktop")
        // cy.log(Response.body)
        cy.log(JSON.stringify(Response.body))
        // cy.wrap(Response.body)
        // .its('metric_entity')
        // .should('eq', 'phone');
    });
});

cypress.Commands.add('get_logintoken', ()=>{

    //login 
    let accessToken;
    let refreshToken;
    let idToken;

  cy.request({
    method:'POST',
    url: 'https://auth.olx.com.pk/auth/realms/olx-pk/protocol/openid-connect/token',
    form: true,
    body:{

    grant_type: "password",
    client_id: "frontend",
    scope: "openid",
    type: "phone_password",
    phone_number: "+9203092083036",
    password: "qa12345"

    }

    }).then((response)=>{
      expect(response.status).to.eq(200)
      accessToken = response.access_token
      refreshToken = response.refresh_token
      idToken = response.id_token
      
    })

})
