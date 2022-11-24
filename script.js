// object literal
const friedrich = {
    name: "Friedrich",
    age: 27,
    "wrestle": function(){
        console.log("lets wrestle!")
    },
    job: "Frontend Developer"
}

// object constructor
function player(name, marker){
    this.name=name
    this.marker = marker
    this.attack = function(){
        alert("ATTACK!")
    }
}
// book object constructor
function bookconstr(title, author, pagenum, readstatus){
    this.title = title, 
    this.author = author, 
    this.pagenum = pagenum, 
    this.readstatus = readstatus,
    this.print = function(){
        return this.title + " " + this.author + "," + this.pagenum + " and also:" + readstatus
    }
}

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__:head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };
