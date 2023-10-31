const fs =require("fs");
let text =fs.readFileSync("del.txt","utf-8");
console.log(text);  
text=text.replace("Naqi","Naqvi");
fs.writeFileSync("Ali.txt",text);