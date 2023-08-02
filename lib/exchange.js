export async function getPairExchange(){
    var myHeaders = new Headers();
myHeaders.append("apikey", process.env.EXCHANGE_API);
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
}; try {
const response = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1", requestOptions)
if (response.status === 200) {
  const result = await response.json()
  //console.log(result)
  return +result.result;}
  else throw "Fetch error";}
  catch (err) {
  if (err = "Fetch error") {return "Failed to retrieve exchange rate data"}
  }}