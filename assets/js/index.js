const tabs = document.getElementById("tabs"); //navigation tabs

//tabs names for navigation
const tabsContent = [
    { tabName: 'თავფურცელი', sectionName: 'slider' },
    { tabName: 'შესავალი', sectionName: 'introduction' },
    { tabName: 'სამი ფიგურა', sectionName: 'three' },
    { tabName: 'გაგრძელება', sectionName: 'continue' },
    { tabName: 'ეკოლოგია', sectionName: 'ecology' },
    { tabName: 'პატარა არსებები', sectionName: 'little' },
    { tabName: 'ვარსკვლავები', sectionName: 'stars' },
    { tabName: 'სიყვარული', sectionName: 'love' },
    { tabName: 'გალარეა', sectionName: 'galery' },
    { tabName: 'პროექტის შესახებ', sectionName: 'about' }
];

//adding all tabs in navigation
tabsContent.forEach(tab => {
    let li = document.createElement('li');

    li.classList.add(tab.sectionName);
    li.setAttribute('onclick', `showSec('${tab.sectionName}')`);
    li.innerHTML = tab.tabName;

    if (tab.sectionName == 'slider') {
        li.classList.add('active');
    }

    tabs.appendChild(li)
});

//function to hide and show sections
function showSec(section) {
    //auto close nav bar if its responsive
    closeNav();

    //change active tab
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`.${section}`).classList.add('active');

    //show section
    document.querySelector('.show').classList.remove('show');
    document.querySelector(`#${section}_Sec`).classList.add('show');
}

//show and hide navigation bar on responsive
function openNav() {
    tabs.classList.add('openedNav')
}

function closeNav() {
    tabs.classList.remove('openedNav')
}





let slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
    if (n > 0) {
        for (i of document.getElementsByClassName('mySlides')) {
            i.style.animationName = 'slide_right';
        }
    } else {
        for (i of document.getElementsByClassName('mySlides')) {
            i.style.animationName = 'slide_left';
        }
    }
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (n == slides.length) {
        document.getElementById("arrow-rigth").style.display = 'none';
    } else {
        document.getElementById("arrow-rigth").style.display = 'block';
    }

    if (n == 1) {
        document.getElementById("arrow-left").style.display = 'none';
    } else {
        document.getElementById("arrow-left").style.display = 'block';
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}