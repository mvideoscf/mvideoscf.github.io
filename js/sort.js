var isSorted = false;
function sortTable() {	
	var table = document.getElementById("videos");
	
	if(!isSorted)
	{	
		document.getElementById("sort").title = "Sort Alphabetically";
		var list = table.innerHTML.split('\n');
		var newSongs =[];
		var newSongsIndices=[];
		var c = 0;
		for(var i = 0 ; i < list.length; i++)
		{
			if(list[i].includes('target="_blank"'))
			{
				newSongs.push(list[i]);
				newSongsIndices.push(parseInt(list[i].split("i/s")[1].split(".jpg")[0]));
			}
		}	
		var sorted = sortArrays([newSongsIndices,newSongs]);	
		newSongs = sorted[1];
		table.innerHTML="";
		
		for (var i = newSongs.length-1 ; i >=0  ; i--) 
		{
			if(c==0)
				row= table.insertRow();
			
			let data = row.insertCell(c);
			if(newSongs[i].includes("'explicit'") ||newSongs[i].includes('"explicit"') )
			{
				data.classList.add('explicit');
			}
			if(newSongs[i].includes("'mature'") ||newSongs[i].includes('"mature"') )
			{
				data.classList.add('mature');
			}
			data.innerHTML = newSongs[i];
			data.parentElement.innerHTML+='\n';
			c++;
			if(c>5)
				c=0;
		}
		if(matureHidden)
			Array.prototype.forEach.call(document.getElementsByClassName("mature"), function(el) {
					el.style.visibility = "hidden";			
				});
		isSorted = true;
		document.getElementById("sort").innerHTML="&#8595;";
	}
	else
	{
		location.reload(); 
	}
}
function sortArrays(arrays, comparator = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0) {
    let arrayKeys = Object.keys(arrays);
    let sortableArray = Object.values(arrays)[0];
    let indexes = Object.keys(sortableArray);
    let sortedIndexes = indexes.sort((a, b) => comparator(sortableArray[a], sortableArray[b]));

    let sortByIndexes = (array, sortedIndexes) => sortedIndexes.map(sortedIndex => array[sortedIndex]);

    if (Array.isArray(arrays)) {
        return arrayKeys.map(arrayIndex => sortByIndexes(arrays[arrayIndex], sortedIndexes));
    } else {
        let sortedArrays = {};
        arrayKeys.forEach((arrayKey) => {
            sortedArrays[arrayKey] = sortByIndexes(arrays[arrayKey], sortedIndexes);
        });
        return sortedArrays;
    }
}