let elements = document.querySelectorAll(".code");
let i = elements.length;

while(i--) {
    let inner = elements[i].innerHTML;
    console.log(inner);
    inner = repl_color(inner, "event", "#ff7777");

    inner = repl_color(inner, "player", "#ff77ff");
    inner = repl_color(inner, "entity", "#ff77ff");
    inner = repl_color(inner, "plot", "#ff77ff");
    elements[i].innerHTML = inner;
};

function repl_color(text, r, color) {
    console.log(text);
    return text.replace(new RegExp(`${r}`, "g"), `<span style='color:${color}'>${r}</span>`);
}