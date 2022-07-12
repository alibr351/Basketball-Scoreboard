let trackEl = document.getElementById("track-el")
let homeScores = document.getElementById("home-scores")
let guestScores = document.getElementById("guest-scores")

let homePoint = 0
let guestPoint = 0

  function homePlus1() {
      homePoint += 1
      homeScores.innerText = homePoint
  }
   function homePlus2() {
      homePoint += 2
      homeScores.innerText = homePoint
  }
   function homePlus3() {
      homePoint += 3
      homeScores.innerText = homePoint
  }
  
  function guestPlus1() {
      guestPoint += 1
      guestScores.innerText = guestPoint
  }
    function guestPlus2() {
      guestPoint += 2
      guestScores.innerText = guestPoint
  }
    function guestPlus3() {
      guestPoint += 3
      guestScores.innerText = guestPoint
  }
  
  function reset() {
       homePoint = 0
       homeScores.innerText = homePoint
       guestPoint = 0
       guestScores.innerText = guestPoint  
  }