//Переменные:
const interface = document.getElementById('interface');
const start_screen = document.getElementById('start-menu');
const basic_screen = document.getElementById('basic-menu');

isActivate = false;
isMenu = false;
let date = new Date(); 

//Инициализация:
updateTime();
setInterval(updateTime, 60000);

//Функции:
function OnPhone(){
    interface.classList.add('active');
    isActivate = true;
    ClockMenu();
}

function OffPhone(){
    interface.classList.remove('active');
    isActivate = false;
}

function OnOffButton(){
    if(isActivate){
        OffPhone();
    }
    else{
        OnPhone();
    }
}

function updateTime() {
    const timeElement = document.getElementById('time');
    const timeElement2 = document.getElementById('time2');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;

    if (timeElement) {
        timeElement.textContent = currentTime;
    }

    if(timeElement2){
        timeElement2.textContent = currentTime;
    }
}

function OpenMenu(){
    if(isMenu){
    }
    else{
        start_screen.classList.remove('visible');
        start_screen.classList.add('hidden');
        
        
        setTimeout(() => {
            start_screen.style.visibility = 'hidden';
            
            basic_screen.style.visibility = 'visible';
            
            setTimeout(() => {
                basic_screen.classList.remove('hidden');
                basic_screen.classList.add('visible');
            }, 50);
            
            isMenu = true;
        }, 200);
    }
}

function ClockMenu(){
    basic_screen.classList.remove('visible');
    basic_screen.classList.add('hidden');
    
    setTimeout(() => {
        basic_screen.style.visibility = 'hidden';
        start_screen.style.visibility = 'visible';
        
        setTimeout(() => {
            start_screen.classList.remove('hidden');
            start_screen.classList.add('visible');
        }, 50);
        
        isMenu = false;
    }, 200);
}