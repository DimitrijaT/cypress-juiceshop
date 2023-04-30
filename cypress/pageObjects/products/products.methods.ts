import { ProductElements } from "./products.elements";

export class ProductMethods{
    addItemToBasket(item: string){
        ProductElements.ElementsProduct.getBtnSearch().click();
        ProductElements.ElementsProduct.getTxtSearch().type(item);
        ProductElements.ElementsProduct.getTxtSearch().type('{enter}');
        ProductElements.ElementsProduct.getBtnAddToBasket().click();
    }
    verifyItemAddedToBasket(numAdded: string){
        ProductElements.ElementsProduct.getLblNotification().should('have.text', numAdded)
    }
    removeItemFromBasket(){
        ProductElements.ElementsProduct.getBtnBasket().click();
        ProductElements.ElementsProduct.getBtnRemoveFromBasket().click();
    }
    verifyItemRemovedFromBasket(numRemoved: string){
        ProductElements.ElementsProduct.getLblNotification().should('have.text', numRemoved)
    }
    verifyItemNotInStock(){
        ProductElements.ElementsProduct.getLblOutOfStock().should('have.text', 'We are out of stock! Sorry for the inconvenience.')
        ProductElements.ElementsProduct.getLblNotification().should('have.text', "0")
    }

}