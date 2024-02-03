const locators = {

    register: {
        titlePageRegister: 'h1.page-title span.base[data-ui-id="page-title-wrapper"]',
        inputName: 'input[id="firstname"]',
        inputLastName: 'input[id="lastname"]',
        inputEmail: 'input[id="email_address"]',
        inputPassword: 'input[id="password"]',
        inputConfirmPassword: 'input[id="password-confirmation"]',
        btnRegister: 'button.action.submit.primary[title="Create an Account"]',        
        msgWelcome: 'div[class="swal2-html-container"]',
        btnOk: 'button[class="swal2-confirm swal2-styled"]',
        alertErro: 'span[class="errorLabel"]'
    },

    login: {
        inputEmail: 'input[id="email"]',
        inputPassword: 'input[id="pass"]',
        btnLogin: 'button[id="send2"]',       
        btnOk: '.swal2-confirm',
        checkbox: 'input[id="materialUnchecked"]',
        linkCreateAccount: 'a.action.create.primary',
        titlePageLogin: '.account_form > h3'
    },

    addToCart: {
        btnLogout: 'a[href="/#!"]',
        msgThanks: 'div[id="swal2-html-container"]',
        btnWhatsNew: 'ui-id-3',
        btnAddToCart: 'button[id="product-addtocart-button"]',
        btnAddSize28: '#option-label-size-157-item-175',
        btnAddCollorBlack: '#option-label-color-93-item-49'
    },
   
    purchase: {
        btnCart: '.minicart-wrapper',
        btnCheckout: '.checkout-methods-items > :nth-child(1) > .action',
        btnBestWay: 'tbody > :nth-child(1) > .col-price',
        btnNext: '.button > span',
        btnPlaceOrder: '.payment-method-content > :nth-child(4) > div.primary > .action',
        msgPurcaseDone: 'span.base[data-ui-id="page-title-wrapper"]'  
    }


}

export default locators;


