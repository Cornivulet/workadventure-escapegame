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
            WA.room.onEnterLayer('MaisonDebut/statue1Zone').subscribe(() => {
                // const today = new Date();
                // const time = today.getHours() + ":" + today.getMinutes();
                currentPopup = WA.ui.openPopup("statue1Popup"," Pas de pieds, pas de mains, pas d’ailes, mais je monte au ciel. Qui suis-je ?",[]);
            })
            WA.room.onLeaveLayer('MaisonDebut/statue1Zone').subscribe(closePopUp)
            // pop up miroir
            WA.room.onEnterLayer('MaisonDebut/miroirZone').subscribe(() => {
              currentPopup = WA.ui.openPopup("miroirPopup"," Le miroir est propre.",[]);
            })
            WA.room.onLeaveLayer('MaisonDebut/miroirZone').subscribe(closePopUp)
            // pop up cheminee
            WA.room.onEnterLayer('MaisonDebut/chemineeZone').subscribe(() => {
              currentPopup = WA.ui.openPopup("chemineePopup"," Le feu de la cheminée est allumé depuis peu.",[]);
            })
            WA.room.onLeaveLayer('MaisonDebut/chemineeZone').subscribe(closePopUp)
            bootstrapExtra().then(() => {
              console.log('Scripting API Extra ready');
          }).catch(e => console.error(e));
        }).catch(e => console.error(e))
    );

}