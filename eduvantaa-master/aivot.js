function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    if (boxNumber == 2){
        document.getElementById("laatikko2").innerHTML = "<table width='100%'><TR><TD>TEHTÄVÄ 5</TD><td>text</td><td>text</td></TR><TR><TD>marraskuu</TD><td>text</td><td>text</td></TR></table>";
        document.getElementById("laatikko2").style.lineHeight = "50px";
        // toiminnallisuus puuttuu!
    }
    if(boxNumber == 3){
        document.getElementById("laatikko3").innerHTML = "<img src='irak.jpg'>";
        document.getElementById("laatikko3").style.lineHeight = "50px";
        //toiminnallisuus puuttuu!
    }
    if(boxNumber == 4){
        document.location.reload();
    }
    
}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i = 1; i < x.length; i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  }
