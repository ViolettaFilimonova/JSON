fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
.then((res) => res.json())
.then((data) => getHeroes(data))

function getHeroes({squadName, homeTown, formed, members}) {
    document.body.insertAdjacentHTML('afterbegin',
        `
        <h1>${squadName}</h1>
        <h2>Honetown: ${homeTown}// Formed ${formed}</h2>
        <div class='heroes'>${setMembers(members)}</div>
        `
    )
}

function setMembers(members) {
    return members.map(
        (hero) => `
        <div class='item'>
            <h3>${hero.name}</h3>
            <p>Secret identity${hero.secretIdentity}</p>
            <p>Age:${hero.age}</p>
            <p>Superpowers:</p>
            <ul>
                ${hero.powers.map(
                    power => `
                    <li>${power}</li>
                    `
                ).join(' ')}
            </ul>
        </div>    
        `
    )
    .join(' ')
}