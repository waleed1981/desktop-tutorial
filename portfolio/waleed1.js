/*function sayhello() {
    var name=document.getElementById("waleed1.html");
   document.getElementById("waleed1").innerHTML = "waleed1 " + name;
}*/
function laatikkoFunktio(boxNumber) {
    alert("Nyt vaihdetaan laatikko" + boxNumber + ":n sisältöä!");
    if (boxNumber == 2) {
        document.getElementById("laatikko2").innerHTML = "<table background='blue' width='50%'><TR><TD><h1>Etunimi</h1></TD><td><h1>Sukunimi</h1></td><td><h1>Henkelö tunnus</h1></td></TR><TR><td><input type=''><TD><input type=''></td><td><input type=''</td></TR><tr></table>";
        document.getElementById("laatikko2").style.lineHeight = "30px";
    } 
}

function haeTiedostosta() {
    $.ajax({
        type: "GET",
        url: "https://paneelipalvelin.azurewebsites.net/arvot",
        cache: false,
        success: function (data) {
            var arrayData = "";
            $("#testi").html(arrayData[0]);
            var c = document.getElementById("mycanvas");
            var arvoArray;
            var arvoPituus;
            var piste = 40;
            var diagrammi = c.getContext("2d");
            arvoArray = data.split(":");
            arvoPituus = arvoArray.length;

            diagrammi.beginPath();
            diagrammi.strokeStyle = "blue";
            diagrammi.moveTo(piste, 400 - (200 + (arvoArray[0] * 5)));
            diagrammi.fillText(arvoArray[0], piste, 400 - (200 + (arvoArray[0] * 5)));

            for (i = 1; i < arvoPituus; i++) {
                piste = piste + 20;
                diagrammi.lineTo(piste, 400 - (200 + (arvoArray[i] * 5)));
                diagrammi.fillText(arvoArray[i], piste, 400 - (200 + (arvoArray[i] * 5)));
            }
            diagrammi.stroke();
            diagrammi.fillText("-30", 0, 350);
            diagrammi.fillText("-20", 0, 300);
            diagrammi.fillText("-10", 0, 250);
            diagrammi.fillText("0", 0, 200);
            diagrammi.fillText("10", 0, 150);
            diagrammi.fillText("20", 0, 100);
            diagrammi.fillText("30", 0, 50);

            diagrammi.fillText("5.8.", 120, 400);
            diagrammi.fillText("10.8.", 220, 400);
            diagrammi.fillText("15.8.", 320, 400);
            diagrammi.fillText("20.8.", 420, 400);
            diagrammi.fillText("25.8.", 520, 400);
            diagrammi.fillText("30.8.", 620, 400);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("error");

        }
    });
}