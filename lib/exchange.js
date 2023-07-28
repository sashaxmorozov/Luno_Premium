export async function getPairExchange(){
    var myHeaders = new Headers();
    let usdMyr = 0
myHeaders.append("apikey", process.env.EXCHANGE_API);
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1", requestOptions)
  .then(response => response.json())
  .then(result => usdMyr = parseFloat(result.result))
  .catch(error => console.log('error', error))
  return usdMyr;}