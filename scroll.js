var body = d3.select("body");
var scroll = d3.select("#scroll-content");
var win = d3.select(window)

body.on("wheel", adjustScrolling);

body.on("scroll", adjustScrolling);

window.addEventListener('scroll', adjustScrolling);

function adjustScrolling(){
  scroll.property("scrollTop", +scroll.property("scrollTop") + d3.event.deltaY)
}
