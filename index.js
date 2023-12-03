// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


console.log(cats);

function destructivelyAppendCat(name) {
    cats.push(name);
    console.log(cats);
  }

  function destructivelyPrependCat(name) {
    cats.unshift(name);
    console.log(cats);
  }


  function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    console.log(cats);
  }

  function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    console.log(cats);
  }

  function appendCat(name) {
    const newCats = [...cats, name];
    console.log(newCats);
    return newCats;
  }

  function prependCat(name) {
    const newCats = [name, ...cats];
    console.log(newCats);
    return newCats;
  }

  function removeLastCat() {
    const newCats = [...cats];
    newCats.pop();
    console.log(newCats);
    return newCats;
  }

  function removeFirstCat() {
    const newCats = [...cats];
    newCats.shift();
    console.log(newCats);
    return newCats;
  }