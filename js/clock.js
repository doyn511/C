const clock = document.querySelector("h1#clock");

function getClock(){
  const date = new Date();
  //padStart -> string의 길이가 원하는 길이가 아니라면 
  //string의 시작을 "0"으로 채워 원하는 글자 수를 만들어줌
  //padEnd도 존재함
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
//setInterval을 이용하면 1000ms마다 getClock 함수를 실행시켜줌
setInterval(getClock, 1000); 