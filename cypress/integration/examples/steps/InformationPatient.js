class InformationPatient {

    editInformations(email){
        cy.wait(3000);
        cy.get('#update-patient-button').click();
        return this;
    }

    updateLastName(lastName){
        cy.get('#lastname').clear();
        cy.get('#lastname').type(lastName);
        return this;
    }

    updateFirstName(firstName){
        cy.get('#firstname').clear();
        cy.get('#firstname').type(firstName);
        return this;
    }

    updateBirthDate(birthDate){
        cy.get('#patientBirthDate').clear();
        cy.get('#patientBirthDate').type(birthDate);
        return this;
    }

    updateEmail(email){
        cy.get('#patientEmail').clear();
        cy.get('#patientEmail').type(email);
        return this;
    }

    updatePhoneNumber(phoneNumber){
        cy.get('#patientPhoneNumber').clear();
        cy.get('#patientPhoneNumber').type(phoneNumber);
        return this;
    }

    submit(){
        cy.get('.ml-auto').click();
        return this;
    }

    gToSendBox(){
        cy.get('[class="ml-2 align-middle d-xs-none"]').click();
        return this;
    }

    checkUpdateName(NameUpdate){
        cy.wait(1000)
        cy.get('.d-flex > .text-capitalize').contains(NameUpdate);
        return this;
    }

    checkUpdateBirthDate(birthDate){
        cy.wait(1000)
        cy.get('[class="text-nowrap d-none d-sm-inline"]').contains('('.concat(birthDate).concat(')'));
        return this;
    }
}

export default InformationPatient;