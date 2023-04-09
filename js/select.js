var playlist = [];
var titlesList = [];
var isSelected = false;
function add(obj)
{
	var youtubeUrl = String(obj.previousSibling.previousSibling);
	id = youtubeUrl.substring(youtubeUrl.length-11);
	if(!playlist.includes(id))
	{
		playlist.push(id);
		var title = obj.previousSibling.previousSibling.innerHTML.split('.jpg"><br>')[1];
		titlesList.push(title);
		obj.innerHTML='-';
	}
	else 
	{
		//remove id
		var index = playlist.indexOf(id);
		if (index > -1) {
			playlist.splice(index, 1);
			titlesList.splice(index, 1);
			obj.innerHTML='+';
		}
	}
	obj.style.backgroundColor=(playlist.includes(id)?'LightSkyBlue':'lightgrey');
	
	document.getElementById('playlist').innerHTML='';
	for(var i = 0 ; i < titlesList.length ; i ++)
	{
		document.getElementById('playlist').innerHTML+='&emsp;'+(i+1)+'. '+titlesList[i]+'<br>';
	}
	
}
function play()
{
	if(playlist.length >0)
	{
		url = 'http://www.youtube.com/watch_videos?video_ids=';
		for(var i = 0 ; i < playlist.length ; i++)
			url += playlist[i]+',';
		window.open(url);
	}
	else 
		alert('No videos selected...');
}
hideAll();
function hideAll()
{
	Array.prototype.forEach.call(document.getElementsByClassName("add"), function(el) {
		el.style.visibility = "hidden";
	});
}
function injectButtons()
{
	if(!isSelected)
	{
		const table = document.getElementById("videos");
		var lines = table.innerHTML.split('\n');
		for (var i = 0; i < lines.length; i++)
			if(lines[i].indexOf('youtu')!=-1){
				lines[i] = lines[i].replace('</a></td>',"</a><br><button class='add' onclick='add(this)'>+</button></td>");
				lines[i] = lines[i].replace('</a></div></td>',"</a><br><button class='add' onclick='add(this)'>+</button></div></td>");
			}
		table.innerHTML = lines.join('\n');
		//table.parentElement.innerHTML += "<table><td style='width:456px'></td><td style='width:700px'><p id='playlist'></p></td><td></td></table><button onclick='play()'>Play</button>&emsp;";
		isSelected=true;
		document.getElementById('select').style.backgroundColor = 'LightSkyBlue';	
		
		document.getElementById("playlist").style.visibility = "visible";
		document.getElementById("playButton").style.visibility = "visible";
	}
	else
	{		
		location.reload(); 
	}
			
}