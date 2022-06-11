import { bootstrapExtra } from "@workadventure/scripting-api-extra";

let currentPopup: any = undefined;

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export function clock(){

    return (
        // Waiting for the API to be ready
    WA.onInit().then(() => {
    console.log('Scripting API ready for room2');
    console.log('Player tags: ',WA.player.tags)

    // les deux statues donnant l'énigme
    WA.room.onEnterLayer('MaisonTemps/statusTempsZone1').subscribe(() => {
        currentPopup = WA.ui.openPopup("status1Room2","Une horloge ajoute 15 minutes de temps. Son heure est la première partie du code",[]);
    })

    WA.room.onEnterLayer('MaisonTemps/statusTempsZone2').subscribe(() => {
        currentPopup = WA.ui.openPopup("status2Room2","Une horloge ajoute 1 heure de temps. Ses minutes sont la seconde partie du code",[]);
    })

    // Les horloges, seules deux d'entre elles contiennent le code le porte
    WA.room.onEnterLayer('MaisonTemps/clockZone1').subscribe(() => {
        const today = new Date();
        today.setHours(today.getHours() + 1)
        const time = today.getHours() + ":" + "43";
        currentPopup = WA.ui.openPopup("clockPopup1","Il est " + time,[]);
    })

    WA.room.onEnterLayer('MaisonTemps/clockZone2').subscribe(() => {
        const today = new Date();
        today.setMinutes(today.getMinutes() + 15)
        const time =  "20" + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup2","Il est " + time,[]);
    })

    WA.room.onEnterLayer('MaisonTemps/clockZone3').subscribe(() => {
        const time = "25" + ":" + "61";
        currentPopup = WA.ui.openPopup("clockPopup3","Il est " + time,[]);
    })

    WA.room.onEnterLayer('MaisonTemps/clockZone4').subscribe(() => {
        currentPopup = WA.ui.openPopup("clockPopup4","Cette horloge semble cassé",[]);
    })

    WA.room.onEnterLayer('MaisonTemps/clockZone5').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup5","Il est " + time,[]);
    })

    WA.room.onEnterLayer('MaisonTemps/clockZone6').subscribe(() => {
        const time = "AB" + ":" + "CD";
        currentPopup = WA.ui.openPopup("clockPopup6","Il est " + time,[]);
    })

    WA.room.onEnterLayer('MaisonTemps/clockZone7').subscribe(() => {
        currentPopup = WA.ui.openPopup("clockPopup7","Etrange, l'aiguille tourne dans le sens inverse",[]);
    })

    WA.room.onEnterLayer('MaisonTemps/clockZone8').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup8","Il est " + time,[]);
    })

    WA.room.onEnterLayer('MaisonTemps/clockZone9').subscribe(() => {
        const today = new Date();
        const time = today.getMinutes() + ":" + today.getHours();
        currentPopup = WA.ui.openPopup("clockPopup9","Il est " + time,[]);
    })

    WA.room.onEnterLayer('MaisonTemps/clockZone10').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup10","Il est " + time,[]);
    })

    WA.room.onEnterLayer('MaisonTemps/clockZone11').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup11","Il est " + time,[]);
    })

    WA.room.onLeaveLayer('MaisonTemps/statusTempsZone1').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonTemps/statusTempsZone2').subscribe(closePopUp)

    WA.room.onLeaveLayer('MaisonTemps/clockZone1').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonTemps/clockZone2').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonTemps/clockZone3').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonTemps/clockZone4').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonTemps/clockZone5').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonTemps/clockZone6').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonTemps/clockZone7').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonTemps/clockZone8').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonTemps/clockZone9').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonTemps/clockZone10').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonTemps/clockZone11').subscribe(closePopUp)


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e)));

}