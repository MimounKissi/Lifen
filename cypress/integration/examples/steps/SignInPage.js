class SignInPage {
    visit() {
        cy.viewport(1501, 768);
        cy.visit('https://app.lifen.fr/');
        return this;
    }

    fillEmail(email){
        cy.get('#email').type(email);
        return this;
    }

    fillPassword(password){
        cy.get('#password').type(password);
        return this;
    }

    submit(){
        cy.get('#continueButton').click();
        return this;
    }

}

export default SignInPage;
