class MailBoxPage {

    goToSendBox(email){
        cy.get(':nth-child(3) > .sidebar-inbox-item').click();
        return this;
    }

    uploadDocument(yourFixturePath){
        cy.get('[class="d-none"]').attachFile({ filePath: yourFixturePath, encoding: 'base64', mimeType : 'application/pdf'});
        cy.wait(12000);
    }

    choosePatient(patient){
        cy.get('[class="text-capitalize text-truncate font-weight-bold"]').contains(patient).click();
        return this;
    }

    deletePatient(patient){
        cy.get('[type="checkbox"]').contains(patient).click();
        cy.get('[class="btn btn-outline-dark"]').contains("Annuler").click();
        cy.get('[class="btn btn-primary"]').click();
        return this;
    }

}

export default MailBoxPage;