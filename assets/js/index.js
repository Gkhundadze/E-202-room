//tabs names for navigation
const tabsContent = [
    { tabName: 'თავფურცელი', sectionName: 'slider' },
    { tabName: 'შესავალი', sectionName: 'Sesavali' },
    { tabName: 'სამი ფიგურა', sectionName: 'sami_figura' },
    { tabName: 'გაგრძელება', sectionName: 'gagrZeleba' },
    { tabName: 'ეკოლოგია', sectionName: 'ekologia' },
    { tabName: 'პატარა არსებები', sectionName: 'patara_arsebebi' },
    { tabName: 'ვარსკვლავები', sectionName: 'varskvlavebi' },
    { tabName: 'სიყვარული', sectionName: 'siyvaruli' },
    { tabName: 'გალარეა', sectionName: 'galerea' },
    { tabName: 'პროექტის შესახებ', sectionName: 'about' }
];

//adding all tabs in navigation
const tabs = document.getElementById("tabs");
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
    document.querySelector(`.active`).classList.remove('active');
    document.querySelector(`.${section}`).classList.add('active');

    //show section
    document.querySelector(`.show`).classList.remove('show');
    document.querySelector(`#${section}_Sec`).classList.add('show');
}

//show and hide navigation bar on responsive
function openNav() {
    document.getElementById("tabs").style.width = "250px";
}

function closeNav() {
    document.getElementById("tabs").style.width = "0";
}