function changeSettingsImageFunction() {


	if (settings.theme === "Dark")	
		{
	document.getElementById("settingsIcon").src="images/gear2.png";
	document.getElementById("dragIcon").src="images/drag2.png";
	settings.theme = "Light";
	localStorage.setItem("currentSettings",JSON.stringify(settings));

		}
	
	else 
		{
		
	document.getElementById("settingsIcon").src="images/gear.png";
	document.getElementById("dragIcon").src="images/drag.png";
	settings.theme = "Dark";
	localStorage.setItem("currentSettings",JSON.stringify(settings));

		}
	

}
function changeSettingsImageFunctionInitial() {


	if (settings.theme === "Dark")	
		{
	document.getElementById("settingsIcon").src="images/gear.png";
	document.getElementById("dragIcon").src="images/drag.png";
	
		}
	
	else 
		{

	document.getElementById("settingsIcon").src="images/gear2.png";
	document.getElementById("dragIcon").src="images/drag2.png";
	

		}
	

}

function openNav() {
    document.getElementById("overlayMenu").style.width = "100%";
}

function closeNav() {
    document.getElementById("overlayMenu").style.width = "0%";
	location.reload();
}

function layout(layoutValue){

    settings.layout = layoutValue;
    localStorage.setItem("currentSettings",JSON.stringify(settings));

    if (layoutValue === "1") {

        document.getElementById("contentwrapper").setAttribute("style", "grid-template-columns: auto auto;");
        document.getElementById("chart1").setAttribute("style", "display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart2").setAttribute("style", "display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 2;");
        document.getElementById("chart3").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart4").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart5").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(2);

    }
    else if (layoutValue === "2") {


        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart3").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart4").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(2);

    }
    else if (layoutValue === "3") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 2;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 3; grid-column-end: 3;");
        document.getElementById("chart4").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(3);

    }
    else if (layoutValue === "4") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 3;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 2; grid-column-end: 2;");
        document.getElementById("chart4").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(3);

    }
    else if (layoutValue === "5") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 2;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 3;");
        document.getElementById("chart4").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(3);


    }
    else if (layoutValue === "6") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 3 ;grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart4").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(3);

    }
    else if (layoutValue === "7") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 3; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart4").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(3);


    }
    else if (layoutValue === "8") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 2;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 2; grid-column-end: 2;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(4);

    }
    else if (layoutValue === "9") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: 50vw auto auto;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 3 ;grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 2 ;grid-column-start: 2; grid-column-end: 4;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 2; grid-row-end: 3; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-row-end: 3; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(4);


    }
    else if (layoutValue === "10") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto 50vw;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 2; grid-column-start: 1; grid-column-end: 3;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 3; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 2; grid-row-end: 3; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-row-end: 3; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(4);


    }
    else if (layoutValue === "11") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto auto;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 4;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(4);


    }
    else if (layoutValue === "12") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: 50% auto auto;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 4;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(4);

    }
    else if (layoutValue === "13") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto 50%;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 4;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(4);

    }
    else if (layoutValue === "14") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto auto auto");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 4; grid-column-end: 5;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(4);

    }
    else if (layoutValue === "15") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: 50vw auto auto;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 3 ;grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 2 ;grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 2; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-row-end: 3; grid-column-start: 2; grid-column-end: 4;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(4);

    }
    else if (layoutValue === "16") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto 50vw;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 2 ;grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 2 ;grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 3; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-row-end: 3; grid-column-start: 1; grid-column-end: 3;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(4);

    }
    else if (layoutValue === "17") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto auto;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 4;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(4);

    }
    else if (layoutValue === "18") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: 50% auto auto;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 4;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(4);

    }
    else if (layoutValue === "19") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto 50%;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 4;");
        document.getElementById("chart5").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(4);

    }
    else if (layoutValue === "20") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: 50vw auto auto;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 3 ;grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 2 ;grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 2; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-row-end: 3; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart5").setAttribute("style","display: ; grid-row-start: 2; grid-row-end: 3; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(5);

    }
    else if (layoutValue === "21") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto 50vw;");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 2 ;grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 2 ;grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-row-end: 3; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-row-end: 3; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart5").setAttribute("style","display: ; grid-row-start: 2; grid-row-end: 3; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(5);

    }
    else if (layoutValue === "22") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 7;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 7; grid-column-end: 13;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 5;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 5; grid-column-end: 9;");
        document.getElementById("chart5").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 9; grid-column-end: 13;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(5);

    }
    else if (layoutValue === "23") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 5;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 5; grid-column-end: 9;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 9; grid-column-end: 13;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 7;");
        document.getElementById("chart5").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 7; grid-column-end: 13;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(5);

    }
    else if (layoutValue === "24") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto auto auto");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 5;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart5").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 4; grid-column-end: 5;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(5);

    }
    else if (layoutValue === "25") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto auto auto");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 4; grid-column-end: 5;");
        document.getElementById("chart5").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 5;");
        document.getElementById("chart6").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(5);

    }
    else if (layoutValue === "26") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto auto ");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart5").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart6").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(6);

    }
    else if (layoutValue === "27") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto auto auto");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 3;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 3; grid-column-end: 5;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart5").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart6").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 4; grid-column-end: 5;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(6);

    }
    else if (layoutValue === "28") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto auto auto");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 4; grid-column-end: 5;");
        document.getElementById("chart5").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 3;");
        document.getElementById("chart6").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 3; grid-column-end: 5;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(6);

    }
    else if (layoutValue === "29") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns:  50% auto auto");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart5").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart6").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(6);

    }
    else if (layoutValue === "30") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns:  auto auto 50%");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart5").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart6").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart7").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(6);

    }
    else if (layoutValue === "31") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 5;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 5; grid-column-end: 9;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 9; grid-column-end: 13;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 4;");
        document.getElementById("chart5").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 4; grid-column-end: 7;");
        document.getElementById("chart6").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 7; grid-column-end: 10;");
        document.getElementById("chart7").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 10; grid-column-end: 13;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(7);

    }
    else if (layoutValue === "32") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 4;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 4; grid-column-end: 7;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 7; grid-column-end: 10;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 10; grid-column-end: 13;");
        document.getElementById("chart5").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 5;");
        document.getElementById("chart6").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 5; grid-column-end: 9;");
        document.getElementById("chart7").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 9; grid-column-end: 13;");
        document.getElementById("chart8").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(7);

    }
    else if (layoutValue === "33") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto auto auto");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 4; grid-column-end: 5;");
        document.getElementById("chart5").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart6").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart7").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart8").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 4; grid-column-end: 5;");
        document.getElementById("chart9").setAttribute("style","display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(8);

    }
    else if (layoutValue === "34") {

        document.getElementById("contentwrapper").setAttribute("style","grid-template-columns: auto auto auto ");
        document.getElementById("chart1").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart2").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart3").setAttribute("style","display: ; grid-row-start: 1; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart4").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart5").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart6").setAttribute("style","display: ; grid-row-start: 2; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart7").setAttribute("style","display: ; grid-row-start: 3; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart8").setAttribute("style","display: ; grid-row-start: 3; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart9").setAttribute("style","display: ; grid-row-start: 3; grid-column-start: 3; grid-column-end: 4;");
        document.getElementById("chart10").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart11").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart12").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart13").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart14").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart15").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart16").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart17").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart18").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart19").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart20").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart21").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart22").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart23").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        document.getElementById("chart24").setAttribute("style", "display: none; grid-row-start: 2; grid-column-start: 1; grid-column-end: 1;");
        showchart(9);

    }
}

function showchart(chartCount) {

    let i = 0;

    do {

        i += 1;

        let exchange = settings['exchange' + i];
        let pair = settings['pair' + i];
        let symbol = exchange + ':' + pair;
        let interval = settings['interval' + i];
        let style = settings['style' + i];
        let draw = settings['draw' + i];
        let drawbool = Boolean(draw);
        let studies = settings['studies' + i];

        new TradingView.widget({
            container_id: ('chart' + i),
            autosize: true,
            locale: "en",
            symbol: symbol,
            interval: interval,
            timezone: "Etc/UTC",
            theme: settings.theme,
            style: style,
            hide_side_toolbar: drawbool,
            save_image: false,
            allow_symbol_change: true,
            enable_publishing: false,
            hideideas: true,
            show_popup_button: true,
            withdateranges: false,
            referral_id: "10702",
            popup_width: "1000",
            popup_height: "650",
            padding: "0",
            enabled_features: ["header_settings"],
            disabled_features: [""],
            overrides: {},
            studies: studies
        });
    }

    while (i < chartCount);

}

function exchangePairSelect(chartNumber){

    let input = document.getElementById('chart'+chartNumber+'exchange');

        //get a reference to the select element
        let $select = $('#chart'+chartNumber+'pair');
        settings['exchange' + chartNumber] = input.value;
    localStorage.setItem("currentSettings",JSON.stringify(settings));

        let exchange =  settings['exchange' + chartNumber];



        //request the JSON data and parse into the select element
        $.getJSON(exchange+'.json', function(data){

            //clear the current content of the select
            $select.html('');


            //iterate over the data and append a select option
            $.each(data, function(index, val){
                $select.append('<option id="' + val + '">' + val + '</option>');
                document.getElementById('chart'+chartNumber+'pair').selectedIndex = "0";

                let input = document.getElementById('chart'+chartNumber+'pair');
                settings['pair' + chartNumber] = input.value;
                localStorage.setItem("currentSettings",JSON.stringify(settings));
            })
        });




}



function ExchangePairInitial(){

    let max = 24;
    let i = 0;

    do {

        i += 1;

        //get a reference to the select element
        let $select = $('#chart'+i+'pair');


        let exchange =  settings['exchange' + i];


        //request the JSON data and parse into the select element
        $.getJSON(exchange+'.json', function(data){

            //clear the current content of the select
            $select.html('');


            //iterate over the data and append a select option
            $.each(data, function(index, val){
                $select.append('<option id="' + val + '">' + val + '</option>');
            })
        });


          }
    while (i < max);

}

function pairSelect(chartNumber) {

    let input = document.getElementById('chart'+chartNumber+'pair');

    settings['pair' + chartNumber] = input.value;
    localStorage.setItem("currentSettings",JSON.stringify(settings));
}

function intervalSelect(chartNumber) {

    let input = document.getElementById('chart'+chartNumber+'interval');

    settings['interval' + chartNumber] = input.value;
    localStorage.setItem("currentSettings",JSON.stringify(settings));
}

function styleSelect(chartNumber) {

    let input = document.getElementById('chart'+chartNumber+'style');

    settings['style' + chartNumber] = input.value;
    localStorage.setItem("currentSettings",JSON.stringify(settings));
}

function applyAllExchangePair(){

}

function applyAllInterval(){

}

function applyAllBarStyle(){

}

function applyAllStudies(){

}
window.onload = function () {

    let max = 24;
    let i = 0;

    do {

        i += 1;

        let input = document.getElementById('chart'+i+'pair');
        let input2 = document.getElementById('chart'+i+'interval');
        let input3 = document.getElementById('chart'+i+'exchange');
        let input4 = document.getElementById('chart'+i+'style');

        input.value = settings['pair' + i] ;
        input2.value = settings['interval' + i] ;
        input3.value = settings['exchange' + i] ;
        input4.value = settings['style' + i] ;





    }
    while (i < max);

    };



