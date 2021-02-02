function changeSettingsImageFunction() {


	if (settings.interval1 === "30")
		{

	settings.interval1 = "30";

            var settings = {"layout":"1","theme":"dark","buttonpos1":"","buttonpos2":"","exchange1":"COINBASE",
                "exchange2":"BITTREX","exchange3":"NYSE","exchange4":"NYSE","exchange5":"NYSE",
                "exchange6":"NYSE","exchange7":"NASDAQ","exchange8":"NASDAQ","exchange9":"NYSE",
                "exchange10":"NASDAQ","exchange11":"NASDAQ","exchange12":"NYSE","exchange13":"NYSE",
                "exchange14":"NYSE","exchange15":"NYSE","exchange16":"NYSE","exchange17":"NYSE",
                "exchange18":"NYSE","exchange19":"NYSE","exchange20":"NYSE","exchange21":"NYSE",
                "exchange22":"NYSE","exchange23":"NYSE","exchange24":"NYSE","pair1":"LTCUSD",
                "pair2":"DOGEUSD","pair3":"GME","pair4":"NOK","pair5":"AMC","pair6":"BB","pair7":"NAKD",
                "pair8":"AMD","pair9":"GM","pair10":"NVDA","pair11":"NFLX","pair12":"FUBO","pair13":"LTCUSD",
                "pair14":"LTCUSD","pair15":"LTCUSD","pair16":"LTCUSD","pair17":"LTCUSD","pair18":"LTCUSD","pair19":"LTCUSD",
                "pair20":"LTCUSD","pair21":"LTCUSD","pair22":"LTCUSD","pair23":"LTCUSD","pair24":"LTCUSD","interval1":"30",
                "interval2":"30","interval3":"30","interval4":"30","interval5":"30","interval6":"30","interval7":"30",
                "interval8":"30","interval9":"30","interval10":"30","interval11":"30","interval12":"30","interval13":"D",
                "interval14":"D","interval15":"D","interval16":"D","interval17":"D","interval18":"D","interval19":"D",
                "interval20":"D","interval21":"D","interval22":"D","interval23":"D","interval24":"D","style1":"8",
                "style2":"8","style3":"8","style4":"8","style5":"8","style6":"8","style7":"8","style8":"8","style9":"8",
                "style10":"8","style11":"8","style12":"8","style13":"8","style14":"8","style15":"8","style16":"8",
                "style17":"8","style18":"8","style19":"8","style20":"8","style21":"8","style22":"8","style23":"8",
                "style24":"8","draw1":"1","draw2":"1","draw3":"1","draw4":"1","draw5":"1","draw6":"1","draw7":"1",
                "draw8":"1","draw9":"1","draw10":"1","draw11":"1","draw12":"1","draw13":"1","draw14":"1","draw15":"1",
                "draw16":"1","draw17":"1","draw18":"1","draw19":"1","draw20":"1","draw21":"1","draw22":"1","draw23":"1",
                "draw24":"1","studies1":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies2":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies3":["RSI@tv-basicstudies","MACD@tv-basicstudies"],
                "studies4":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies5":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies6":["RSI@tv-basicstudies","MACD@tv-basicstudies"],
                "studies7":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies8":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies9":["RSI@tv-basicstudies","MACD@tv-basicstudies"],
                "studies10":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies11":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies12":["RSI@tv-basicstudies","MACD@tv-basicstudies"],
                "studies13":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies14":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies15":["RSI@tv-basicstudies","MACD@tv-basicstudies"],
                "studies16":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies17":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies18":["RSI@tv-basicstudies","MACD@tv-basicstudies"],
                "studies19":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies20":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies21":["RSI@tv-basicstudies","MACD@tv-basicstudies"],
                "studies22":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies23":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies24":["RSI@tv-basicstudies","MACD@tv-basicstudies"]};



            localStorage.setItem("currentSettings",JSON.stringify(settings));
            location.reload();



        }
	
	else 
		{
		

	settings.interval1 = "240";
	localStorage.setItem("currentSettings",JSON.stringify(settings));

            var settings = {"layout":"1","theme":"dark","buttonpos1":"","buttonpos2":"","exchange1":"COINBASE",
                "exchange2":"BITTREX","exchange3":"NYSE","exchange4":"NYSE","exchange5":"NYSE",
                "exchange6":"NYSE","exchange7":"NASDAQ","exchange8":"NASDAQ","exchange9":"NYSE",
                "exchange10":"NASDAQ","exchange11":"NASDAQ","exchange12":"NYSE","exchange13":"NYSE",
                "exchange14":"NYSE","exchange15":"NYSE","exchange16":"NYSE","exchange17":"NYSE",
                "exchange18":"NYSE","exchange19":"NYSE","exchange20":"NYSE","exchange21":"NYSE",
                "exchange22":"NYSE","exchange23":"NYSE","exchange24":"NYSE","pair1":"LTCUSD",
                "pair2":"DOGEUSD","pair3":"GME","pair4":"NOK","pair5":"AMC","pair6":"BB","pair7":"NAKD",
                "pair8":"AMD","pair9":"GM","pair10":"NVDA","pair11":"NFLX","pair12":"FUBO","pair13":"LTCUSD",
                "pair14":"LTCUSD","pair15":"LTCUSD","pair16":"LTCUSD","pair17":"LTCUSD","pair18":"LTCUSD","pair19":"LTCUSD",
                "pair20":"LTCUSD","pair21":"LTCUSD","pair22":"LTCUSD","pair23":"LTCUSD","pair24":"LTCUSD","interval1":"240",
                "interval2":"240","interval3":"240","interval4":"240","interval5":"240","interval6":"240","interval7":"240",
                "interval8":"240","interval9":"240","interval10":"240","interval11":"240","interval12":"240","interval13":"240",
                "interval14":"240","interval15":"240","interval16":"240","interval17":"240","interval18":"D","interval19":"D",
                "interval20":"D","interval21":"D","interval22":"D","interval23":"D","interval24":"D","style1":"8",
                "style2":"8","style3":"8","style4":"8","style5":"8","style6":"8","style7":"8","style8":"8","style9":"8",
                "style10":"8","style11":"8","style12":"8","style13":"8","style14":"8","style15":"8","style16":"8",
                "style17":"8","style18":"8","style19":"8","style20":"8","style21":"8","style22":"8","style23":"8",
                "style24":"8","draw1":"1","draw2":"1","draw3":"1","draw4":"1","draw5":"1","draw6":"1","draw7":"1",
                "draw8":"1","draw9":"1","draw10":"1","draw11":"1","draw12":"1","draw13":"1","draw14":"1","draw15":"1",
                "draw16":"1","draw17":"1","draw18":"1","draw19":"1","draw20":"1","draw21":"1","draw22":"1","draw23":"1",
                "draw24":"1","studies1":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies2":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies3":["RSI@tv-basicstudies","MACD@tv-basicstudies"],
                "studies4":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies5":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies6":["RSI@tv-basicstudies","MACD@tv-basicstudies"],
                "studies7":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies8":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies9":["RSI@tv-basicstudies","MACD@tv-basicstudies"],
                "studies10":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies11":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies12":["RSI@tv-basicstudies","MACD@tv-basicstudies"],
                "studies13":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies14":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies15":["RSI@tv-basicstudies","MACD@tv-basicstudies"],
                "studies16":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies17":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies18":["RSI@tv-basicstudies","MACD@tv-basicstudies"],
                "studies19":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies20":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies21":["RSI@tv-basicstudies","MACD@tv-basicstudies"],
                "studies22":["RSI@tv-basicstudies","MACD@tv-basicstudies"],"studies23":["RSI@tv-basicstudies",
                    "MACD@tv-basicstudies"],"studies24":["RSI@tv-basicstudies","MACD@tv-basicstudies"]};



            localStorage.setItem("currentSettings",JSON.stringify(settings));
            location.reload();



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
        document.getElementById("chart10").setAttribute("style", "display: ; grid-row-start: 4; grid-column-start: 1; grid-column-end: 2;");
        document.getElementById("chart11").setAttribute("style", "display: ; grid-row-start: 4; grid-column-start: 2; grid-column-end: 3;");
        document.getElementById("chart12").setAttribute("style", "display: ; grid-row-start: 4; grid-column-start: 3; grid-column-end: 4;");
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
        showchart(12);

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



