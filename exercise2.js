var images = ["http://www.animal-space.net/wp-content/uploads/2011/09/funny-pug-291.jpg", "http://www.risasinmas.com/wp-content/uploads/2012/09/te-gustan-mis-cejas-verdad-rsm.jpg",
"http://roflzoo.com/pics/201408/tired-panda.jpg", 
"https://way2share.com/files/2017/02/Funny-Animals-easter-bunny.jpg", "https://i.pinimg.com/originals/85/03/0d/85030dacda1b1f91b92ff77056b17648.jpg",
"http://funnypicture.org/wallpaper/2015/05/funny-animals-with-captions-34-widescreen-wallpaper.jpg"];
var current =0;

var caption =[];
for(var i=0; i<(images.length); i++)
{
	var cur = i+1;
	caption[i] =  cur+"/"+images.length;
}

function slideShow(temp)
{
	current += temp;
	if(current > images.length-1)
		current =0;
	if(current < 0)
		current = images.length-1;

	document.getElementById("slideShow").src = images[current];
	document.getElementById("caption").innerHTML = "Current Images: "+ caption[current];
	return false;
}
 function autoRun()
 {
 	setInterval("slideShow(1)", 2000);
 }