const tabs = document.getElementById("tabs"); //navigation tabs
const slide = document.querySelector(".mySlide"); //slide
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");

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
    let fromSec = document.querySelector('.show'); //sections that is shown
    fromSec.classList.remove('show');

    let toSec = document.querySelector(`.${section}_Sec`); //sections that should be shown
    toSec.classList.add('show');
}

// switch between slides
let slideIndex = 55;
showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n * 55;
    showSlides();
}

function showSlides() {
    if (slideIndex <= 0) {
        slideIndex = 0;
        arrowLeft.classList.add("hide");
    } else if (slideIndex > 100) {
        slideIndex = 100;
        arrowRight.classList.add("hide");
    } else {
        arrowLeft.classList.remove("hide");
        arrowRight.classList.remove("hide");
    }

    slide.style.left = `${slideIndex}%`;
    slide.style.transform = `translateX(-${slideIndex}%)`;
}

//show and hide navigation bar on responsive
function openNav() {
    tabs.classList.add('openedNav')
}

function closeNav() {
    tabs.classList.remove('openedNav')
}

//listen windows size on resize and load
['resize', 'load'].forEach(evt =>
    window.addEventListener(evt, sizeChange)
);

function sizeChange() {
    if (window.innerWidth > 890) {
        document.querySelector('main').classList.remove('responsive');
        document.querySelector('main').classList.add('desktop');
    } else {
        document.querySelector('main').classList.add('responsive');
        document.querySelector('main').classList.remove('desktop');
    }
}