let burger = document.querySelector('.menu__icon');
let menu__body = document.querySelector('.menu__body');

burger.onclick = function () {
    menu__body.classList.toggle('active');
    burger.classList.toggle('active');
};

var info = document.querySelector('.information');
var cells = document.getElementsByTagName('td');
var closeDiv = document.querySelector('.closeDiv');
var tableBody = document.querySelector('.table__body');
var sticky = tableBody.offsetTop;

for (var i = 0; i < cells.length; i++) {
    if (cells[i].classList.value != '') {
        cells[i].addEventListener('click', selectDate);
        function selectDate() {
            let currentClass=this.className;
            if (this.classList.value === 'hatha_td') {
                info.classList.add('active');
                info.classList.add("sticky");
                info.classList.add('information_hatha');
                closeDiv.classList.add('active');
                info.textContent = 'Pasha a.k.a. Masho_Osho feat Finik a.k.a. DontSendNudes UpDownDog class!';
            } else {
                if (this.classList.value === 'chai_td') {
                    info.classList.add('active');
                    info.classList.add("sticky");
                    info.classList.add('information_chai');
                    closeDiv.classList.add('active');
                    info.textContent = 'Banana tea meating for VVIP friends';
                } else {
                    if (this.classList.value === 'chashi_td') {
                        info.classList.add('active');
                        info.classList.add("sticky");
                        info.classList.add('information_chashi');
                        closeDiv.classList.add('active');
                        info.textContent = "Flying far away under the Masho_Osho's standing bells";

                    } else {
                        if (this.classList.value === 'meditation_td') {
                            info.classList.add('active');
                            info.classList.add("sticky");
                            info.classList.add('information_meditation');
                            closeDiv.classList.add('active');
                            info.textContent = 'Meditation 5 hours long handstanding, God bless you!';
                        };
                    };
                };
            };
        };
    };
};
closeDiv.addEventListener('click', closeFunction);
function closeFunction(){
    info.classList.remove("sticky");
    info.classList.remove("active");
    info.classList.remove('information_hatha');
    info.classList.remove('information_chai');
    info.classList.remove('information_chashi');
    info.classList.remove('information_meditation');
    closeDiv.classList.remove('active');
};

window.onscroll = function () { stickyLabel() };

function stickyLabel() {
    if (window.pageYOffset < sticky) {
        info.classList.remove("sticky");
        info.classList.remove("active");
        closeDiv.classList.remove('active');
    };
};

