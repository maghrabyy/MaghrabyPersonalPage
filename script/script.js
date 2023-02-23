const projects = [];

const rowElement = document.getElementById('row-element');
const filterBtn = document.getElementById('filter-btn');
const allcatbtn = document.getElementById('all-category');
const flutterCatBtn = document.getElementById('flutter-category-btn');
const webAppCatBtn = document.getElementById('webapp-category-btn');
const webDesignCatBtn = document.getElementById('webdesigns-category-btn');
const allcatbtnLg = document.getElementById('all-category-lg');
const flutterCatBtnLg = document.getElementById('flutter-category-btn-lg');
const webAppCatBtnLg = document.getElementById('webapp-category-btn-lg');
const webDesignCatBtnLg = document.getElementById('webdesigns-category-btn-lg');

const imgSrc = 'Assets/images/Projects/';

const ALL_CAT = 'All Projects';
const FLUTTER_CAT = 'Flutter App';
const WEB_APP_CAT = 'Web App';
const WEB_DESIGN_CAT = 'Web Design';

let chosenCategory = ALL_CAT;

const createCardUI = function (projctImgName, projectTitle, projectDescription, githubURL, projectURL) {
    // Inside of Col Element
    const colElement = document.createElement('div');
    colElement.classList.add('col-lg-4');
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'h-100');
    colElement.appendChild(cardElement);
    // Inside of card Element
    const imgElement = document.createElement('img');
    imgElement.src = `${imgSrc}${projctImgName}`;
    imgElement.alt = projectTitle;
    imgElement.classList.add('card-img-top', 'img-fluid');
    const cardHeaderElement = document.createElement('div');
    cardHeaderElement.classList.add('card-header');
    cardHeaderElement.innerHTML = `<h4 class="fw-bold">${projectTitle}</h4>`;
    const cardBodyElement = document.createElement('div');
    cardBodyElement.classList.add('card-body');
    cardElement.append(imgElement, cardHeaderElement, cardBodyElement);
    // Inside of body Element
    const cardTextElement = document.createElement('div');
    cardTextElement.classList.add('card-text');
    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('text-start');
    descriptionElement.textContent = projectDescription;
    cardTextElement.appendChild(descriptionElement);
    cardBodyElement.appendChild(cardTextElement);
    // inside of card footer element
    const cardFooterElement = document.createElement('div');
    cardFooterElement.classList.add('card-footer', 'd-flex', 'gap-3', 'justify-content-center');
    const githubURLElement = document.createElement('a');
    githubURLElement.href = githubURL;
    githubURLElement.target = '_blank';
    githubURLElement.innerHTML = '<i class="fa-brands fa-github fa-2x github"></i>';
    cardFooterElement.appendChild(githubURLElement);
    if (projectURL) {
        const projectURLElement = document.createElement('a');
        projectURLElement.href = projectURL;
        projectURLElement.target = '_blank';
        projectURLElement.innerHTML = '<i class="fa-solid fa-link fa-2x"></i>';
        cardFooterElement.appendChild(projectURLElement);
    }
    cardElement.appendChild(cardFooterElement);
    rowElement.appendChild(colElement);
}

const addProject = function (projectCategory, imgURL, projectTitle, projectDescription, githubURL, projectURL) {
    const randIdNum = Math.floor(Math.random() * 100000000);
    const projectData = {
        projectID: randIdNum,
        projectCategory,
        imgURL,
        projectTitle,
        projectDescription,
        githubURL,
        projectURL,
    }
    projects.push(projectData);
    createCardUI(imgURL, projectTitle, projectDescription, githubURL, projectURL)
}

const filterProjects = function (categoryName) {
    const filteredProjects = projects.filter(project => project.projectCategory === categoryName);
    return filteredProjects;
}

const renderUI = function () {
    rowElement.innerHTML = '';
    if (chosenCategory !== ALL_CAT) {
        filterProjects(chosenCategory).forEach(project => createCardUI(project.imgURL, project.projectTitle, project.projectDescription, project.githubURL, project.projectURL));
    }
    else {
        projects.forEach(project => createCardUI(project.imgURL, project.projectTitle, project.projectDescription, project.githubURL, project.projectURL));
    }
}

addProject(FLUTTER_CAT, `pocketMechanic.png`, 'Pocket Mechanic',
    "A cross-platform mobile application where the user can choose between a variety of vehicle maintenance services. such as: Requesting a mechanic to do a checkup and perform their service on spot, viewing the nearest available mechanic and book a reservation date with, or the nearest available tow-truck driver around the user's location. In addition to,a section where the user can purchase spare-parts to their vehicle."
    , 'https://github.com/maghrabyy/PocketMechnicApp');

addProject(WEB_APP_CAT, `maghUniverse.png`, 'Maghh Universe',
    "An object oriented web application where you can choose to be hero, villian, or civil and you can add more characters of these types. The hero's role is to protect and heal the civil from the villian's attack and to attack the villain. while the villain can choose to attack the hero or the civil."
    , 'https://github.com/maghrabyy/maghhUniverseWeb',
    'https://maghrabyy.github.io/maghhUniverseWeb/');

addProject(WEB_DESIGN_CAT, `designThree.png`, 'Web Design #3',
    "The third bootstrap design using a carousel slide show."
    , 'https://github.com/maghrabyy/design-Three',
    'https://maghrabyy.github.io/design-Three/');


const filterBtnHandler = function () {
    const hiddenCat = document.getElementById('hidden-categories-filter');
    if (hiddenCat.classList.contains('d-none')) {
        hiddenCat.classList.replace('d-none', 'd-flex');
    }
    else {
        hiddenCat.classList.replace('d-flex', 'd-none');
    }
}

filterBtn.addEventListener('click', filterBtnHandler);


allcatbtn.addEventListener('click', () => {
    chosenCategory = ALL_CAT;
    renderUI();
})

flutterCatBtn.addEventListener('click', () => {
    chosenCategory = FLUTTER_CAT;
    renderUI();
})

webAppCatBtn.addEventListener('click', () => {
    chosenCategory = WEB_APP_CAT;
    renderUI();
})

webDesignCatBtn.addEventListener('click', () => {
    chosenCategory = WEB_DESIGN_CAT;
    renderUI();
})

allcatbtnLg.addEventListener('click', () => {
    chosenCategory = ALL_CAT;
    renderUI();
})

flutterCatBtnLg.addEventListener('click', () => {
    chosenCategory = FLUTTER_CAT;
    renderUI();
})

webAppCatBtnLg.addEventListener('click', () => {
    chosenCategory = WEB_APP_CAT;
    renderUI();
})

webDesignCatBtnLg.addEventListener('click', () => {
    chosenCategory = WEB_DESIGN_CAT;
    renderUI();
})
