var input1   = document.querySelector('#input1')
if (window.Worker) {
    var myWorker = new Worker('working.js');
	input1.onchange = ()=>{
        myWorker.postMessage(input1.value)
        console.log('Message posted to worker');
    }

	myWorker.onmessage = function(e) {
//		result.textContent = e.data;
		console.log('Message received from worker'+e.data);
	}
} else {
	console.log('Your browser doesn\'t support web workers.')
}