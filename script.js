function recevoirTemperature(ville) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=d99e12053308e2b172415a9df53e0a5d&units=metric`;

    fetch(url)
        .then(reponse => reponse.json())
        .then(data => {
            console.log(data);
            if (data.cod === 200) {

                document.querySelector('.ville').textContent = data.name;

                document.querySelector('.temperature_label').textContent = Math.floor(data.main.temp);

                document.querySelector('.temp_min').textContent = Math.floor(data.main.temp_min);

                document.querySelector('.temp_max').textContent = Math.floor(data.main.temp_max);

            } else {
                alert("Une erreur est survenue ville non trouvée.");
            }
        })
}

let changerDeVille = document.querySelector('.changer');

changerDeVille.addEventListener('click', () => {
    villeChoisie = prompt('Entrez une ville');
    recevoirTemperature(villeChoisie);
}
)

recevoirTemperature("paris")