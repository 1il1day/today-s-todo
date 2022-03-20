const h2 = document.querySelector("h2");

nowTime();

function nowTime () {
    const nowHour = new Date().getHours();
    const nowMinute = new Date().getMinutes();
    const nowSecond = new Date().getSeconds();
    h2.innerText = `지금은 ${nowHour<10? `0${nowHour}`:nowHour}시 ${nowMinute<10? `0${nowMinute}`:nowMinute}분 ${nowSecond<10? `0${nowSecond}`:nowSecond}초 입니다.`;
}

setInterval(nowTime, 1000);