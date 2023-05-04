import * as homepage from '../support/home_page';
import * as searchpage from '../support/search_page';
import * as facetpage from '../support/facet';


describe("Verify user can able to search Noiseless Headphones and apply a discount filter", () => {
    beforeEach(() => {
      cy.fixture("/user_input").as("admin");
    });
    
    it("Enter the Search keyword and click search button", function() {
        cy.visit(this.admin.url);  
        homepage.enterValue_Searchbar(this.admin.searchKeyword)  
    })

    it('User should verify the search landing page',function(){
        searchpage.verifySearchResult_Msg(this.admin.searchResult_text)
    });

    it('User should able to select "50 - 60" discount facet', function(){
         facetpage.discount_filter(this.admin.discount_facet)
    });

});
