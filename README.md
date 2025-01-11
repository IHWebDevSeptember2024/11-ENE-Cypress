# Cypress testing

## Métodos
En cypress, los métodos más utilizados son:

- **cy.get()**: Permite seleccionar un elemento del DOM.
- **cy.contains()**: Permite seleccionar un elemento por su contenido.
- **cy.click()**: Permite hacer click en un elemento.
- **cy.type()**: Permite escribir en un input.
- **cy.url()**: Permite obtener la url actual.
- **cy.visit()**: Permite visitar una url.
- **cy.reload()**: Permite recargar la página.
- **cy.wait()**: Permite esperar un tiempo determinado.

## Ejemplo
```javascript
describe('Test', () => {
    it('Visitar página', () => {
        cy.visit('https://www.google.com');
        cy.get('input[name="q"]').type('Cypress');
        cy.get('input[name="btnK"]').click();
        cy.url().should('include', 'search');
    });
});
```

Recuerda que puedes visitar la página de [Cypress](https://www.cypress.io/) para obtener más información. No olvides que leer la documentación es muy importante.