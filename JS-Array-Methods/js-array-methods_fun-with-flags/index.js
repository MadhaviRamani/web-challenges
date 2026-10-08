import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;
  console.log("searchString: ", searchString);

 /*  const foundCountry = countries.find((e)=>{
    e.name.toLocaleLowerCase().startsWith(searchString.toLocaleLowerCase());
  });
  
if (foundCountry) {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  }
 */

  const foundCountries = countries.filter((e)=>{
  e.name.toLocaleLowerCase().startsWith(searchString.toLocaleLowerCase());
});

console.log("foundCountries: ", foundCountries);

if (foundCountries.length > 0){
  foundCountries.forEach((e)=>{
     const countryElement = Country(e);
          container.append(countryElement);
  });
}
});
  