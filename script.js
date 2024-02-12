const year = new Date().getFullYear();

const faqYear = document.getElementById('faqYear');
faqYear.innerHTML = "Are web developers in demand in " + year + "?";

const footerYear = document.getElementById('footer-year');
footerYear.innerHTML = "© " + year + " CodeTube, Inc. All rights reserved.";

const time = new Date().getHours();

const greet = time < 12 ? "Good Morning..." : time >= 12 && time < 16 ? "Good Afternoon..." : "Good Evening...";

const greeting = document.getElementById('greetings');
greeting.innerHTML = greet;