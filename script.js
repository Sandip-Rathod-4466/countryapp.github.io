// Api
// https://restcountries.com/v2/name/${name}?fullText=true

const result = document.querySelector('.result')
const countryName = document.querySelector('#countryName')
const btn = document.querySelector('#btn')
const img = document.querySelector('#img')


const getData = () => {
    // const country = 'india';
    const country = countryName.value;
    const url = `https://restcountries.com/v2/name/${country}?fullText=true`;

    // fetch data from api

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const { name, capital, region, subregion, area, independent, borders, flag, callingCodes, currencies,languages,regionalBlocs,timezones,topLevelDomain
            } = data[0];
            img.src = flag;
            result.innerHTML = `
            <div class="col-12 col-md-6">
            <div class="name"><strong>Name:</strong> ${name}</div>
            <div class="capital"><strong>Capital:</strong> ${capital}</div>
            <div id="languages"></div>
            <div class="region"><strong>Region:</strong> ${region}</div>
            <div class="subregion"><strong>Subregion:</strong> ${subregion}</div>
            <div class="area"><strong>Area:</strong> ${area} Square Kilometres</div>
            <div id="timezones"></div>
            <div class="independent"><strong>Independent:</strong> ${independent ? 'Yes' : 'No'}</div>
            </div>
            <div class="col-12 col-md-6">
            <div id="border" class="borders">
            </div>
            <div id="callingCodes">
            </div>
            <div id="ruppes">
            </div>
            <div id="regionalBlocs">
            </div>
            <div id="topLevelDomain"></div>

            </div>
            
            `
            border(borders)
            mobileCode(callingCodes)
            ruppes(currencies)
            getLang(languages);
            getRegionalBlocs(regionalBlocs)
            getTimeZone(timezones)
            getDomain(topLevelDomain)

        }).catch((err) => {
            if (country == 0) {
                img.style.display = 'none'
                result.innerHTML = `
                    <h3 class="error">Input Field Cannot be empty</h3>
                `
            }
            else{
                img.style.display = 'none'
                result.innerHTML = `
                    <h3 class="error">Please enter valid  country  name</h3>
                `
            }

        })
}
// set borders of the contry
const border = (border) => {
    document.querySelector('#border').innerHTML = `
        <strong>Borders:</strong>
        `
    border.forEach(element => {
        let span = document.createElement('SPAN');
        span.textContent = `"${element}"`;
        const borderContainer = document.querySelector('#border');
        borderContainer.appendChild(span)
    });
}

// set language in APP
    const getLang = (language)=>{
        document.getElementById('languages').innerHTML= `
        <strong>Languages:</strong>
        `
        language.forEach((lang)=>{
           let span = document.createElement('span');
           span.textContent = `"${lang.name}"`;
           document.querySelector('#languages').appendChild(span);

        })
    }


// set mobile code of contry
const mobileCode = (call) => {
    document.querySelector('#callingCodes').innerHTML = `
        <strong>CallingCodes:</strong>
        `
    call.forEach((element) => {
        let span = document.createElement('SPAN');
        span.textContent = `"${element}"`;
        const callCodeContainer = document.querySelector('#callingCodes');
        callCodeContainer.appendChild(span)
    })

}

// set currencie of contry
const ruppes = (data) => {
    document.querySelector('#ruppes').innerHTML = `
    <strong>Currencies:</strong>
    `
    // code name Symbol

    data.forEach((element)=>{
        // console.log(element.code,element.name,element.symbol);
        let code = document.createElement('SPAN');
        let name = document.createElement('SPAN');
        let symbol = document.createElement('SPAN');

        code.textContent = `"${element.code}"`;
        name.textContent = `"${element.name}"`;
        symbol.textContent = `"${element.symbol}"`;
        const ruppesContainer = document.querySelector('#ruppes');
        ruppesContainer.appendChild(code)
        ruppesContainer.appendChild(name)
        ruppesContainer.appendChild(symbol)
    })
    

}


// regionalBlocs
const getRegionalBlocs =(blocks)=>{
    document.querySelector('#regionalBlocs').innerHTML = `
    <strong>RegionalBlocs:</strong>
    `
    blocks.forEach((blocks)=>{
        let span = document.createElement('span');
        span.textContent= `${blocks.acronym} - ${blocks.name}`
        document.querySelector('#regionalBlocs').appendChild(span)
    })
}

// get time zones
    const getTimeZone = (data)=>{
        document.querySelector('#timezones').innerHTML = `
        <strong>TimeZone:</strong>
        `
        data.forEach((time)=>{
            let span = document.createElement('span');
            span.textContent=time;

            document.querySelector('#timezones').appendChild(span)
        })
    }

    // get Domain name
    const getDomain =(domain)=>{
        document.querySelector('#topLevelDomain').innerHTML = `
        <strong>TopLevelDomain:</strong>
        `
        domain.map((domainName)=>{
            let span = document.createElement('span');
            span.textContent = domainName;
            document.querySelector('#topLevelDomain').appendChild(span)
        })
    }
btn.addEventListener('click',()=>{
    getData()
    img.style.display = 'block'
})

