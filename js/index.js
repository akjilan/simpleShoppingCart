//funtion for setting quantites:

function changeButton(quantitySourceId, statement, productAmountId) {
    let quantitySource = document.getElementById(quantitySourceId);
  
    let quantitySourceValue = parseInt(quantitySource.value);
    if (statement) {
      quantitySourceValue++;
      productAmount(productAmountId, quantitySourceValue, "positive");
    } else {
      if (quantitySourceValue > 1) {
        quantitySourceValue--;
        productAmount(productAmountId, quantitySourceValue, "");
      }
    }
    quantitySource.value = quantitySourceValue;
  }
  
  
  
  //function for upgrading total price for selected quantity products:
  
  function productAmount(amountId, value, state) {
    let productAmount = document.getElementById(amountId);
    let productAmountString = productAmount.innerText;
    let productAmountValue = parseInt(productAmountString, 10);
  
    let amountValuePerSingle = productAmountValue / (value - 1);
    amountValuePerSingle = parseInt(amountValuePerSingle, 10);
    const subTotalId = document.getElementById("SubTotalId");
  
    if (value === 0) {
      productAmount.innerText = 0;
      subTotalId.innerText = 0;
    } else {
      if (state === "positive") {
        productAmount.innerText = amountValuePerSingle * value;
  
      } else {
        let amountValuePerSingle = productAmountValue / (value + 1);
        amountValuePerSingle = parseInt(amountValuePerSingle);
        productAmount.innerText = amountValuePerSingle * value;
        console.log(value);
        console.log(amountValuePerSingle);
  
      }
    }
  
    totalUpdating();
  }
  
  //total sub amount:
  function subTotalAmount(productPriceId) {
    let subTotalText = document.getElementById(productPriceId).innerText;
    let subTotalAmount = parseInt(subTotalText);
    return subTotalAmount;
  }
  
  function totalUpdating(){
  //for sub total:
  const subTotalValue01 = subTotalAmount("product-1-amountId");
  const subTotalValue02 = subTotalAmount("product-2-amountId");
  let subTotalAll = subTotalValue01 + subTotalValue02;
  let subTotalId = document.getElementById("SubTotalId");
  subTotalId.innerText = subTotalAll;
  
  //for tax:
  let taxPercentId = document.getElementById('taxId');
  taxPercentId.innerText = (subTotalAll*0.10).toFixed(2);
  //for Total amount:
  let totalAmountId = document.getElementById('TotalWithTaxId');
  totalAmountId.innerText = parseFloat(subTotalAll) + parseFloat((subTotalAll*0.10).toFixed(2));
  
  
  }

  // function removeItem(removeItemId) {
  //   const removeItemSection = document.getElementById(removeItemId);
  //   removeItemSection.parentNode.removeChild(removeItemSection);
  // }git init
  