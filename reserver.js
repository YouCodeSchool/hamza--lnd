var moto = 10;
var COMPACT = 14;
var CITADIN = 12;
var UTILITAIRE = 16;
var BERLIN = 23.8;
var CAMION = 297.5;
var ENGINDECHANTIER = 900;


document.querySelector("button").addEventListener('click', () => {
    let type = formulaire.vehicule.options[formulaire.vehicule.selectedIndex].value;
    let carburant = formulaire.carburant.options[formulaire.carburant.selectedIndex].value;
    let boitevitesse = formulaire.boitevitesse.options[formulaire.boitevitesse.selectedIndex].innerText;
    let day = document.querySelector("body > form > input").value;

    let price;
    if (type == 'moto') {
        if (carburant == 'essence') {
            price = (moto * 14 / 100) + moto;

        }
        if (carburant == 'electric') {
            price = (moto * 5 / 100) + moto;

        }

    }
    if (type == 'compact') {
        if (carburant == 'essence') {
            price = (COMPACT * 14 / 100) + COMPACT;


        }
        if (carburant == 'diesel') {
            price = (COMPACT * 21 / 100) + COMPACT;

        }
        if (carburant == 'hebrid') {
            price = (COMPACT * 9 / 100) + COMPACT;

        }

    }
    if (type == 'citadin') {
        if (carburant == 'essence') {
            price = (CITADIN * 14 / 100) + CITADIN;


        }
        if (carburant == 'electric') {
            price = (CITADIN * 5 / 100) + CITADIN;


        }
        if (carburant == 'hebrid') {
            price = (CITADIN * 9 / 100) + CITADIN;

        }
        if (carburant == 'diesel') {
            price = (CITADIN * 21 / 100) + CITADIN;
            console.log(price);

        }
    }
    if (type == 'utilitaire') {

        if (carburant == 'diesel') {
            price = (UTILITAIRE * 21 / 100) + UTILITAIRE;
        }

    }
    if (type == 'berlin') {
        if (carburant == 'essence') {
            price = (BERLIN * 14 / 100) + BERLIN;
        }
        if (carburant == 'hebrid') {
            price = (BERLIN * 9 / 100) + BERLIN;
        }
        if (carburant == 'diesel') {
            price = (BERLIN * 21 / 100) + BERLIN;
        }
    }
    if (type == 'camion') {
        if (carburant == 'diesel') {
            price = (250 * 21 / 100) + CAMION;
        }
    }
    if (type == 'engindechantier') {
        if (carburant == 'essence') {
            price = (ENGINDECHANTIER * 14 / 100) + ENGINDECHANTIER;
        }

        if (carburant == 'diesel') {
            price = (ENGINDECHANTIER * 21 / 100) + ENGINDECHANTIER;
        }
    }

    price = price * day;
    console.log(price);


    // document.querySelector(' #customers').style.display = 'block';
    // document.querySelector("#customers > tbody > tr:nth-child(2) > td:nth-child(1)").textContent = type;
    // document.querySelector("#customers > tbody > tr:nth-child(2) > td:nth-child(2)").textContent = carburant;
    // document.querySelector("#customers > tbody > tr:nth-child(2) > td:nth-child(3)").textContent = boitevitesse;
    // document.querySelector("#customers > tbody > tr:nth-child(2) > td:nth-child(4)").textContent = day;
    // document.querySelector("#customers > tbody > tr:nth-child(2) > td:nth-child(5)").textContent = price;

    Swal.fire({
        title: 'Success',
        text: 'Price : ' + price + ' $',
        icon: 'success',
        confirmButtonText: 'Ok'
    })
});

function list() {

    for (j = 1; j < 5; j++) {
        formulaire.carburant.options[j].text = "";
    }

    formulaire.carburant.options[0].text = 'SELECTIONNER UN carburant';

    var i = formulaire.vehicule.selectedIndex;



    if (i == 0) {
        for (j = 1; j < 7; j++) {
            formulaire.carburant.options[j].text = "";
        }
    }
    else

        switch (i) {
            case 1: var vi = new Array("none", "electric", "essence"); break;
            case 2: var vi = new Array("manuelle", "essence", "diesel", "hebrid"); break;
            case 3: var vi = new Array("manuelle", "essence", "diesel", "hebrid", "electric"); break;
            case 4: var vi = new Array("manuelle", "diesel"); break;
            case 5: var vi = new Array("automatic", "essence", "diesel", "hebrid"); break;
            case 6: var vi = new Array("automatic", "diesel"); break;
            case 7: var vi = new Array("manuelle", "essence", "diesel"); break;
        }
    for (k = 1; k < vi.length; k++) {
        formulaire.carburant.options[k].text = vi[k];
    }
    formulaire.boitevitesse.options[0].text = vi[0];

}
