
let ad = prompt("İsminizi Giriniz");

const info = document.querySelector("#info");
const isim = document.querySelector("#ad");



    setInterval(function(){
    
        const time = document.querySelector("#time");
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let day = date.getDay();
        
        if(hour<10){
            hour = "0" + hour;
        }
        if(minute<10){
            minute = "0" + minute;
        }
        if(second<10){
            second = "0" + second;
        }
        switch(day){
            case 0: day = "Pazar";
            break;
            case 1: day = "Pazartesi";
            break;
            case 2: day = "Salı";
            break;
            case 3: day = "Çarşamba";
            break;
            case 4: day = "Perşembe";
            break;
            case 5: day = "Cuma";
            break;
            case 6: day = "Cumartesi";
            break;
        }
    
        time.textContent = `${hour}:${minute}:${second}  ${day}`;
    });






isim.innerHTML = `${ad}!
`;

//tarihinde Kodluyoruz Frontend Web Development Patikası'nın Javascript bölümü 1. Ödevindesiniz.