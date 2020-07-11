function calcAmount() {
    let klasszikÁr = 1000;
    let sajtburgerÁr = 1100;
    let háromsajtosÁr = 1400;
    let zöldségesÁr = 1200;
    let baconösÁr = 1200;
    let óriásÁr = 1700;

    let amountInputKlasszik = document.querySelector("input[name='amount-input-klasszik']");
    let amountNumberKlasszik = parseInt(amountInputKlasszik.value);
    
    let amountInputSajtburger = document.querySelector("input[name='amount-input-sajtburger']");
    let amountNumberSajtburger = parseInt(amountInputSajtburger.value);

    let amountInput3sajtos = document.querySelector("input[name='amount-input-3sajtos']");
    let amountNumber3sajtos = parseInt(amountInput3sajtos.value);

    let amountInputZöldséges = document.querySelector("input[name='amount-input-zöldséges']");
    let amountNumberZöldséges = parseInt(amountInputZöldséges.value);

    let amountInputBaconös = document.querySelector("input[name='amount-input-baconös']");
    let amountNumberBaconös = parseInt(amountInputBaconös.value);

    let amountInputÓriás = document.querySelector("input[name='amount-input-óriás']");
    let amountNumberÓriás = parseInt(amountInputÓriás.value);

    let amount = parseInt(amountNumberKlasszik) * klasszikÁr + (sajtburgerÁr * parseInt(amountNumberSajtburger)) + (háromsajtosÁr * parseInt(amountNumber3sajtos)) + (zöldségesÁr * parseInt(amountNumberZöldséges)) + (baconösÁr * parseInt(amountNumberBaconös)) + (óriásÁr * parseInt(amountNumberÓriás));

    let showAmount = document.querySelector("span.show-amount");

    showAmount.innerHTML = amount;


}