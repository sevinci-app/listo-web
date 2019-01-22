export function sayHello(){
  return 'hello';
}

export function getFormattedPrice(price){
  let formattedPrice = price ? Number(price).toLocaleString("de-CH", {style: "currency", currency: "CHF", minimumFractionDigits:0}) : '';
  return formattedPrice;
}
