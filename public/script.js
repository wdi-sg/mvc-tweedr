console.log('script is running from public folder');

// make a new request
const request = new XMLHttpRequest();


const buttonList = document.querySelectorAll('#fav')

buttonList.forEach(button => button.addEventListener('click', () => {

	// what to do when we recieve the request
	var responseHandler = function() {
	  console.log("response text", this.responseText);
	  console.log("status text", this.statusText);
	  console.log("status code", this.status);
	};
	request.addEventListener("load", responseHandler)

	//prepare data for post request
	const data = {'tweed': button.value}

	// ready the system by calling open, and specifying the url
	const url = "http://localhost:3000/favorite";
	request.open("POST", url);
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

	request.send(JSON.stringify(data));

	})
)







