const tabs = document.getElementById("tabs"); //navigation tabs
const slide = document.querySelector(".mySlide"); //slide

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

// switch between slides
let slideIndex = 55;
showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n * 55;
    showSlides();
}

function showSlides() {
    if (slideIndex < 0) {
        slideIndex = 0;
    } else if (slideIndex > 100) {
        slideIndex = 100;
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