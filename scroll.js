var body = d3.select("body");
var scroll = d3.select("#scroll-content");
var win = d3.select(window)

body.on("wheel", function() {
    scroll.property("scrollTop", +scroll.property("scrollTop") + d3.event.deltaY)
});

win.on("scroll", function() {
    scroll.property("scrollTop", +scroll.property("scrollTop") + d3.event.deltaY)
});
