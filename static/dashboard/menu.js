//UDMv3.8

//*** DO NOT EDIT **************************************************************************
var tempEl;
function getRealLeft(imgElem){
	if(ns4){xPos=imgElem.x;}
	else if(!exclude){
		xPos=eval(imgElem).offsetLeft;
		tempEl=eval(imgElem).offsetParent;
		while(tempEl!=null){xPos+=tempEl.offsetLeft;tempEl=tempEl.offsetParent;}
	}
	if(mac&&ie5){
		xPos+=parseInt(document.body.leftMargin);
	}
	return xPos;};

function getRealTop(imgElem){
	if(ns4){yPos=imgElem.y;}
	else if(!exclude){
		yPos=eval(imgElem).offsetTop;
		tempEl=eval(imgElem).offsetParent;
		while(tempEl!=null){
			yPos+=tempEl.offsetTop;tempEl=tempEl.offsetParent;
		}
	}
	if(mac&&ie5){
		yPos+=parseInt(document.body.topMargin);
	}
	return yPos;
	};
	
/*get offset position based on a function from http://www.webreference.com/js/column33/image.html*/

var xPos=0;
var yPos=0;
var rImg;
var rPosition=new Array;
if(typeof document.images['anchor']!="undefined"&&typeof document.images['anchor']!=null){
	rImg=document.images['anchor'];
};
var fAry=new Array;
var fj=0;
var fImgs=document.images;
var faryl=0;if(!exclude){
	faryl=fImgs.length;
}

for(var i=0;i<faryl;i++){
	if(fImgs[i].name=="freeanchor"){
		fAry[fj]=fImgs[i];fj++;
	}
};

var usingR=0;
var usingRF=0;
if(!exclude&&rImg){
	usingR=1;
	if((mac&&ie4)||kde){
		ie4=0;ie=0;kde=0;exclude=1;
	}
	else if(ns4){
		xPos=getRealLeft(rImg);
		yPos=getRealTop(rImg);
		if(menuALIGN!="free"){
			menuALIGN="left";
		}
		absLEFT=xPos;
		absTOP=yPos;
	}
	else{
		xPos=getRealLeft(rImg);
		yPos=getRealTop(rImg);
	if(menuALIGN!="free"){
		menuALIGN="left";
	}
		absLEFT=xPos;
		absTOP=yPos;
	}
}

faryl=fAry.length;
if(faryl>0&&menuALIGN=="free"){
	usingRF=1;
	if((mac&&ie4)||kde){
		ie4=0;
		ie=0;
		kde=0;
		exclude=1;
	}
	else if(ns4){
		for(i=0;i<faryl;i++){
			xPos=getRealLeft(fAry[i]);
			yPos=getRealTop(fAry[i]);
			if(typeof mI[i]!="undefined"){
				mI[i][7]=xPos;mI[i][6]=yPos;
			}
			absLEFT=0;
			absTOP=0;
		}
	}
	else{
		for(i=0;i<faryl;i++){
			xPos=getRealLeft(fAry[i]);
			yPos=getRealTop(fAry[i]);
			if(typeof mI[i]!="undefined"){
				mI[i][7]=xPos;mI[i][6]=yPos;
			}
			absLEFT=0;absTOP=0;
		}
	}
};

var brTok="";
if(ie4||(mac&&ie5)){brTok="ie4";}
else if(ie5){brTok="ie5";}
if(ns6||op7||kde){brTok="moz";}
if(op6){brTok="op6";}
if(op5){brTok="op5";}
if(ns4){brTok="ns4";}
if(!exclude){
	document.write('<script language="javascript1.2" type="text/javascript" src="'+baseHREF+'menu_'+brTok+'.js"></script>');
}

if (!exclude) {
	var nome = "cadena";


	nome = "Per*i*odo Actual";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addMainItem("", nome, 98, "center", "", "", 0, 0, "P");
	defineSubmenuProperties(98, "left", "center", -4, 0, "");

	var nome = "Informaci*o*n por*br*Centro de Costos";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("/informacionPorCentroDeCostos", nome, "","" );

	var nome = "Informaci*o*n y *br*movimientos*br*por tarjeta";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("/InformacionYMovimientosPorTarjeta", nome, "", "");

	addSubmenuItem("", "<img src='{$media_url}barrita.gif' alt='' width='98' height='6' border='0' align='center'/>", "", "");

	nome = "Per*i*odo Anterior";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addMainItem("", nome, 108, "center", "", "", 0, 0, "P");
	defineSubmenuProperties(108, "left", "center", -4, 0, "");

	var nome = "Centro de Costos";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("/PeriodoAnteriorCentroDeCostos", nome, "", "");

	var nome = "Movimientos*br*por tarjetas";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("/PeriodoAnteriorMovimientosPorTarjeta", nome, "", "");

	addSubmenuItem("", "<img src='{$media_url}barrita.gif' alt='' width='108' height='6' border='0' align='center'/>", "", "");

	nome = "Autorizaciones por tarjeta";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addMainItem("/AutorizacionesPorTarjeta", nome, 135, "center", "", "", 0, 0, "P");
	defineSubmenuProperties(135, "left", "center", -4, 0, "");

	nome = "Distribuci*o*n de Fondos";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addMainItem("", nome, 118, "center", "", "", 0, 0, "P");
	defineSubmenuProperties(118, "left", "center", -4, 0, "");

	var nome = "Realizar distribuci*o*n*br*por orden alfab*e*tico";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("/RealizarDistribucionPorOrdenAlfabetico", nome, "", "");

	var nome = "Realizar distribuci*o*n";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("/RealizarDistribucion", nome, "", "");

	var nome = "Distribuciones de*br*fondos realizadas";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("/DistribucionesDeFondosRealizadas", nome, "", "");

	addSubmenuItem("", "<img src='{$media_url}barrita.gif' alt='' width='118' height='6' border='0' align='center'/>", "", "");

	nome = "Transferencias";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addMainItem("", nome, 80, "center", "", "", 0, 0, "P");
	defineSubmenuProperties(80, "left", "center", -4, 0, "");

	var nome = "Realizar*br*transferencia*br*por orden*br*alfab*e*tico";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("/RealizarTransferenciaPorOrdenAlfabetico", nome, "", "");

	var nome = "Realizar*br*transferencia";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("/RealizarTransferencia", nome, "", "");

	var nome = "Transferencias*br*realizadas";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("/TransferenciasRealizadas", nome, "", "");

	addSubmenuItem("", "<img src='{$media_url}barrita.gif' alt='' width='80' height='6' border='0' align='center'/>", "", "");

	nome = "Reportes";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addMainItem("", nome, 130, "center", "", "", 0, 0, "P");
	defineSubmenuProperties(130, "left", "center", -4, 0, "");

	var nome = "Rendici*o*n por*br*Centro de Costos (pdf)";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("GetReportesPorPeriodo.event?tipo=ReportePorCCosto&formato=pdf", nome, "", "");

	var nome = "Rendici*o*n por*br*Centro de Costos (xls)";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("GetReportesPorPeriodo.event?tipo=ReportePorCCosto&formato=xls", nome, "", "");

	var nome = "Rendici*o*n por*br*Cuenta (pdf)";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("GetReportesPorPeriodo.event?tipo=ReportePorCuenta&formato=pdf", nome, "", "");

	var nome = "Rendici*o*n por*br*Cuenta (xls)";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("GetReportesPorPeriodo.event?tipo=ReportePorCuenta&formato=xls", nome, "", "");

	var nome = "Movimientos*br*por tarjeta (pdf)";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("GetReportesPorPeriodo.event?tipo=ReportePorTarjeta&formato=pdf", nome, "", "");

	var nome = "Movimientos*br*por tarjeta (xls)";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addSubmenuItem("GetReportesPorPeriodo.event?tipo=ReportePorTarjeta&formato=xls", nome, "", "");

	addSubmenuItem("", "<img src='{$media_url}barrita.gif' alt='' width='130' height='6' border='0' align='center'/>", "", "");

	nome = "Ultimas liquidaciones";
	nome = reemplazar(nome, "*br*", "<br>");
	nome = reemplazar(nome, "*a*", "&#225;");
	nome = reemplazar(nome, "*e*", "&#233;");
	nome = reemplazar(nome, "*i*", "&#237;");
	nome = reemplazar(nome, "*o*", "&#243;");
	nome = reemplazar(nome, "*u*", "&#250;");
	addMainItem("/UltimasLiquidaciones", nome, 130, "center", "", "", 0, 0, "P");
	defineSubmenuProperties(130, "left", "center", -4, 0, "");

}

//UDMv3.4.1.1b
//**DO NOT EDIT THIS *****
if (!exclude) { //********
	//************************
	
	///////////////////////////////////////////////////////////////////////////
	//
	//  ULTIMATE DROPDOWN MENU VERSION 3.4.1b by Brothercake
	//  http://www.brothercake.com/dropdown/ 
	//
	//  Link-wrapping routine by Brendan Armstrong
	//  KDE modifications by David Joham
	//  Opera reload/resize routine by Michael Wallner
	//  http://www.wallner-software.com/
	//
	//  This script featured on Dynamic Drive (http://www.dynamicdrive.com)
	//
	///////////////////////////////////////////////////////////////////////////
	
	// *** POSITIONING AND STYLES *********************************************
	
	var menuALIGN = "fixed";	// alignment
	var absLEFT = 	0;		// absolute left or right position (if menu is left or right aligned)
	var absTOP = 	63; 		// absolute top position
	
	var staticMENU = false;		// static positioning mode (ie5,ie6 and ns4 only)
	
	var stretchMENU = false;	// show empty cells
	var showBORDERS = false;	// show empty cell borders
	
	var baseHREF ;		// base path to .js files for the script (ie: resources/)
	var zORDER = 	1000;		// base z-order of nav structure (not ns4)
	
	var mCOLOR = 	"White";	// main nav cell color
	var rCOLOR = 	"#4A71A5";	// main nav cell rollover color
	var bSIZE = 	1;		// main nav border size
	var bCOLOR = 	"#B5BAC6"	// main nav border color
	var aLINK = 	"#4A71A5";	// main nav link color
	var aHOVER = 	"White";	// main nav link hover-color (dual purpose)
	var aDEC = 	"none";		// main nav link decoration
	var fFONT = 	"Verdana";	// main nav font face
	var fSIZE = 	9;		// main nav font size (pixels)
	var fWEIGHT = 	"bold"		// main nav font weight
	var tINDENT = 	7;		// main nav text indent (if text is left or right aligned)
	var vPADDING = 	1;		// main nav vertical cell padding
	var vtOFFSET = 	0;		// main nav vertical text offset (+/- pixels from middle)
	
	var keepLIT =	true;		// keep rollover color when browsing menu
	var vOFFSET = 	3;		// shift the submenus vertically
	var hOFFSET = 	-1;		// shift the submenus horizontally
	
	var smCOLOR = 	"#B5BAC6";	// submenu cell color
	
	var srCOLOR = 	"#868B9E";	// submenu cell rollover color
	var sbSIZE = 	1;		// submenu border size
	var sbCOLOR = 	"White"		// submenu border color
	var saLINK = 	"White";	// submenu link color
	var saHOVER = 	"";		// submenu link hover-color (dual purpose)
	var saDEC = 	"none";		// submenu link decoration
	var sfFONT = 	"Verdana";	// submenu font face
	var sfSIZE = 	9;		// submenu font size (pixels)
	var sfWEIGHT = 	"normal"	// submenu font weight
	var stINDENT = 	5;		// submenu text indent (if text is left or right aligned)
	var svPADDING = 0;		// submenu vertical cell padding
	var svtOFFSET = 3;		// submenu vertical text offset (+/- pixels from middle)
	
	var shSIZE =	0;		// submenu drop shadow size
	var shCOLOR =	"cccccc";	// submenu drop shadow color
	var shOPACITY = 75;		// submenu drop shadow opacity (not ie4,ns4 or opera)
	
	var keepSubLIT = true;		// keep submenu rollover color when browsing child menu
	var chvOFFSET = -12;		// shift the child menus vertically
	var chhOFFSET = 7;		// shift the child menus horizontally
	
	var closeTIMER = 330;		// menu closing delay time
	
	var cellCLICK = true;		// links activate on TD click
	var aCURSOR = "hand";		// cursor for active links (not ns4 or opera)
	
	var altDISPLAY = "";		// where to display alt text
	var allowRESIZE = true;		// allow resize/reload
	
	var redGRID = false;		// show a red grid
	var gridWIDTH = 0;		// override grid width
	var gridHEIGHT = 1;		// override grid height
	var documentWIDTH = 0;		// override document width
	
	var hideSELECT = true;		// auto-hide select boxes when menus open (ie only)
	var allowForSCALING = false;	// allow for text scaling in mozilla 5
	var ancho = new Array(92, 108, 135, 120, 80, 93, 103);
	
	}