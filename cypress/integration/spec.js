describe('Sapper template app', () => {
	beforeEach(() => {
		// cy.visit('/')
	});

	it('visit all sites:', () => {
		//Dashboard
		cy.visit("/pandora/dashboard")
		//Widgets
		cy.visit("/pandora/widgets")
		//Sample Pages
		cy.visit("/pandora/login")
		cy.visit("/pandora/register")
		cy.visit("/pandora/lockscreen")
		// cy.visit("/pandora/profile")
		cy.visit("/pandora/preloader")
		cy.visit("/pandora/404")
		cy.visit("/pandora/500")
		cy.visit("/pandora/product-list")
		cy.visit("/pandora/product")
		cy.visit("/pandora/invoice")
		cy.visit("/pandora/orders")
		// cy.visit("/pandora/order-details")
		cy.visit("/pandora/price-table")
		cy.visit("/pandora/maintenance")
		cy.visit("/pandora/coming-soon")
		cy.visit("/pandora/help-center")

		// Forms
		cy.visit("/pandora/forms-basic")
		cy.visit("/pandora/forms-extended")
		cy.visit("/pandora/forms-layouts")
		cy.visit("/pandora/forms-validating")
		
		// Tables
		cy.visit("/pandora/table-classes")
		cy.visit("/pandora/table-component")

		// UI Elements
		cy.visit("/pandora/colors")
		cy.visit("/pandora/typography")
		cy.visit("/pandora/buttons")
		// cy.visit("/pandora/tabs")
		cy.visit("/pandora/tiles")
		cy.visit("/pandora/treeview")
		cy.visit("/pandora/listview")
		cy.visit("/pandora/progress")
		cy.visit("/pandora/list")
		cy.visit("/pandora/splitter")
		cy.visit("/pandora/calendar")
		cy.visit("/pandora/countdown")

		//Media
		cy.visit("/pandora/video")
		cy.visit("/pandora/audio")

		//Information
		cy.visit("/pandora/windows")
		cy.visit("/pandora/dialogs")
		cy.visit("/pandora/info-boxes")
		cy.visit("/pandora/hints")

		//Mailbox
		cy.visit("/pandora/inbox")
		cy.visit("/pandora/inbox2")
		cy.visit("/pandora/compose")
		cy.visit("/pandora/read-email")
		
		//chat
		cy.visit("/pandora/chat")
		
		//wizards
		cy.visit("/pandora/master")
		cy.visit("/pandora/wizard")
		
		
		cy.visit("/pandora/notifies")
		cy.visit("/pandora/toasts")
		cy.visit("/pandora/index")
	
	});

	// it('navigates to /about', () => {
	// 	cy.get('nav a').contains('about').click();
	// 	cy.url().should('include', '/about');
	// });

	// it('navigates to /blog', () => {
	// 	cy.get('nav a').contains('blog').click();
	// 	cy.url().should('include', '/blog');
	// });
});