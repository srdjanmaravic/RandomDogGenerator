const imgTag = document.querySelector("#images");
const videoTag = document.querySelector("#video");
 

const getButton = document.querySelector("#getImage");
getButton.addEventListener("click", fetchData);

function fetchData() {
    fetch("https://random.dog/woof.json")
    .then(response => {return response.json()})
    .then(jsonData => {
        if (fileExtension(jsonData.url)==="mp4" || fileExtension(jsonData.url)==="webm"){
            videoTag.style.display = "block";
            imgTag.style.display = "none";
            videoTag.src = jsonData.url;
            videoTag.play();

        } else {
        videoTag.style.display = "none";
        imgTag.style.display = "block";
        imgTag.setAttribute("src",`${jsonData.url}`);
        }
        
        
    })
    .catch(err => console.log(err))
}

var fileExtension = function( url ) {
    return url.split('.').pop().split(/\#|\?/)[0];
}