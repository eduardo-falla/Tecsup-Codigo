var drag = d3.behavior.drag()
//.origin(function (d) { return d; })
.on("dragstart", dragstarted)
.on("drag", dragged)
.on("dragend", dragended),

data = {
"nodes": [
    { "id": "0", "x": 50, "y": 50 },
    { "id": "1", "x": 100, "y": 50 },
    { "id": "2", "x": 50, "y": 100 },
    { "id": "3", "x": 100, "y": 100 }
],
"edges": [
    { "id": "0", "source": "0", "target": "1" },
    { "id": "1", "source": "2", "target": "3" }
]
},

log = d3.select("body").append("div")
.style({ "background-color": "1px solid #ccc" })
.text("waiting..."),

svg = d3.select("body")
.append("svg:svg")
.attr("width", 200)
.attr("height", 200)
.style("border", "solid")
.call(drag)
.append("g"),

nodes = data.nodes,

links = data.edges;

for (var i in data.edges) {
for (var j in nodes) {
if (nodes[j].id == data.edges[i].source) {
data.edges[i].source = nodes[j];
} else if (nodes[j].id == data.edges[i].target) {
data.edges[i].target = nodes[j];
}
}
}

var lines = svg.selectAll(".line")
.data(links)
.enter()
.append("line")
.attr("x1", function (d) { return d.source.x })
.attr("y1", function (d) { return d.source.y })
.attr("x2", function (d) { return d.target.x })
.attr("y2", function (d) { return d.target.y })
.attr("stroke-width", "4")
.style("stroke", "#000000");

var circles = svg.selectAll("circle.nodes")
.data(nodes)
.enter()
.append("svg:circle")
.attr("cx", function (d) { return d.x; })
.attr("cy", function (d) { return d.y; })
.attr("r", "8px")
.attr("fill", "#FF0000");


function dragstarted(d) {
d3.event.sourceEvent.stopPropagation();
d3.event.sourceEvent.preventDefault;
console.log("start")
log.text("start")
}

function dragged(e) {
var t = d3.transform(svg.attr("transform")).translate;
svg.attr("transform", "translate(" + [t[0] + d3.event.dx, t[1] + d3.event.dy] + ")")
console.log("drag: " + d3.transform(svg.attr("transform")).translate);
log.text("drag: " + d3.transform(svg.attr("transform")).translate)
}

function dragended(d) {
console.log("end")
log.text("end")
}