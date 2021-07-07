let followBtn = document.getElementById("follow");

followBtn.addEventListener('click', () => {
    followBtn.innerText="FOLLOWED"
    document.body.style.backgroundColor="red"
    console.log("CLICKED")
})