import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const html = fs.readFileSync("index.html", "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/i)?.[1];
assert.ok(script, "Inline app script is present");
new vm.Script(script, {filename:"index-inline.js"});
const sections = ["home","lesson","flash","games","stations","showcase","exit"];
for (const id of sections) assert.ok(html.includes('id="view-'+id+'"'), "View missing: "+id);
const games = ["match","detect","memory","order","quiz"];
for (const id of games) assert.ok(html.includes('id:"'+id+'"'), "Game missing: "+id);
for (const n of [284,285,286]) assert.ok(html.includes("n:"+n+",arab:"), "Verse missing: "+n);
assert.ok(html.includes('const cards=['), "Flashcards missing");
assert.ok(html.includes("localStorage"), "Offline progress store missing");
assert.ok(html.includes('id="posterPreview"'), "Showcase poster missing");
assert.ok(html.includes('id="ex3"'), "Exit ticket missing");
console.log("PASS: JS syntax, 7 views, 5 games, 3 ayat, flashcards, progress, showcase and exit ticket.");
