const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// lets do our navigation!
const nav_a = document.querySelectorAll("nav a");
const navItemKeys = Object.keys(siteContent.nav).filter(x => x.includes("nav"));

nav_a.forEach(function(item, index){
  item.textContent = siteContent.nav[navItemKeys[index]];
});

//lets get the cta set uppp
const ctaItems = Object.keys(siteContent.cta);
//we're gonna iterate over the keys because the keys will help us select the elements we want :D
ctaItems.forEach(function(item){
  if (item.includes("img")){
    const ctaElement = document.querySelector(`.cta img`);
    ctaElement.src = siteContent.cta[item];
  } else {
    const ctaElement = document.querySelector(`.cta ${item}`);
    ctaElement.textContent = siteContent.cta[item];
  }
});


//main-content now. lets break it down one piece at a time
const h4s = document.querySelectorAll(".main-content h4");
const paras = document.querySelectorAll(".main-content p");
//i'm sure there is a way to put these together into heading/content pairs
// but idk this works and that might overcomplicate it
const h4Keys = Object.keys(siteContent["main-content"]).filter(x => x.includes("h4"));
const paraKeys = Object.keys(siteContent["main-content"]).filter(x => x.includes("content"));

// im lowkey proud of this
h4s.forEach(function(h4Element, index){
  //we're gonna take advantage that h4 and para are the same length
  // and have corresponding indices/content and do both in one go
  h4Element.textContent = siteContent["main-content"][h4Keys[index]];
  paras[index].textContent = siteContent["main-content"][paraKeys[index]];
});

//always gotta be an oddball
const mainImg = document.querySelector(".main-content img");
mainImg.src = siteContent["main-content"]["middle-img-src"];

//lets get a contact in hur
const contacts = document.querySelector(".contact h4");
contacts.textContent = siteContent.contact["contact-h4"];

const conP = document.querySelectorAll(".contact p");
const conPKeys = Object.keys(siteContent["contact"]).filter(x => !x.includes("h4"));
conP.forEach(function(element, index){
  element.textContent = siteContent.contact[conPKeys[index]];
});

//finish it off with the footer
const copy = document.querySelector("footer p");
copy.textContent = siteContent.footer.copyright;

//lets do task 3
const newAnchor1 = document.createElement("a");
newAnchor1.href = "#";
newAnchor1.textContent = "Careers"

const newAnchor2 = document.createElement("a");
newAnchor2.href = "#";
newAnchor2.textContent = "Partners"

const navigation = document.querySelector("nav");
navigation.appendChild(newAnchor1);
navigation.appendChild(newAnchor2);

//changing color here to include all anchors
const navigation_a = document.querySelectorAll("nav a");
navigation_a.forEach(item => item.style.color = "green");

//stretchign out down here.
h4s.forEach(h4 => {
  h4.style.color = "green"
  h4.style.fontSize = "2rem"
});

paras.forEach(p => p.style.lineHeight = "1.4rem")