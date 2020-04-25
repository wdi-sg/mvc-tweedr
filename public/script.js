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
    console.log(content)
    let n1 = content.indexOf("#");
    console.log("=======HEX KEY OVER HERE======")
    console.log("n1 = "+n1)
    let n2 = content.indexOf(" ", n1);
    console.log("n2 = "+n2)
    let content2 = content;
    if (n2 < 0 && n1 > 0) {
    //if no empty space, n1 return "-1", insert at the end.
        let nNew = content.length + 1;
        content2 = insert(content, nNew, "</u></button>")
    }
    if (n2 > 0 && n1 > 0) {
        content2 = insert(content, n2,"</u></button>")
    }
    console.log(content2)
    let content3 = content2;
    if (n1 >= 0) {
        content3 = insert(content2, n1,"<button class='btn btn-link p-0' name='check' style='margin:-1px 4px 0 4px'><u>")
    }
    console.log(content3)
    contentSelect.innerHTML = content3;
}

console.log("====")