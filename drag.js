let correct = {
    one: 'Hello please cofee and milk',
    tow: 'Hello please milk and cofee'
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
    console.log(ev.target.innerText);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    let c = ev.target.childNodes
    console.log(c)
    let x = Array.from(c)
    console.log(x)
    if (x.length === 5) {
     console.log(x.join())
    }
}