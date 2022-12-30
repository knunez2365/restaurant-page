// 'use strict';

import { add } from 'lodash';

function divCreation(x, y, z = '', text = '') {
  let body = document.querySelector(x);
  let bodydiv = document.createElement(y);
  bodydiv.classList.add(z);
  bodydiv.textContent = `${text}`;
  body.appendChild(bodydiv);
}

divCreation('body', 'div', 'menu');
divCreation('body', 'div', 'info');
divCreation('body', 'div', 'bottom-contact');

divCreation('.menu', 'div', 'navbar');
divCreation('.menu', 'div', 'center');
divCreation('.bottom-contact', 'div', 'site');
divCreation('.bottom-contact', 'div', 'contact');
divCreation('.navbar', 'div', 'logo', 'Lorem Ipsum');

function addText(x, y, z) {
  let container = document.querySelector(x);
  const content = document.createElement(y);
  content.textContent = `${z}`;
  container.appendChild(content);
}

//nav
// ul creation
const logo = document.querySelector('.navbar');
const ul = document.createElement('ul');
logo.appendChild(ul);

addText('ul', 'li', 'Home');
addText('ul', 'li', 'About');
addText('ul', 'li', 'Contact Us');

// center div

addText('.center', 'h1', 'GIVE YOUR PROJECT A SOLID FOUNDATION');
addText('.center', 'button', 'contact us');

//info class

addText(
  '.info',
  'p',
  'EXCAVATION AND SITE DEVELOPMENT SERVICES IN WASHINGTON, DC, AND SURROUNDING AREAS'
);
addText(
  '.info',
  'p',
  'Whether you are building something new, upgrading a property, or starting over, B&D Excavating, Inc. ensures your project has the solid foundation it needs to succeed. We provide a range of excavation and site development services in Washington, DC, and the surrounding areas, including Northern Virginia, Maryland, and West Virginia. Reach out to our skilled team today to get your next project underway.'
);

//site class

addText('.site', 'h2', 'site name');
addText(
  '.site',
  'h3',
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur fugiat maiores id magni, modi, quaerat vitae. Consectetur`
);

// contact class

addText('.contact', 'h2', 'Contact');
addText('.contact', 'h3', `Call: +76 (094) 754 43 7I`);
addText('.contact', 'h3', `Hours: Mon-Fri 7am - 11pm EST`);
addText('.contact', 'h3', `Address: 817 N California Ave Chicago, IL 60622`);
