const print = (a)=>{
    console.info(a)
};
let text = "hello ";
let phrase =[];

for (let i = 0; i < text.length; i++) {
    if(text[i] === " "){
        phrase.push("\n"+"world")
    }
    else { i%2 !== 1 ? phrase.push(text[i]) : phrase.push(text[i].toUpperCase())};
    
}
let mix = phrase.join('').toString();
print(mix);
