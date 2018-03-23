var body = d3.select("body");
var scroll = d3.select("#scroll-content");

body.on("wheel", function() {
    scroll.property("scrollTop", +scroll.property("scrollTop") + d3.event.deltaY)
});
body.on("scroll", function() {
    scroll.property("scrollTop", +scroll.property("scrollTop") + d3.event.deltaY)
});
