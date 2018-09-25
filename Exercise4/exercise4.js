function changeWidth(m_width)
{
	//let temp = document.getElementsByClassName('para');
	document.getElementByClassName("para").style.borderWidth = "20px";
}

function colorChange(borColor, backColor, wid)
{
	var temp = wid.value +"px";

	document.getElementById("para2").style.borderWidth = temp;
	document.getElementsByClassName('para')[0].style.background = backColor.value;
	document.getElementsByClassName('para')[0].style.borderColor = borColor.value;
	
}




function changeByInput(a, b, c, e, f, g, h)
{
	var borRed = a.value;
	var borGreen = b.value;
	var borBlue = c.value;

	var backRed = e.value;
	var backGreen = f.value;
	var backBlue =g.value;

	var wid = h.value +"px";
	

	document.getElementsByClassName('para')[0].style.borderColor = "rgb("+borRed+","+borGreen+","+borBlue+")";
	document.getElementsByClassName('para')[0].style.background = "rgb("+backRed+","+backGreen+","+backBlue+")";
	document.getElementById("para2").style.borderWidth = wid;
}