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
        document.getElementById("laatikko3").innerHTML = "<img src='tähti.jpg' height='100' width='100' >";
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
    //for (i = 1; i < x.length; i++) {
    //  text += x.elements[i].value + "<br>";
      for (i = x.length-1;i>=0; i--){
        text += x.elements[i].name + " : " +x.elements[i].value +"<br>";
      }
    //}
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  }
  function diagrammiFunktio(){
    // etsitään harjoitus2.html sivulta elementti, jonka id=myCanvas
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    
    // diagrammiin voidaan kirjoittaa numeroita haluttuihin kohtiin.
    ctx.fillText("10", 0, 200);
    ctx.fillText("20", 40, 250);
    ctx.fillText("30", 60, 200);
    ctx.fillText("40", 80, 210);
    ctx.fillText("50", 100, 250);
    ctx.fillText("60", 120, 270);
    ctx.fillText("70", 140, 290);
    ctx.fillText("80", 300, 320);
    ctx.fillText("90", 325, 300);

    
    // Alla olevalla koodilla voidaan piirtää viivaa diagrammiin.
    ctx.moveTo(40, 200);
    ctx.lineTo(60, 250);
    ctx.lineTo(80, 200);
    ctx.lineTo(100, 210);
    ctx.lineTo(120, 250);
    ctx.lineTo(140, 270);
    ctx.lineTo(300, 290);
    ctx.lineTo(325, 320);
    ctx.stroke();
    }
    
