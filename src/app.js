/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const pronouns = ["the", "our"];
const adjs = ["great", "big"];
const nouns = ["jogger", "racoon"];
const exts = [".com", ".net", ".us"];
const domains = [];

for (const p of pronouns) {
  for (const a of adjs) {
    for (const n of nouns) {
      for (const e of exts) {
        const d = p + a + n + e;
        domains.push(d);
      }
    }
  }
}
console.log(domains);

const domNameList = domains
  .map((element, positon, array) => `<li>${element}</li>`)
  .join("");
document.querySelector("p").innerHTML = domNameList;
