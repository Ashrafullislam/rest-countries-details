// load coutry data from rest country api 
const loadCountryDetails = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(countries => getCountryInfo(countries));
}

// get the country info by  map 
const getCountryInfo = (countries) => {
     console.log(countries[0]);    
    const allCountryInfo = countries.map(country => showCountryDetails(country));
    const setElement = document.getElementById('countries');
    setElement.innerHTML = allCountryInfo.join('  ');
    // console.log(allCountryInfo);
}

const showCountryDetails = (country) => {
    //    console.log(country) 
    return `
    <div class= "countries-div" >
    <h2 class ="country-name" > ${country.name.common} </h2> 
    <h3 class = " " > ${country.capital} </h3> 
    <h4 class = "country-shortname " > country name letter: ${country.flag}</h4>
    <img src= " ${country.flags.png}" > 
    </div>
    `;
}

loadCountryDetails()

document.getElementById('showInfo').addEventListener('click',function(){
    
})