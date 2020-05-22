
       $(function(){
            $("#circle").hide();
            $("#box").animate({height:"450px"},"slow");
            $("#circle").fadeIn(1000);

            /*---AMPLIAR EL TEMYA LLETRA---*/
             $("p").hover(function(){
                $("p").css("font-size", "25pt");
                }, function(){
                    $("p").css("font-size", "15pt");
            });

            $("h2").hover(function(){
                $("h2").css("font-size", "40pt");
                }, function(){
                    $("h2").css("font-size", "28pt");
            });
            $("h4").hover(function(){
                $("h4").css("font-size", "27pt");
                }, function(){
                    $("h4").css("font-size", "20pt");
            });
            $("li").hover(function(){
                $("li").css("font-size", "22pt");
                }, function(){
                    $("li").css("font-size", "13pt");
            });
            $("input").hover(function(){
                $("label").css("font-size", "22pt");
                $("#maximPacientsHospital").css("margin-top", "2px");
                }, function(){
                    $("label").css("font-size", "13pt");
                    $("#maximPacientsHospital").css("margin-top", "5%");
            });
            /*---FINAL AMPLIAR EL TEMYA LLETRA---*/

            /*---Posar text del que fa ---*/
            $("#btnGestHospitals").hover(function(){ 
                var text = "Crear Hospital";
                $("#butHospM").css("display", "block");
                $("#butHospM").text(text);
                 }, function(){
                    $("#butHospM").css("display", "none");
                    $("#butHospM").text();
            });
            $("#btnGestPacients").hover(function(){ 
                var text = "Ingresar Pacient";
                $("#butPacM").css("display", "block");
                $("#butPacM").text(text);
                 }, function(){
                    $("#butPacM").css("display", "none");
                    $("#butPacM").text();
            });
            $("#btnGestMalalties").hover(function(){ 
                var text = "Llistat de malaties";
                $("#butMalM").css("display", "block");
                $("#butMalM").text(text);
                 }, function(){
                    $("#butMalM").css("display", "none");
                    $("#butMalM").text();
            });
            $("#btnGestMetges").hover(function(){ 
                var text = "Contractar Metge";
                $("#butMetgM").css("display", "block");
                $("#butMetgM").text(text);
                 }, function(){
                    $("#butMetgM").css("display", "none");
                    $("#butMetgM").text();
            });
            /*---FINAL Posar text del que fa ---*/

            /*--- BOTÓ CONTRAST ---*/
            $("#contrast").click(function(){
                 $("Body1").css("background-color", "black");
                 $("Body1").css("color", "white");
                 }, function(){
                    $("Body1").css("background-color", "white");
                    $("Body1").css("color", "black");
            });
            /*--- FINAL BOTÓ CONTRAST ---*/
        });
        function blinker(){
            $('#blinking').fadeOut("slow");
            $('#blinking').fadeIn("slow");
        }
        setInterval(blinker, 1000);

function contrast(){
    document.getElementById('Body1').style.background='black';
    document.getElementById('Body1').style.color='white';
    document.getElementById('contrast1').style.display='block';
    document.getElementById('contrast').style.display='none';

    document.getElementById('divPresentacio').style.color='black';
    document.getElementById('divHospital').style.color='black';
    document.getElementById('divPacient').style.color='black';
    document.getElementById('divControls').style.color='black';
    document.getElementById('modal-dialog').style.color='black';
    document.getElementById('divInterficies').style.color='black';

    document.getElementById('btnGestHospitals').style.backgroundColor='#007bff';
    document.getElementById('btnGestPacients').style.backgroundColor='#007bff';
    document.getElementById('btnGestMalalties').style.backgroundColor='#007bff';
    document.getElementById('btnGestMetges').style.backgroundColor='#007bff';
    document.getElementById('btnGestAplicacio').style.backgroundColor='#007bff';

}

function contrast1(){
    document.getElementById('Body1').style.background='white';
    document.getElementById('Body1').style.color='black';
    document.getElementById('contrast1').style.display='none';
    document.getElementById('contrast').style.display='block';
}
        
       