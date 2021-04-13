  var restCountries = fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
  
      var container = document.createElement("div");
      container.setAttribute("class", "container",);
      document.body.append(container);
  
      var body;
        
        data.forEach((element) => {
        body = document.createElement("div");
        body.classList.add("card", "text-center", "float-end", );
        body.setAttribute("style", " background-image: linear-gradient(white,pink);color:black ; font-family:Times New Roman, Times, serif; width: 17rem; margin: 3vw; height: 25rem;");
       
      
  //card-header
        header = document.createElement("div");
        header.setAttribute("class", "card-header");
        header.innerText = element.name;
        body.appendChild(header);
  //Image  
        img = document.createElement("img");
        img.setAttribute("class", "card-img-top");
        img.setAttribute("style","height: 11rem;")
        img.setAttribute("src", element.flag);
        body.appendChild(img);
  //card- body  
        cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "text-center");
  
        capital = document.createElement("p");
        capital.innerText = `Capital : ` + element.capital;
//region;
  
        region = document.createElement("p");
        region.innerText = `Region : ` + element.region;
//countryCode;
        countryCode = document.createElement("p");
        countryCode.innerText = `Country code : ` + element.alpha3Code;
        cardBody.appendChild(capital);
        cardBody.appendChild(region);
        cardBody.appendChild(countryCode);
 //Button
        button = document.createElement("a");
        button.setAttribute("onclick", "callWeatherReport(this)");
        button.classList.add("btn", "btn-primary");
        button.innerText = `Click for weather`;
        cardBody.appendChild(button);
        body.appendChild(cardBody);
        container.appendChild(body);
      });
  
      document.body.append(container);
      })

      function callWeatherReport(element){
        var city = element.parentElement.firstElementChild.innerText.substring(10)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c121398ec069a2450e070f514695742`).then((response) => {
          return response.json();
        }).then((data) => {
          alert(`Current temperature is ${data.main.temp - 273.15} degree C`);
      
        }).catch((error) => {
          console.log(error);
        })
      }
    