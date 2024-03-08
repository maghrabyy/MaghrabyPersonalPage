//Projects Array
const projects = [];

//dom Elements
const rowElement = document.getElementById('row-element');
const hiddenCatBtns = document.getElementById('hidden-categories-filter');
const filterBtn = document.getElementById('filter-btn');
const allcatbtn = document.getElementById('all-category');
const flutterCatBtn = document.getElementById('flutter-category-btn');
const vanillaJsCatBtn = document.getElementById('vanillaJs-category-btn');
const webDesignCatBtn = document.getElementById('webdesigns-category-btn');
const reactAppCatBtn = document.getElementById('reactapp-category-btn');
const allcatbtnLg = document.getElementById('all-category-lg');
const flutterCatBtnLg = document.getElementById('flutter-category-btn-lg');
const vanillaJsCatBtnLg = document.getElementById('vanillaJs-category-btn-lg');
const webDesignCatBtnLg = document.getElementById('webdesigns-category-btn-lg');
const reactAppCatBtnLg = document.getElementById('reactapp-category-btn-lg');
const militaryServiceStatus = document.getElementById('militaryS_status');

//Image sources
const imgProjectsSrc = 'Assets/images/Projects/';
const imgToolsSrc = 'Assets/images/skills/';


//Categories
const portfolioCategories = {
    all: 'All Projects',
    flutter: 'Flutter App',
    vanillaJs: 'Vanilla JS',
    reactApp:'React App',
    webDesign: 'Web Design'
}
//Tools
const toolsUsed = {
    html: 'HTML5',
    css: 'CSS3',
    js: 'JavaScript',
    bootstrap: 'BootStrap 5',
    tailwindCSS:'TailwindCSS',
    flutter: 'Flutter',
    dart: 'Dart',
    firebase: 'Firebase',
    react: 'React',
    redux: 'Redux',
    ts:'TypeScript'
}

let chosenCategory = portfolioCategories.all;

if (militaryServiceStatus.textContent === 'Serving') {
    militaryServiceStatus.classList.add('text-danger');
}
else {
    militaryServiceStatus.classList.add('text-success');

}

const toolToImgSrc = function (tool) {
    if (tool === toolsUsed.html)
        return imgToolsSrc + 'html.png';
    else if (tool === toolsUsed.css)
        return imgToolsSrc + 'css.png';
    else if (tool === toolsUsed.bootstrap)
        return imgToolsSrc + 'bootstrap.png';
    else if (tool === toolsUsed.js)
        return imgToolsSrc + 'js.png';
    else if (tool === toolsUsed.ts)
        return imgToolsSrc + 'typescript.png';
    else if (tool === toolsUsed.react)
        return imgToolsSrc + 'physics.png';
    else if (tool === toolsUsed.redux)
        return imgToolsSrc + 'redux.svg';
    else if (tool === toolsUsed.flutter)
        return imgToolsSrc + 'flutter.png';
    else if (tool === toolsUsed.dart)
        return imgToolsSrc + 'dart.png';
    else if (tool === toolsUsed.firebase)
        return imgToolsSrc + 'firebase.png';
    else if (tool === toolsUsed.tailwindCSS)
        return imgToolsSrc + 'tailwindcss.svg';
}

const createCardUI = function (projctImgName, projectTitle, projectDescription, usedTools, githubURL, projectURL) {
    // Inside of Col Element
    const colElement = document.createElement('div');
    colElement.classList.add('col-lg-4', 'col-md-6', 'mb-3');
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'h-100');
    colElement.appendChild(cardElement);
    // Inside of card Element
    const imgElement = document.createElement('img');
    imgElement.src = `${imgProjectsSrc}${projctImgName}`;
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
    const usedToolsElement = document.createElement('div');
    usedToolsElement.classList.add('usedTools');
    const usedToolsTitleElement = document.createElement('p');
    usedToolsTitleElement.classList.add('text-start', 'fw-bold');
    usedToolsTitleElement.textContent = 'Tools used:';
    usedToolsElement.appendChild(usedToolsTitleElement);
    const usedToolsItemsElement = document.createElement('div');
    usedToolsItemsElement.classList.add('d-flex', 'gap-2', 'justify-content-center');
    usedToolsElement.appendChild(usedToolsItemsElement);
    usedTools.forEach(tool => {
        const toolImgElement = document.createElement('img');
        toolImgElement.src = toolToImgSrc(tool);
        toolImgElement.alt = tool;
        toolImgElement.classList.add('img-fluid', 'toolsImg');
        usedToolsItemsElement.appendChild(toolImgElement);
    });
    cardTextElement.appendChild(usedToolsElement);
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

const addProject = function (projectCategory, imgURL, projectTitle, projectDescription, usedTools, githubURL, projectURL) {
    const randIdNum = Math.floor(Math.random() * 100000000);
    const projectData = {
        projectID: randIdNum,
        projectCategory,
        imgURL,
        projectTitle,
        projectDescription,
        usedTools,
        githubURL,
        projectURL,
    }
    projects.push(projectData);
}

const filterProjects = function (categoryName) {
    const filteredProjects = projects.filter(project => project.projectCategory === categoryName);
    return filteredProjects;
}

const renderUI = function () {
    rowElement.innerHTML = '';
    if (chosenCategory !== portfolioCategories.all) {
        filterProjects(chosenCategory).forEach(project => createCardUI(project.imgURL, project.projectTitle, project.projectDescription, project.usedTools, project.githubURL, project.projectURL));
    }
    else {
        projects.forEach(project => createCardUI(project.imgURL, project.projectTitle, project.projectDescription, project.usedTools, project.githubURL, project.projectURL));
    }
}

//Project initilization

addProject(portfolioCategories.flutter, `pocketMechanic.png`, 'Pocket Mechanic',
    "A cross-platform mobile application where the user can choose between a variety of vehicle maintenance services. such as: Requesting a mechanic to do a checkup and perform their service on spot, viewing the nearest available mechanic and book a reservation date with, or the nearest available tow-truck driver around the user's location. In addition to,a section where the user can purchase spare-parts to their vehicle."
    , [toolsUsed.flutter, toolsUsed.dart, toolsUsed.firebase], 'https://github.com/maghrabyy/PocketMechnicApp');

addProject(portfolioCategories.vanillaJs, `maghUniverse.png`, 'Maghh Universe',
    "An object oriented web application where you can choose to be hero, villian, or civil and you can add more characters of these types. The hero's role is to protect and heal the civil from the villian's attack and to attack the villain. while the villain can choose to attack the hero or the civil."
    , [toolsUsed.html, toolsUsed.css, toolsUsed.bootstrap, toolsUsed.js], 'https://github.com/maghrabyy/maghhUniverseWeb',
    'https://maghrabyy.github.io/maghhUniverseWeb/');

addProject(portfolioCategories.vanillaJs, `CharacterCreator.png`, 'Character Creator',
    "A simple web application where you can input the required data to create a character with a random avatar image. Including the search feature where you can search for any characters by inputting any information needed."
    , [toolsUsed.html, toolsUsed.css, toolsUsed.bootstrap, toolsUsed.js], 'https://github.com/maghrabyy/characterCreator',
    'https://maghrabyy.github.io/characterCreator/');

addProject(portfolioCategories.vanillaJs, `basicEcommerce.png`, 'Basic Ecommerce',
    "A basic ecommerce website developed using Vanilla JS and bootstrap with a shopping cart and categorized products ecommerce features."
    , [toolsUsed.html, toolsUsed.css, toolsUsed.bootstrap, toolsUsed.js], 'https://github.com/maghrabyy/Basic_Ecommerce',
    'https://maghrabyy.github.io/Basic_Ecommerce/');

addProject(portfolioCategories.webDesign, `designOne.png`, 'Web Design #1',
    "The first responsive bootstrap design with landing page."
    , [toolsUsed.html, toolsUsed.css, toolsUsed.bootstrap], 'https://github.com/maghrabyy/design-One',
    'https://maghrabyy.github.io/design-One/');

addProject(portfolioCategories.webDesign, `designTwo.png`, 'Web Design #2',
    "The second responsive bootstrap design."
    , [toolsUsed.html, toolsUsed.css, toolsUsed.bootstrap], 'https://github.com/maghrabyy/design-Two',
    'https://maghrabyy.github.io/design-Two/');

addProject(portfolioCategories.webDesign, `designThree.png`, 'Web Design #3',
    "The third bootstrap design using a carousel slide show."
    , [toolsUsed.html, toolsUsed.css, toolsUsed.bootstrap], 'https://github.com/maghrabyy/design-Three',
    'https://maghrabyy.github.io/design-Three/');

addProject(portfolioCategories.reactApp, `stickyNoteReactApp.png`, 'Sticky Note',
    "Simple Sticky note React app styled using TailwindCSS."
    , [toolsUsed.react,toolsUsed.tailwindCSS], 'https://github.com/maghrabyy/sticky-notes',
    'https://maghrabyy.github.io/sticky-notes/');

addProject(portfolioCategories.reactApp, `ecommerceDashboard.png`, 'ECommerce Dashboard',
    "an ecommerce business management system dashboard that has various functionalities including: Inventory management system, Order management system, and Accounting system."
    , [toolsUsed.react,toolsUsed.tailwindCSS], 'https://github.com/maghrabyy/eCommerce-Platform',
    'https://ecommerce-platform-alpha.vercel.app/');

addProject(portfolioCategories.reactApp, `pixelArcade.png`, 'Pixel Arcade',
    "Classic games arcade games ReactJs based web application."
    , [toolsUsed.react,toolsUsed.ts,toolsUsed.tailwindCSS], 'https://github.com/maghrabyy/pixel-arcade',
    'https://pixel-arcade-zeta.vercel.app/');

renderUI();

// Buttons handlers
const filterBtnHandler = function () {
    if (hiddenCatBtns.classList.contains('d-none')) {
        hiddenCatBtns.classList.replace('d-none', 'd-flex');
    }
    else {
        hiddenCatBtns.classList.replace('d-flex', 'd-none');
    }
}

filterBtn.addEventListener('click', filterBtnHandler);


allcatbtn.addEventListener('click', () => {
    chosenCategory = portfolioCategories.all;
    document.querySelectorAll('.hiddenCategories li').forEach(node => node.classList.remove('active'));
    allcatbtn.classList.add('active');
    renderUI();
})

flutterCatBtn.addEventListener('click', () => {
    chosenCategory = portfolioCategories.flutter;
    document.querySelectorAll('.hiddenCategories li').forEach(node => node.classList.remove('active'));
    flutterCatBtn.classList.add('active');
    renderUI();
})

vanillaJsCatBtn.addEventListener('click', () => {
    chosenCategory = portfolioCategories.vanillaJs;
    document.querySelectorAll('.hiddenCategories li').forEach(node => node.classList.remove('active'));
    vanillaJsCatBtn.classList.add('active');
    renderUI();
})

reactAppCatBtn.addEventListener('click', () => {
    chosenCategory = portfolioCategories.reactApp;
    document.querySelectorAll('.hiddenCategories li').forEach(node => node.classList.remove('active'));
    reactAppCatBtn.classList.add('active');
    renderUI();
})

webDesignCatBtn.addEventListener('click', () => {
    chosenCategory = portfolioCategories.webDesign;
    document.querySelectorAll('.hiddenCategories li').forEach(node => node.classList.remove('active'));
    webDesignCatBtn.classList.add('active');
    renderUI();
})

allcatbtnLg.addEventListener('click', () => {
    chosenCategory = portfolioCategories.all;
    document.querySelectorAll('.shownCategories li').forEach(node => node.classList.remove('active'));
    allcatbtnLg.classList.add('active');
    renderUI();
})

flutterCatBtnLg.addEventListener('click', () => {
    chosenCategory = portfolioCategories.flutter;
    document.querySelectorAll('.shownCategories li').forEach(node => node.classList.remove('active'));
    flutterCatBtnLg.classList.add('active');
    renderUI();
})

vanillaJsCatBtnLg.addEventListener('click', () => {
    chosenCategory = portfolioCategories.vanillaJs;
    document.querySelectorAll('.shownCategories li').forEach(node => node.classList.remove('active'));
    vanillaJsCatBtnLg.classList.add('active');
    renderUI();
})

reactAppCatBtnLg.addEventListener('click', () => {
    chosenCategory = portfolioCategories.reactApp;
    document.querySelectorAll('.shownCategories li').forEach(node => node.classList.remove('active'));
    reactAppCatBtnLg.classList.add('active');
    renderUI();
})

webDesignCatBtnLg.addEventListener('click', () => {
    chosenCategory = portfolioCategories.webDesign;
    document.querySelectorAll('.shownCategories li').forEach(node => node.classList.remove('active'));
    webDesignCatBtnLg.classList.add('active');
    renderUI();
})
