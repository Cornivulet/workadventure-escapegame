import { bootstrapExtra } from "@workadventure/scripting-api-extra";

let currentPopup: any = undefined;

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export function trees(){

    return (
        // Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    // Chène
    WA.room.onEnterLayer('MaisonForet/a1zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a1","Chêne : " + "1___",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a2zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a2","Chêne : " + "_9__",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a3zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a3","Chêne : " + "__5_",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a4zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a4","Chêne : " + "___7",[]);
    })

    // Pin
    WA.room.onEnterLayer('MaisonForet/a5zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a5","Pin : " + "2___",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a6zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a6","Pin : " + "_8__",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a7zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a7","Pin : " + "__6_",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a8zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a8","Pin : " + "___3",[]);
    })

    // Érable
    WA.room.onEnterLayer('MaisonForet/a9zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a9","Érable : " + "3___",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a10zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a10","Érable : " + "_7__",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a11zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a11","Érable : " + "__4_",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a12zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a12","Érable : " + "___1",[]);
    })

    // Châtaignier

    WA.room.onEnterLayer('MaisonForet/a13zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a13","Châtaignier : " + "4___",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a14zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a14","Châtaignier : " + "_6__",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a15zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a15","Châtaignier : " + "__7_",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a16zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a16","Châtaignier : " + "___8",[]);
    })

    // Frêne
    WA.room.onEnterLayer('MaisonForet/a17zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a17","Frêne : " + "5__",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a18zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a18","Frêne : " + "_5__",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a19zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a19","Frêne : " + "__3_",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a20zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a20","Frêne : " + "___6",[]);
    })

    // Prunier
    WA.room.onEnterLayer('MaisonForet/a21zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a21","Prunier : " + "6___",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a22zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a22","Prunier : " + "_4__",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a23zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a23","Prunier : " + "__8_",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a24zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a24","Prunier : " + "___5",[]);
    })

    // Cerisier 
    WA.room.onEnterLayer('MaisonForet/a25zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a25","Cerisier : " + "7___",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a26zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a26","Cerisier : " + "_3__",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a27zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a27","Cerisier : " + "__2_",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a28zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a28","Cerisier : " + "___1",[]);
    })

    // Sapin

    WA.room.onEnterLayer('MaisonForet/a29zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a29","Sapin : " + "8___",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a30zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a30","Sapin : " + "_1__",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a31zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a31","Sapin : " + "__9_",[]);
    })

    WA.room.onEnterLayer('MaisonForet/a32zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a32","Sapin : " + "___7",[]);
    })


    // Sorbier

    WA.room.onEnterLayer('MaisonForet/a33zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a33","Sorbier : " + "0___",[]);
    })


    WA.room.onEnterLayer('MaisonForet/a34zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a34","Sorbier : " + "_7__",[]);
    })


    WA.room.onEnterLayer('MaisonForet/a35zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a35","Sorbier : " + "__1_",[]);
    })


    WA.room.onEnterLayer('MaisonForet/a36zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("a36","Sorbier : " + "___4",[]);
    })

    /* 
        Les arbres sont au nombre de 33
        A1 = Arbre 1
        A1Popup = Popup de l'arbre 1
    */

    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a1zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a2zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a3zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a4zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a5zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a6zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a7zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a8zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a9zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a10zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a11zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a12zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a13zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a14zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a15zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a16zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a17zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a18zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a19zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a20zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a21zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a22zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a23zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a24zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a25zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a26zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a27zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a28zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a29zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a30zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a31zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a32zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a33zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a34zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a35zone').subscribe(closePopUp)
    WA.room.onLeaveLayer('MaisonForet/a36zone').subscribe(closePopUp)


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e)));

}
