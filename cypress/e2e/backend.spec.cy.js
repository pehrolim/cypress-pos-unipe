describe ("Backend Tests", () => {
    
    it("TC01 - Requisição HTTP - GET", () => {
        cy.request('https://httpbin.org/get')
            .should(function(response) {
                const {status, statusText} = response;
                expect(status).to.equal(200);
                expect(statusText).to.equal('OK');
            })

    })

    it("TC02 - Requisição HTTP - POST", () => {
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: {
                name: 'Pedro',
                age: '31'
            }

        }).should(function(response) {
            const {status, statusText} = response;
            expect(status).to.equal(200);
            expect(statusText).to.equal('OK');
        })

    })

})