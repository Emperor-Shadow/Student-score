var btn = document.querySelector('button'),
  scoreT = document.querySelector('#no'),
  usable,
  miniScores = document.getElementsByTagName('h5'),
 scoreMark = 76,
  scoreNo = 0,
  remark = document.querySelector("#great"),
  images = document.querySelector('img')
  remarkInfo = document.querySelector("#word_score")
window.onload = 
async () => {
  var result = await fetch('data.json');
  usable = await result.json();
}


  
updateScore = () => {
  if(scoreNo <= scoreMark) {
    scoreT.innerText = scoreNo
    scoreNo++
  } 
}



doScores = () => {
  for(let i = 0; i < 4; i++) {
      miniScores[i].innerText = usable[i].score;
    }
  }


btn.addEventListener("click" , ()=>{
  doScores()
  setInterval(updateScore , 25),
  setTimeout( ()=> {remark.innerText = "Great",
  remarkInfo.innerText = "You scored higher than 65% of the people who have taken these tests."
  } , 3000)
})
