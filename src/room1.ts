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
      let room1E1 = false
      let room1A1 = false
      let room1E2 = false
      let room1A2 = false
      let souspiciousObj = ""
      let gameStart = true
      console.log('Scripting API ready for room1');
      console.log('Player tags: ', WA.player.tags)
  
      WA.room.onEnterLayer('MaisonDebut/gameStartZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("gameStartPopup", "Vous êtes enfermé par l'ESGI, pour y echapper allez voir les statues.", []);
      })
      WA.room.onLeaveLayer('MaisonDebut/gameStartZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/statue1Zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("statue1Popup", "Énigme: Pas de pieds, pas de mains, pas d’ailes, mais je monte au ciel. Qui suis-je ? Revenez lorsque vous avez trouver la solution.", [{
          label: "Je valide ma réponse",
          className: "normal",
          callback: (popup) => {
            console.log(souspiciousObj)
            popup.close();
          }
        }]);
      })
      WA.room.onLeaveLayer('MaisonDebut/statue1Zone').subscribe(closePopUp)
      // pop up miroir
      WA.room.onEnterLayer('MaisonDebut/miroirZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("miroirPopup", " Le miroir est propre.", [{
          label: "select",
          className: "primary",
          callback: (popup) => {
            console.log('test', souspiciousObj)
            souspiciousObj = 'mirroir'
            console.log('test', souspiciousObj)
            popup.close();
          }
        }]);
      })
      console.log(souspiciousObj)
      WA.room.onLeaveLayer('MaisonDebut/miroirZone').subscribe(closePopUp)
      // pop up cheminee
      WA.room.onEnterLayer('MaisonDebut/chemineeZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("chemineePopup", " Le feu de la cheminée est allumé depuis peu.", [{
          label: "select",
          className: "primary",
          callback: (popup) => {
            console.log('test', souspiciousObj)
            souspiciousObj = 'cheminée'
            console.log('test', souspiciousObj)
            popup.close();
          }
        }]);
      })
      WA.room.onLeaveLayer('MaisonDebut/chemineeZone').subscribe(closePopUp)

      // Fake Hint Popup
      WA.room.onEnterLayer('MaisonDebut/fakeCuisineZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("cuisinePopup", "La cuisine vient d'être utilisée.", [{
          label: "select",
          className: "primary",
          callback: (popup) => {
            console.log('test', souspiciousObj)
            souspiciousObj = 'fake'
            console.log('test', souspiciousObj)
            popup.close();
          }
        }]);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakeCuisineZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/fakePianoZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("pianoPopup", "Le piano est désaccordé.", [{
          label: "select",
          className: "primary",
          callback: (popup) => {
            console.log('test', souspiciousObj)
            souspiciousObj = 'fake'
            console.log('test', souspiciousObj)
            popup.close();
          }
        }]);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakePianoZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/fakeArmoireZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("armoirePopup", "L'armoire est fermé à clé.", [{
          label: "select",
          className: "primary",
          callback: (popup) => {
            console.log('test', souspiciousObj)
            souspiciousObj = 'fake'
            console.log('test', souspiciousObj)
            popup.close();
          }
        }]);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakeArmoireZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/fakeBiblioZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("biblioPopup", "Il y a beacoup livres de cuisine.", [{
          label: "select",
          className: "primary",
          callback: (popup) => {
            console.log('test', souspiciousObj)
            souspiciousObj = 'fake'
            console.log('test', souspiciousObj)
            popup.close();
          }
        }]);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakeBiblioZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/fakeNourritureZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("biblioPopup", "Les aliments n'ont pas l'air d'être frais.", [{
          label: "select",
          className: "primary",
          callback: (popup) => {
            console.log('test', souspiciousObj)
            souspiciousObj = 'fake'
            console.log('test', souspiciousObj)
            popup.close();
          }
        }]);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakeBiblioZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/room1horlogeZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("room1horlogePopup", "Les pendules ne bougent pas.", [{
          label: "select",
          className: "primary",
          callback: (popup) => {
            console.log('test', souspiciousObj)
            souspiciousObj = 'fake'
            console.log('test', souspiciousObj)
            popup.close();
          }
        }]);
      })
      WA.room.onLeaveLayer('MaisonDebut/room1horlogeZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/fakeLitZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("litPopup", "Les lits ne sont pas faits.", [{
          label: "select",
          className: "primary",
          callback: (popup) => {
            console.log('test', souspiciousObj)
            souspiciousObj = 'fake'
            console.log('test', souspiciousObj)
            popup.close();
          }
        }]);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakeLitZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/fakeLitDoubleZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("litDoublePopup", "Le lit a l'air confortable.", [{
          label: "select",
          className: "primary",
          callback: (popup) => {
            console.log('test', souspiciousObj)
            souspiciousObj = 'fake'
            console.log('test', souspiciousObj)
            popup.close();
          }
        }]);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakeLitDoubleZone').subscribe(closePopUp)

      WA.room.onEnterLayer('MaisonDebut/fakeTableZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("tablePopup", "Les plats sont encore chaud.", [{
          label: "select",
          className: "primary",
          callback: (popup) => {
            console.log('test', souspiciousObj)
            souspiciousObj = 'fake'
            console.log('test', souspiciousObj)
            popup.close();
          }
        }]);
      })
      WA.room.onLeaveLayer('MaisonDebut/fakeTableZone').subscribe(closePopUp)


      bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
      }).catch(e => console.error(e));
    }).catch(e => console.error(e))
  );

}