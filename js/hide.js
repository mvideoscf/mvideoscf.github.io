//init
explicitHidden = false;
matureHidden = true;
Array.prototype.forEach.call(document.getElementsByClassName("mature"), function(el) {
	el.style.visibility = "hidden";
});		
//update

const cb2 = document.querySelector('#accept2');
const cb = document.querySelector('#accept');

const btn = document.querySelector('#btn');
btn.onclick = () => {
	if(!cb.checked){
		Array.prototype.forEach.call(document.getElementsByClassName("mature"), function(el) {
			el.style.visibility = "hidden";		
			matureHidden = true;
		});
	}
	else {
		Array.prototype.forEach.call(document.getElementsByClassName("mature"), function(el) {
			el.style.visibility = "visible";
			matureHidden = false;
		});
	}
	if(!cb2.checked){
		Array.prototype.forEach.call(document.getElementsByClassName("explicit"), function(el) {
			el.style.visibility = "hidden";
			explicitHidden = true;
		});
	}
	else {
		Array.prototype.forEach.call(document.getElementsByClassName("explicit"), function(el) {
			el.style.visibility = "visible";
			explicitHidden = false;
		});
	}
};
document.getElementById("playlist").style.visibility = "hidden";
document.getElementById("playButton").style.visibility = "hidden";