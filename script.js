//your JS code here. If required.
() => {
    // Check Section 1 (full-width)
    cy.get('.container-fluid .row > .col-12 .section')
        .should('have.length', 1)
        .should('contain', '1');

    // Check Left Column (Section 2)
    cy.get('.container-fluid .row > .col-md-6:first .section')
        .should('have.length', 1)
        .should('contain', '2');

    // Check Right Column Sections
    cy.get('.container-fluid .row > .col-md-6:last .section').should('have.length', 8);

    // Specific checks for right column layout
    cy.get('.container-fluid .row > .col-md-6:last .col-6 .section').should('have.length', 4); // Sections 3, 4, 5, 6
    cy.get('.container-fluid .row > .col-md-6:last .col-4 .section').should('have.length', 3); // Sections 7, 8, 9
    cy.get('.container-fluid .row > .col-md-6:last .col-12 .section')
        .should('have.length', 1)
        .should('contain', '10');

    // Check flexbox properties
    cy.get('.section').should('have.css', 'display', 'flex');
}