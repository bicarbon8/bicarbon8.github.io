describe('bicarbon8.github.io', () => {
  beforeEach(() => {
    cy.disableRemoteAccess();
  })

  it('can display the landing page', () => {
    cy.intercept('/assets/image-data.json', (res) => res.continue()).as('imageData');
    cy.visit('/')
    
    /** check navbar contents */
    cy.get('a.navbar-brand').contains('JHS');
    cy.get('li.nav-item.dropdown').should('exist').and('have.length.above', 1);
    cy.get('button.btn-success').should('have.length.above', 1);
    cy.get('a.bi-tools').should('have.length.above', 1);

    /** check carousel contents */
    cy.wait('@imageData').then((interception) => {
      assert.isNotNull(interception.response.body, 'local image data returned')
    });
    cy.get('button.carousel-control-prev').should('exist');
    cy.get('button.carousel-control-next').should('exist');
    cy.get('img.d-block').should('exist').and('have.length.above', 1);

    /** check footer contents */
    cy.get('span.text-muted').contains('Jason Holt Smith');
  })

  it('displays loading animation on slow data load', () => {
    cy.intercept({
      url: '*/assets/*.json',
      middleware: true,
    }, (req) => {
      req.on('response', (res) => {
        // Throttle the response to be very slow
        res.setThrottle(0.000001);
      });
    }).as('VerySlowResponse');
    cy.visit('/');

    cy.get('header div.dot-flashing').should('exist');
    cy.get('main div.dot-flashing').should('exist');

    cy.get('li.nav-item.dropdown').should('have.length.above', 1);
    cy.get('img.d-block').should('exist').and('have.length.above', 1);

    cy.get('header div.dot-flashing').should('not.exist');
    cy.get('main div.dot-flashing').should('not.exist');
  })

  it('handles data load error in navigation service', () => {
    cy.intercept('assets/site-map.json', {fixture: '404-not-found'});
    cy.visit('/');

    /** check navbar contents */
    cy.get('a.navbar-brand').contains('JHS');
    cy.get('li.nav-item.dropdown').should('not.exist');

    /** check carousel contents */
    cy.get('button.carousel-control-prev').should('not.exist');
    cy.get('button.carousel-control-next').should('not.exist');
    cy.get('img.d-block').should('not.exist');
  })

  it('handles data load error in carousel service', () => {
    cy.intercept('assets/image-data.json', {fixture: '404-not-found'});
    cy.visit('/');

    /** check navbar contents */
    cy.get('a.navbar-brand').contains('JHS');
    cy.get('li.nav-item.dropdown').should('exist').and('have.length.above', 1);

    /** check carousel contents */
    cy.get('button.carousel-control-prev').should('exist');
    cy.get('button.carousel-control-next').should('exist');
    cy.get('img.d-block').should('exist');
  })

  it('can load images from remote service', () => {
    cy.intercept('GET', /^https:\/\/[i\.]*picsum.photos\/.*/, (res) => res.continue());
    cy.visit('/');

    cy.get('button.carousel-control-prev', {timeout: 30000}).should('exist');
    cy.get('button.carousel-control-next').should('exist');
    cy.get('img.d-block').should('exist').and('have.length.above', 1);
  })
})
