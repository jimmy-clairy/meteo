recevoirTemperature("paris")

function recevoirTemperature(ville) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=d99e12053308e2b172415a9df53e0a5d&units=metric`;

    fetch(url)
    .then(reponse => reponse.json())
    .then(data => {
        console.log(data);
        if(data.cod === 200){
            
            let villeTemperature = data.name;
            document.querySelector('.ville').textContent = villeTemperature;
        
            let temperature = data.main.temp;
            document.querySelector('.temperature_label').textContent = Math.floor(temperature);

            let temperatureMinimal = data.main.temp_min;
            document.querySelector('.temp_min').textContent = Math.floor(temperatureMinimal);

            let temperatureMaximal = data.main.temp_max;
            document.querySelector('.temp_max').textContent = Math.floor(temperatureMaximal);
            
        } else {
            alert("Une erreur est survenue ville non trouvée.");
        }
        
    }) 
}

let changerDeVille = document.querySelector('.changer');

changerDeVille.addEventListener('click', () => {
    villeChoisie =  prompt('Entrez une ville');
    recevoirTemperature(villeChoisie);
    }
)