Cypress.Commands.add("ovationCall", () => {
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
    });
});