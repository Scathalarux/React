export function formatMoney(amountCents){
    const result = (amountCents/100)
    if(result <0 ){
        return `-$${(Math.abs(result)).toFixed(2)}`;
    }

    return `$${result.toFixed(2)}`;
}