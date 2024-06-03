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

for (const p in pronouns) {
  for (const a in adjs) {
    for (const n in nouns) {
      for (const e in exts) {
        const d = p + a + n + e;
        domains.push(d);
      }
    }
  }
}
