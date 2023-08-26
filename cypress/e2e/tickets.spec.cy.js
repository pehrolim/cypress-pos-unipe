describe ("Tickets", () => {
    beforeEach (() => cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html'))

    it("TC01 - Input First and Last Name", () => {
        const firstName = "Pedro";
        const lastName = "Rolim";
        const fullName = `${firstName} ${lastName}`

        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('.agreement p').should('contain', `I, ${fullName}, wish to buy 1 General Admission ticket. I understand that all ticket sales are final.`)
    });

    it("TC02 - Compra de Ingresso Full", () => {
        const firstName = "Pedro";
        const lastName = "Rolim";
        const email = `teste@gmail.com`;
        const fullName = `${firstName} ${lastName}`;

        cy.get('#first-name').type(firstName, { delay: 0});
        cy.get('#last-name').type(lastName, { delay: 0});
        cy.get('#email').type(email, { delay: 0});
        cy.get('#ticket-quantity').select('2');
        cy.get('#vip').check();
        cy.get('#publication').check();
        cy.get('#requests').type('asdas dsad as das');
        cy.get('.agreement p').should('contain', `I, ${fullName}, wish to buy 2 VIP tickets. I understand that all ticket sales are final.`);
        cy.get('#agree').check();
        cy.get('#signature').type(fullName, { delay: 0});
        cy.get('.active').click();
        cy.get('.success').should('be.visible');
        cy.get('.success').should('contain', 'Ticket(s) successfully ordered.');
    });

    it.only("TC03 - Compra de Ingresso Campos Obritatórios", () => {
        const user = {
            firstName: "Pedro",
            lastName: "Rolim",
            email: `teste@gmail.com`
        }


        cy.filMandatory(user);

        cy.get('.active').click();
        cy.get('.success').should('be.visible');
        cy.get('.success').should('contain', 'Ticket(s) successfully ordered.');
    });

})