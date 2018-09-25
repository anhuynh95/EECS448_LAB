

function checkMyPassword()
{
	var password = document.getElementById("password1").value;
	var c_password = document.getElementById("password2").value;
	var wordLength = password.length;
	 if((wordLength >7)&&(password== c_password))
	 {
	 	alert("You confirmed your password.");
	 }
	else if((wordLength >7)&&(password != c_password))
	{
		alert("Your passwords do not match.");
	}
	 else if(wordLength <8)
	{		
		alert("Your password need to be at least 8 characters.");		
	}
	
}

