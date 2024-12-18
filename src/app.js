/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

window.onload = function() {
  //write your code here
  let domainNames = generateDomainNames(pronoun, adj, noun);
  console.log("Posibles nombres de dominio:");
  displayDomains(domainNames, "domain");
};

function generateDomainNames(pronouns, adjectives, nouns) {
  let domains = [];

  pronouns.forEach(p => {
    adjectives.forEach(a => {
      nouns.forEach(n => {
        domains.push(`${p}${a}${n}.com`);
      });
    });
  });

  return domains;
}

function displayDomains(domains, elementId) {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Elemento con id "${elementId}" no encontrado.`);
    return;
  }

  // Convertir el array en texto HTML con saltos de línea
  element.innerHTML = domains
    .map(domain => `<span>${domain}</span><br>`)
    .join("");
}
