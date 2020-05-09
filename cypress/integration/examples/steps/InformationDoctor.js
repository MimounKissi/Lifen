class InformationDoctor {

    addReceiverBySearch(name){
        cy.get('[class="text-truncate btn btn-light"]').click();
        cy.get('[role="combobox"]').type(name);
        cy.get('#rbt-menu-item-1').click();
        return this;
    }

    
}

export default InformationDoctor;