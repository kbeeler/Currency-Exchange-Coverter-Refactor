


export const endpoint = 'https://api.exchangeratesapi.io/latest';
export const ratesByBase = {};

export async function fetchRates(base = 'USD') {
    const res = await fetch(`${endpoint}?base=${base}`);
    const rates = await res.json('');
    return rates;
}

export async function convert(amount, from, to) {
//first check if we even have the rates to convert from that currency 
  if(!ratesByBase[from]) {
    console.log(`Oh noo, we dont have ${from} to convert to ${to}. So go get it!`);
    const rates = await fetchRates(from);
    console.log(rates);
    //store the for next time
    ratesByBase[from] = rates;
  }

  //convert the amount they passed in
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;

}

