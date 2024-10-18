const min = document.getElementById('min');
const sec = document.getElementById('sec');
const milSec = document.getElementById('milSec');

var tmin = 0;
var tsec = 0;
var tmilSec = 0;
var pause = false
var stopWatch

function manipulateTime() {
  tmin
  tsec
  tmilSec
  pause

  if (tmilSec == 100) {
    tmilSec = 0;
    tsec++;
  }
  if (tsec == 60) {
    tsec = 0;
    tmin++;
  }

  min.innerText = tmin < 10 ? '0'+tmin : tmin;
  sec.innerText = tsec < 10 ? '0'+tsec : tsec;
  milSec.innerText = tmilSec < 10 ? '0'+tmilSec : tmilSec;

  if (!pause)
    tmilSec++
}

function TStart() {
  clearInterval(stopWatch)
  pause = false
  stopWatch = setInterval(manipulateTime, 10)
}

function TPause() {
  pause = true
}

function TReset() {
  clearInterval(stopWatch)

  min.innerText = 0
  sec.innerText = 0
  milSec.innerText = 0

  tmin = 0
  tsec = 0
  tmilSec = 0
  pause = false
}