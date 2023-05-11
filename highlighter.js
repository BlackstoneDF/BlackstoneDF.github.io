let elements = document.querySelectorAll(".code");
let i = elements.length;

while(i--) {
    let inner = elements[i].innerHTML;
    console.log(inner);
    inner = inner.replace(/event/g, "<span style='color:red'>event</span>");
    elements[i].innerHTML = inner;
};