function mouseGoesOver(highlight,infobox)
{
	makeOrange(highlight);
	showDiv(infobox);
}

function mouseGoesOut(highlight,infobox)
{
	hideDiv(infobox);
	makeBlue(highlight);
}

function mouseGoesOverTwo(highlight1,highlight2,infobox)
{
	makeOrange(highlight1);
	makeOrange(highlight2);
	showDiv(infobox);
}

function mouseGoesOutTwo(highlight1,highlight2,infobox)
{
	hideDiv(infobox);
	makeBlue(highlight1);
	makeBlue(highlight2);
}

function changeClass(pass, theNewClass)
{
	var divs = document.getElementsByTagName('div'); 
	for(i=0;i<divs.length;i++)
	{ 
		if(divs[i].id.match(pass))
		{ 
			divs[i].className=theNewClass;
		} 
	} 
}

function hideDiv(pass) 
{ 
	changeClass(pass, "hidden");
} 

function showDiv(pass) 
{ 
	changeClass(pass, "visible");
} 

function makeBlue(pass)
{
	changeClass(pass, "blue");
}

function makeOrange(pass)
{
	changeClass(pass, "orange");
}




function initialize() { 
    initEvents(); 
} 
window.onload = initialize;

function initEvents()
{

	if(document.getElementById("highlightdiv1"))
	{
		var highlightdiv1 = document.getElementById("highlightdiv1");
		highlightdiv1.onmouseover = function () { mouseGoesOver("highlightdiv1","infobox1"); }
		highlightdiv1.onmouseout = function () { mouseGoesOut("highlightdiv1","infobox1"); }
	}
	
	if(document.getElementById("infobox1"))
	{
		var infobox1 = document.getElementById("infobox1");
		infobox1.onmouseover = function () { mouseGoesOver("highlightdiv1","infobox1"); }
		infobox1.onmouseout = function () { mouseGoesOut("highlightdiv1","infobox1"); }
	}
	
	if(document.getElementById("highlightdiv2"))
	{
		var highlightdiv2 = document.getElementById("highlightdiv2");
		highlightdiv2.onmouseover = function () { mouseGoesOver("highlightdiv2","infobox2"); }
		highlightdiv2.onmouseout = function () { mouseGoesOut("highlightdiv2","infobox2"); }
	}
	
	if(document.getElementById("infobox2"))
	{
		var infobox2 = document.getElementById("infobox2");
		infobox2.onmouseover = function () { mouseGoesOver("highlightdiv2","infobox2"); }
		infobox2.onmouseout = function () { mouseGoesOut("highlightdiv2","infobox2"); }
	}
	
	if(document.getElementById("highlightdiv3"))
	{
		var highlightdiv3 = document.getElementById("highlightdiv3");
		highlightdiv3.onmouseover = function () { mouseGoesOver("highlightdiv3","infobox3"); }
		highlightdiv3.onmouseout = function () { mouseGoesOut("highlightdiv3","infobox3"); }
	}
	
	if(document.getElementById("infobox3"))
	{
		var infobox3 = document.getElementById("infobox3");
		infobox3.onmouseover = function () { mouseGoesOver("highlightdiv3","infobox3"); }
		infobox3.onmouseout = function () { mouseGoesOut("highlightdiv3","infobox3"); }
	}
	
	if(document.getElementById("highlightdiv4_1"))
	{
		var highlightdiv4_1 = document.getElementById("highlightdiv4_1");
		highlightdiv4_1.onmouseover = function () { mouseGoesOverTwo("highlightdiv4_1","highlightdiv4_2","infobox4"); }
		highlightdiv4_1.onmouseout = function () { mouseGoesOutTwo("highlightdiv4_1","highlightdiv4_2","infobox4"); }
	}
	
	if(document.getElementById("highlightdiv4_2"))
	{
		var highlightdiv4_2 = document.getElementById("highlightdiv4_2");
		highlightdiv4_2.onmouseover = function () { mouseGoesOverTwo("highlightdiv4_1","highlightdiv4_2","infobox4"); }
		highlightdiv4_2.onmouseout = function () { mouseGoesOutTwo("highlightdiv4_1","highlightdiv4_2","infobox4"); }
	}
	
	if(document.getElementById("infobox4"))
	{
		var infobox4 = document.getElementById("highlightdiv4_2");
		infobox4.onmouseover = function () { mouseGoesOverTwo("highlightdiv4_1","highlightdiv4_2","infobox4"); }
		infobox4.onmouseout = function () { mouseGoesOutTwo("highlightdiv4_1","highlightdiv4_2","infobox4"); }
	}
	
	if(document.getElementById("highlightdiv5_1"))
	{
		var highlightdiv5_1 = document.getElementById("highlightdiv5_1");
		highlightdiv5_1.onmouseover = function () { mouseGoesOverTwo("highlightdiv5_1","highlightdiv5_2","infobox5"); }
		highlightdiv5_1.onmouseout = function () { mouseGoesOutTwo("highlightdiv5_1","highlightdiv5_2","infobox5"); }
	}
	
	if(document.getElementById("highlightdiv5_2"))
	{
		var highlightdiv5_2 = document.getElementById("highlightdiv5_2");
		highlightdiv5_2.onmouseover = function () { mouseGoesOverTwo("highlightdiv5_1","highlightdiv5_2","infobox5"); }
		highlightdiv5_2.onmouseout = function () { mouseGoesOutTwo("highlightdiv5_1","highlightdiv5_2","infobox5"); }
	}
	
	if(document.getElementById("infobox5"))
	{
		var infobox5 = document.getElementById("highlightdiv5_2");
		infobox5.onmouseover = function () { mouseGoesOverTwo("highlightdiv5_1","highlightdiv5_2","infobox5"); }
		infobox5.onmouseout = function () { mouseGoesOutTwo("highlightdiv5_1","highlightdiv5_2","infobox5"); }
	}

}






