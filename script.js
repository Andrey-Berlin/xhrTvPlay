
  
  
  let style = document.getElementById('style');
  style.innerHTML = `
  audio{
    margin: 30px 0px 0px 0px;
    
  }
  
  ul {
    padding: 0px 30px 0px 50px;
  }
  
  video {
    
    width: 100%;
    margin: 30px 0px 0px 0px;
  }
p{
    color:rgb(255,255,255);
    background:#000000;
    
    
  }
section {
  text-align:center;
}  
  `;
let header = document.getElementById('header');
header.innerHTML = `
<h1>TvApp</h1>
<p>Внимание! Это приложение еще в стадии разроботки.</p>

`;
function liveVideo(tv) {
 let section = document.getElementById("section").innerHTML = tv;


}

function getFile(netWeb) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', "https://andrey-berlin.github.io/net-web-txt/video-player.txt");
  xhr.onload = function() {
    if (xhr.status == 200) {
      netWeb(this.responseText);
    } else {
      netWeb("Error: " + xhr.status);
    }
  }
  xhr.send();
}


getFile(liveVideo); 
//let section = document.getElementById('section');
//section.innerHTML = ``;

/*section.style.margin = '1em';*/
/*let video1 = document.getElementById("video1");
video1.innerHTML = ``;
let video2 = document.getElementById('video2');
video2.innerHTML = ``;*/
/*audio.style.fontSize = '50px';*/



