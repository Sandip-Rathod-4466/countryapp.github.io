// Api
// https://restcountries.com/v2/name/${name}?fullText=true

const result = document.querySelector('.result')
const btn = document.querySelector('#btn')
const img = document.querySelector('#img')


const getData = () => {
    // const country = 'india';
    const countryName = document.querySelector('#countryName')
    const country = countryName.value;
    const url = `https://restcountries.com/v2/name/${country}?fullText=true`;

    // fetch data from api

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const { name, capital, region, subregion, area, independent, borders, flag, callingCodes, currencies,languages,regionalBlocs,timezones,topLevelDomain,population,nativeName
            } = data[0];
            img.src = flag;

            result.innerHTML = `
            <div class="col-12 col-md-6">
            <div class="name"><strong>Name:</strong> ${name}</div>
            <div class="capital"><strong>Capital:</strong> ${capital}</div>
            <div id="languages"></div>
            <div class="region"><strong>Region:</strong> ${region}</div>
            <div class="subregion"><strong>Subregion:</strong> ${subregion}</div>
            <div class="area"><strong>Population:</strong> ${population}</div>
            <div class="area"><strong>Area:</strong> ${area} Square Kilometres</div>
            <div id="timezones"></div>
            <div class="independent"><strong>Independent:</strong> ${independent ? 'Yes' : 'No'}</div>
            </div>
            <div class="col-12 col-md-6">
            <div class="name"><strong>NativeName:</strong> ${nativeName}</div>
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

        }).catch(() => {

            if (country.length == '') {
                img.style.display = 'none'
                result.innerHTML = `
                    <h3 class="error">input field cannot be empty</h3>
                `
            }else if(!(isNaN(country))){
                img.style.display = 'none'
                result.innerHTML = `
                    <h3 class="error">input field cannot be number</h3>
                `
            }else{
                img.style.display = 'none'
                result.innerHTML = `
                    <h3 class="error">contry name not found</h3>
                `
            }

            // if (!(isNaN(country))) {
            //     img.style.display = 'none'
            //     result.innerHTML = `
            //     <h3 class="error">Plses enter valid name</h3>
            // `
            // }

        })
}
// set borders of the contry
const border = (border) => {
    document.querySelector('#border').innerHTML = `
        <strong>Borders:</strong>
        `
        if (border==null) {
        let span = document.createElement('SPAN');
        span.textContent = `No Borders`;
        const borderContainer = document.querySelector('#border');
        borderContainer.appendChild(span)
        return span
        }
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
        if (language==null) {
            let span = document.createElement('SPAN');
            span.textContent = `No language found`;
            const borderContainer = document.querySelector('#languages');
            borderContainer.appendChild(span)
            return span
            }

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
        if (call==null) {
            let span = document.createElement('SPAN');
            span.textContent = `No callCode found`;
            const borderContainer = document.querySelector('#callingCodes');
            borderContainer.appendChild(span)
            return span
            }

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

    if (data==null) {
        let span = document.createElement('SPAN');
        span.textContent = `Not found`;
        const borderContainer = document.querySelector('#ruppes');
        borderContainer.appendChild(span)
        return span
        }

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
    if (blocks==null) {
        let span = document.createElement('SPAN');
        span.textContent = `Not found`;
        const borderContainer = document.querySelector('#regionalBlocs');
        borderContainer.appendChild(span)
        return span
        }

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
        if (data==null) {
            let span = document.createElement('SPAN');
            span.textContent = `Not found`;
            const borderContainer = document.querySelector('#timezones');
            borderContainer.appendChild(span)
            return span
            }


        data.forEach((time)=>{
            let span = document.createElement('span');
            span.textContent= `"${time}" `;

            document.querySelector('#timezones').appendChild(span)
        })
    }

    // get Domain name
    const getDomain =(domain)=>{
        document.querySelector('#topLevelDomain').innerHTML = `
        <strong>TopLevelDomain:</strong>
        `
        if (domain==null) {
            let span = document.createElement('SPAN');
            span.textContent = `Not found`;
            const borderContainer = document.querySelector('#topLevelDomain');
            borderContainer.appendChild(span)
            return span
            }
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

