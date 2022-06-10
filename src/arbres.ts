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

    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup","It's " + time,[]);
    })

    // Chène
    WA.room.onEnterLayer('A1').subscribe(() => {
        currentPopup = WA.ui.openPopup("A1Popup","Chêne : " + "1___",[]);
    })

    WA.room.onEnterLayer('A2').subscribe(() => {
        currentPopup = WA.ui.openPopup("A2Popup","Chêne : " + "_9__",[]);
    })

    WA.room.onEnterLayer('A3').subscribe(() => {
        currentPopup = WA.ui.openPopup("A3Popup","Chêne : " + "__5_",[]);
    })

    WA.room.onEnterLayer('A4').subscribe(() => {
        currentPopup = WA.ui.openPopup("A4Popup","Chêne : " + "___7",[]);
    })

    // Pin
    WA.room.onEnterLayer('A5').subscribe(() => {
        currentPopup = WA.ui.openPopup("A5Popup","Pin : " + "2___",[]);
    })

    WA.room.onEnterLayer('A6').subscribe(() => {
        currentPopup = WA.ui.openPopup("A6Popup","Pin : " + "_8__",[]);
    })

    WA.room.onEnterLayer('A7').subscribe(() => {
        currentPopup = WA.ui.openPopup("A7Popup","Pin : " + "__6_",[]);
    })

    WA.room.onEnterLayer('A8').subscribe(() => {
        currentPopup = WA.ui.openPopup("A8Popup","Pin : " + "___3",[]);
    })

    // Érable
    WA.room.onEnterLayer('A9').subscribe(() => {
        currentPopup = WA.ui.openPopup("A9Popup","Érable : " + "3___",[]);
    })

    WA.room.onEnterLayer('A10').subscribe(() => {
        currentPopup = WA.ui.openPopup("A10Popup","Érable : " + "_7__",[]);
    })

    WA.room.onEnterLayer('A11').subscribe(() => {
        currentPopup = WA.ui.openPopup("A11Popup","Érable : " + "__4_",[]);
    })

    WA.room.onEnterLayer('A12').subscribe(() => {
        currentPopup = WA.ui.openPopup("A12Popup","Érable : " + "___1",[]);
    })

    // Châtaignier

    WA.room.onEnterLayer('A13').subscribe(() => {
        currentPopup = WA.ui.openPopup("A13Popup","Châtaignier : " + "4___",[]);
    })

    WA.room.onEnterLayer('A14').subscribe(() => {
        currentPopup = WA.ui.openPopup("A14Popup","Châtaignier : " + "_6__",[]);
    })

    WA.room.onEnterLayer('A15').subscribe(() => {
        currentPopup = WA.ui.openPopup("A15Popup","Châtaignier : " + "__7_",[]);
    })

    WA.room.onEnterLayer('A16').subscribe(() => {
        currentPopup = WA.ui.openPopup("A16Popup","Châtaignier : " + "___8",[]);
    })

    // Frêne
    WA.room.onEnterLayer('A17').subscribe(() => {
        currentPopup = WA.ui.openPopup("A17Popup","Frêne : " + "5__",[]);
    })

    WA.room.onEnterLayer('A18').subscribe(() => {
        currentPopup = WA.ui.openPopup("A18Popup","Frêne : " + "_5__",[]);
    })

    WA.room.onEnterLayer('A19').subscribe(() => {
        currentPopup = WA.ui.openPopup("A19Popup","Frêne : " + "__3_",[]);
    })

    WA.room.onEnterLayer('A20').subscribe(() => {
        currentPopup = WA.ui.openPopup("A20Popup","Frêne : " + "___6",[]);
    })

    // Prunier
    WA.room.onEnterLayer('A21').subscribe(() => {
        currentPopup = WA.ui.openPopup("A21Popup","Prunier : " + "6___",[]);
    })

    WA.room.onEnterLayer('A22').subscribe(() => {
        currentPopup = WA.ui.openPopup("A22Popup","Prunier : " + "_4__",[]);
    })

    WA.room.onEnterLayer('A23').subscribe(() => {
        currentPopup = WA.ui.openPopup("A23Popup","Prunier : " + "__8_",[]);
    })

    WA.room.onEnterLayer('A24').subscribe(() => {
        currentPopup = WA.ui.openPopup("A24Popup","Prunier : " + "___5",[]);
    })

    // Cerisier 
    WA.room.onEnterLayer('A25').subscribe(() => {
        currentPopup = WA.ui.openPopup("A25Popup","Cerisier : " + "7___",[]);
    })

    WA.room.onEnterLayer('A26').subscribe(() => {
        currentPopup = WA.ui.openPopup("A26Popup","Cerisier : " + "_3__",[]);
    })

    WA.room.onEnterLayer('A27').subscribe(() => {
        currentPopup = WA.ui.openPopup("A27Popup","Cerisier : " + "__2_",[]);
    })

    WA.room.onEnterLayer('A28').subscribe(() => {
        currentPopup = WA.ui.openPopup("A28Popup","Cerisier : " + "___1",[]);
    })

    // Sapin

    WA.room.onEnterLayer('A29').subscribe(() => {
        currentPopup = WA.ui.openPopup("A29Popup","Sapin : " + "8___",[]);
    })

    WA.room.onEnterLayer('A30').subscribe(() => {
        currentPopup = WA.ui.openPopup("A30Popup","Sapin : " + "_1__",[]);
    })

    WA.room.onEnterLayer('A31').subscribe(() => {
        currentPopup = WA.ui.openPopup("A31Popup","Sapin : " + "__9_",[]);
    })

    WA.room.onEnterLayer('A32').subscribe(() => {
        currentPopup = WA.ui.openPopup("A32Popup","Sapin : " + "___7",[]);
    })


    // Sorbier

    WA.room.onEnterLayer('A33').subscribe(() => {
        currentPopup = WA.ui.openPopup("A33Popup","Sorbier : " + "0___",[]);
    })


    WA.room.onEnterLayer('A34').subscribe(() => {
        currentPopup = WA.ui.openPopup("A34Popup","Sorbier : " + "_7__",[]);
    })


    WA.room.onEnterLayer('A35').subscribe(() => {
        currentPopup = WA.ui.openPopup("A35Popup","Sorbier : " + "__1_",[]);
    })


    WA.room.onEnterLayer('A36').subscribe(() => {
        currentPopup = WA.ui.openPopup("A36Popup","Sorbier : " + "___4",[]);
    })

    /* 
        Les arbres sont au nombre de 33
        A1 = Arbre 1
        A1Popup = Popup de l'arbre 1
    */

    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)
    WA.room.onLeaveLayer('A1').subscribe(closePopUp)
    WA.room.onLeaveLayer('A2').subscribe(closePopUp)
    WA.room.onLeaveLayer('A3').subscribe(closePopUp)
    WA.room.onLeaveLayer('A4').subscribe(closePopUp)
    WA.room.onLeaveLayer('A5').subscribe(closePopUp)
    WA.room.onLeaveLayer('A6').subscribe(closePopUp)
    WA.room.onLeaveLayer('A7').subscribe(closePopUp)
    WA.room.onLeaveLayer('A8').subscribe(closePopUp)
    WA.room.onLeaveLayer('A9').subscribe(closePopUp)
    WA.room.onLeaveLayer('A10').subscribe(closePopUp)
    WA.room.onLeaveLayer('A11').subscribe(closePopUp)
    WA.room.onLeaveLayer('A12').subscribe(closePopUp)
    WA.room.onLeaveLayer('A13').subscribe(closePopUp)
    WA.room.onLeaveLayer('A14').subscribe(closePopUp)
    WA.room.onLeaveLayer('A15').subscribe(closePopUp)
    WA.room.onLeaveLayer('A16').subscribe(closePopUp)
    WA.room.onLeaveLayer('A17').subscribe(closePopUp)
    WA.room.onLeaveLayer('A18').subscribe(closePopUp)
    WA.room.onLeaveLayer('A19').subscribe(closePopUp)
    WA.room.onLeaveLayer('A20').subscribe(closePopUp)
    WA.room.onLeaveLayer('A21').subscribe(closePopUp)
    WA.room.onLeaveLayer('A22').subscribe(closePopUp)
    WA.room.onLeaveLayer('A23').subscribe(closePopUp)
    WA.room.onLeaveLayer('A24').subscribe(closePopUp)
    WA.room.onLeaveLayer('A25').subscribe(closePopUp)
    WA.room.onLeaveLayer('A26').subscribe(closePopUp)
    WA.room.onLeaveLayer('A27').subscribe(closePopUp)
    WA.room.onLeaveLayer('A28').subscribe(closePopUp)
    WA.room.onLeaveLayer('A29').subscribe(closePopUp)
    WA.room.onLeaveLayer('A30').subscribe(closePopUp)
    WA.room.onLeaveLayer('A31').subscribe(closePopUp)
    WA.room.onLeaveLayer('A32').subscribe(closePopUp)
    WA.room.onLeaveLayer('A33').subscribe(closePopUp)
    WA.room.onLeaveLayer('A34').subscribe(closePopUp)
    WA.room.onLeaveLayer('A35').subscribe(closePopUp)
    WA.room.onLeaveLayer('A6').subscribe(closePopUp)


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e)));

}
