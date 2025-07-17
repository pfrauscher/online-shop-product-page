// Aufgabe: DOM API

// event handler for the text box, nichts zu tun
function handleKeywordFilter(event) {
    // In einem event handler ist this ein Objekt, das den DOM Knoten repräsentiert, der das Event ausgelöst hat,
    // z.B. bei Klick auf einen Button "ABC", steht in this dieser Button drinnen
    // document.getElementById("ABC") würde auch diesen Button zurückliefern
    if (this.value) { // sinnvoller Wert wurde eingegeben
        addFilterButton(this.id, this.value);
    }
}

// event handler for the date selector, nichts zu tun
function handleDeliveryTime(event)  {

    if (this.value) { // sinnvoller Wert wurde eingegeben
        addFilterButton(this.id, this.value);
    }

}

function removeAllFilter(event) {
    // mit remove() kann man DOM Knoten löschen
    //TODO
}

function removeFilter(event) {
    // mit remove() kann man DOM Knoten löschen
    //TODO
}


// Parameters
// buttonId ... ignorieren
// buttonName ... what you see on the button, buttonName should be set to the value that the user entered in one of the form elements
function addFilterButton(buttonId, buttonText) {
//TODO
}


// Aufgabe: Schleifen und Objekte
// DO NOT USE THE DOM API BELOW

//TODO


// Alle properties von allen Objekten auf die Console ausgeben:

//TODO

console.log("End of objects/loops task");

