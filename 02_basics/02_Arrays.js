const marvel_heros = ["Spiderman","thor","Ironman"];
const dc_heros = ["Batman","Superman","Joker"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

//spread
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

