let fullName = prompt("Adınızı Giriniz:");
let e = document.querySelector("#myName");

if(fullName){
    e.innerHTML += `${fullName}`;
} else {
    // fullName = prompt("Lütfen isim alanını boş geçmeyiniz");
    // e.innerHTML += `${fullName}`;
    alert("Lütfen isim kısmını boş bırakmayınız");
    location.reload();
}


let days = ["Pazar", "Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

function clockFunction () {
    let dateTime = new Date();
    let day = days[dateTime.getDay()];
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML = `${hrs} : ${min} : ${sec} ${day}`
}

setInterval(clockFunction, 1000);

