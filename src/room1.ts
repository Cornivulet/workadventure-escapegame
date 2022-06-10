import { bootstrapExtra } from "@workadventure/scripting-api-extra";

let currentPopup: any = undefined;

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export function room1(){

    return (
        // Waiting for the API to be ready
      WA.onInit().then(() => {
            console.log('Scripting API ready for room1');
            console.log('Player tags: ',WA.player.tags)
            WA.room.onEnterLayer('MaisonDebut/popups/statueM1Zone').subscribe(() => {
                const today = new Date();
                const time = today.getHours() + ":" + today.getMinutes();
                currentPopup = WA.ui.openPopup("statue1Popup","It's " + time,[]);
            })
            WA.room.onLeaveLayer('MaisonDebut/statueM1Zone').subscribe(closePopUp)
            // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
            bootstrapExtra().then(() => {
              console.log('Scripting API Extra ready');
          }).catch(e => console.error(e));
        }).catch(e => console.error(e))
    );

}