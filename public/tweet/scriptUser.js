console.log('hello there')

//add like button function
const buttonSelect = document.querySelectorAll('.likeButton')

function onClick () {
    function responseHandler () {
      console.log(this.responseText)

    }
    console.log('clicked!')
    let tweetid = parseInt(this.name);
    console.log("tweetiddd= "+tweetid)
    console.log(typeof tweetid)

    let data = {
        tweetid:tweetid
    };

    let request = new XMLHttpRequest()
    request.addEventListener("load", responseHandler);
    request.open('post', "/tweet/likes");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //request.send(tweetid)
    request.send(JSON.stringify(data))
}

buttonSelect.forEach(element => {
    element.addEventListener('click', onClick)
})

//hashing a tweet
//===============

//create a function "insert"
//-------------------------
function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}
//All content in array
let allContent = document.querySelectorAll("#content");

for (i=0; i<allContent.length ; i++) {
    let contentSelect = allContent[i];
    let content = contentSelect.innerText;
    //console.log(content)
    let n1 = content.indexOf("#");
    //console.log("=======HEX KEY OVER HERE======")
    //console.log("n1 = "+n1)
    let n2 = content.indexOf(" ", n1);
    //console.log("n2 = "+n2)
    let content2 = content;
    if (n2 < 0 && n1 > 0) {
    //if no empty space, n1 return "-1", insert at the end.
        let nNew = content.length + 1;
        content2 = insert(content, nNew, "</u></button></form>")
    }
    if (n2 > 0 && n1 > 0) {
        content2 = insert(content, n2, "</u></button></form>")
    }

    //console.log(content2)
    let content3 = content2;
    if (n1 >= 0) {
        content3 = insert(content2, n1, "<form method='post' onclick='testFunction()' action='/tweet/hash'><button name='text' class='btn btn-link p-0' style='margin:-5px 4px 0 4px'><u>")
    }
    //console.log(content3)
    contentSelect.innerHTML = content3;
}

function testFunction () {
    console.log("superclcicked!!")
    hashtext = event.target.innerText; //#check3
    console.log(hashtext)
    let path = event.path[1];
    path.setAttribute("value",event.target.innerText);
}

//lets make user profile clickable
let username = document.querySelector("#welcome>b").innerText
username = insert(username, username.length, "</b></button></form>")
username = insert(username, 9, "<form method='get' action='/tweet/user'><button class='btn btnuser p-0' style='margin:-3px 4px 0 4px'><b>")
console.log(username)
document.querySelector("#welcome>b").innerHTML = username;



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("====")