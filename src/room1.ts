import { bootstrapExtra } from "@workadventure/scripting-api-extra";

let currentPopup: any = undefined;

function closePopUp() {
  if (currentPopup !== undefined) {
    currentPopup.close();
    currentPopup = undefined;
  }
}

export function room1() {

  return (
    // Waiting for the API to be ready
    WA.onInit().then(() => {
      console.log('Scripting API ready for room1');
      console.log('Player tags: ', WA.player.tags)
  
      WA.room.onEnterLayer('MaisonDebut/gameStartZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("gameStartPopup", "Vous êtes enfermé par l'ESGI, pour y echapper allez voir les statues.", []);
      })
      WA.room.onLeaveLayer('MaisonDebut/gameStartZone').subscribe(closePopUp)
      // pop up status 
      WA.room.onEnterLayer('MaisonDebut/statue1Room1Zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("statue1Popup", "Énigme: Pas de pieds, pas de mains, pas d’ailes, mais je monte au ciel. Qui suis-je ? ", []);
      })
      WA.room.onLeaveLayer('MaisonDebut/statue1Room1Zone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/statue2Room1Zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("statue2Room1Popup", "Énigme: Il nous voit vieillir sans rien dire car il est très poli. Qui est-il ? ", []);
      })
      WA.room.onLeaveLayer('MaisonDebut/statue2Room1Zone').subscribe(closePopUp)
      // pop up miroir
      WA.room.onEnterLayer('MaisonDebut/miroirZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("miroirPopup", " Le miroir est cassé en quatre, on peut y lire un 6 et un 4", []);
      })
      WA.room.onLeaveLayer('MaisonDebut/miroirZone').subscribe(closePopUp)
      // pop up cheminee
      WA.room.onEnterLayer('MaisonDebut/chemineeZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("chemineePopup", " Des papiers ont été brûlés, il reste une feuille où le centre est intact, on peut y lire le chiffre 28.", []);
      })
      WA.room.onLeaveLayer('MaisonDebut/chemineeZone').subscribe(closePopUp)

      WA.room.onEnterLayer('endZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("endPopup", " Félicitation, vous pouvez maintenant partir rejoindre l'île des Vacancs !", []);
      })
      WA.room.onLeaveLayer('endZone').subscribe(closePopUp)

      // Fake Hint Popup
      WA.room.onEnterLayer('MaisonDebut/fakeCuisineZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("cuisinePopup", "La cuisine vient d'être utilisée, on peut trouver 3 casseroles dans le lavabo.", []);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakeCuisineZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/fakePianoZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("pianoPopup", "Le piano est en mauvaise état, il manque 1 pédale et 5 touches.", []);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakePianoZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/fakeArmoireZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("armoirePopup", "Il y a 7 manteaux dans l'armoire, et 2 paires de chaussures.", []);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakeArmoireZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/fakeBiblioZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("biblioPopup", "On peut trouver 3 livres sur Javascript et 4 sur C#.", []);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakeBiblioZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/fakeNourritureZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("nourriturePopup", "Les aliments n'ont pas l'air d'être frais, il y a tonneau sans aliments.", []);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakeNourritureZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/room1horlogeZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("room1horlogePopup", "Les pendules ne bougent pas, elles sont arrêtées à 08:19.", []);
      })
      WA.room.onLeaveLayer('MaisonDebut/room1horlogeZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/fakeLitZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("litPopup", "Seul le lit du milieu n'a pas de drap.", []);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakeLitZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/fakeLitDoubleZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("litDoublePopup", "Le lit double à l'air d'être trempé.", []);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakeLitDoubleZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/fakeTableZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("tablePopup", "Les plats sont encore chaud, il y a 4 couverts mais que 3 assiettes.", []);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakeTableZone').subscribe(closePopUp)


      bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
      }).catch(e => console.error(e));
    }).catch(e => console.error(e))
  );

}