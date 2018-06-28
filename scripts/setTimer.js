var times = [];
var intervals = [];
function setTimer(num){
	var indTime = [];
	indTime.push(num);
	indTime.push(new Date().getTime());
	times.push(indTime);
	var text = document.getElementById("timeroosies");
	if(num>1){
		var interval = times[times.length-1][1]-times[times.length-2][1]; 
		text.innerHTML = interval;
		intervals.push(interval);
	}
}

function downloadArr(){
	var fullTimes = "Number,Interval\n";
	for(var i = 0; i<intervals.length; i++){
		fullTimes+=(i+1)+","+intervals[i]+'\n';
	}
	var dEl = document.createElement("a");
	dEl.setAttribute("href", "data:text/xml;charset=utf-8,"+encodeURIComponent(fullTimes));
	dEl.setAttribute("download", "intervals.csv");
	dEl.style.display = "none";
	document.body.appendChild(dEl);
	dEl.click();
	document.body.removeChild(dEl);
}