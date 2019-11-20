function diagrammiFunktio(){
    var c = document.getElementById("myCanvas");
    var arvoArray;
    var arvoPituus;
    var piste=40;
    var diagrammi = c.getContext("2d");
    
    arvoArray = [100, 150, 100, 110, 120, 110, 120, 120, 130, 150, +
        100, 150, 100, 110, 120, 110, 420, 320, 430, 150, +
        150, 100, 150, 100, 110, 120, 110, 120, 120, 130, 150];
       
    arvoPituus= arvoArray.length;
    
    diagrammi.beginPath();
    diagrammi.strokeStyle = "blue";

    diagrammi.moveTo(piste, 500-arvoArray[0]);
    diagrammi.fillText(arvoArray[0], piste, 500-arvoArray[0]);
        
    for (i = 1; i < arvoPituus; i++) {
        piste=piste+20;
        diagrammi.lineTo(piste, 500-arvoArray[i]);
        diagrammi.fillText(arvoArray[i], piste, 500-arvoArray[i]);
    }
    diagrammi.stroke();

    diagrammi.fillText("50", 0, 450);
    diagrammi.fillText("100", 0, 400);
    diagrammi.fillText("150", 0, 350);
    diagrammi.fillText("200", 0, 300);
    diagrammi.fillText("250", 0, 250);
    diagrammi.fillText("300", 0, 200);
    diagrammi.fillText("350", 0, 150);
    diagrammi.fillText("400", 0, 100);
    diagrammi.fillText("450", 0, 50);

    diagrammi.fillText("5.1.", 120, 500);
    diagrammi.fillText("10.1.", 220, 500);
    diagrammi.fillText("15.1.", 320, 500);
    diagrammi.fillText("20.1.", 420, 500);
    diagrammi.fillText("25.1.", 520, 500);
    diagrammi.fillText("30.1.", 620, 500);
}