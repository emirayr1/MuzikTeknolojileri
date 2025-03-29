(function () {
    const margin = { top: 20, right: 30, bottom: 30, left: 40 },
        width = 800 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    const svg = d3
        .select("#aniGraph")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Sabit konum verisi (30 saniyelik)
    const data = [
        { time: 0, position: 0 },
        { time: 1, position: 5 },
        { time: 2, position: 10 },
        { time: 3, position: 15 },
        { time: 4, position: 30 },
        { time: 5, position: 40 },
        { time: 6, position: 70 },
        { time: 7, position: 80 },
        { time: 8, position: 90 },
        { time: 9, position: 95 },
        { time: 10, position: 100 },
    ];

    const x = d3.scaleLinear().domain([0, 10]).range([0, width]);
    const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);

    const line = d3
        .line()
        .x((d) => x(d.time))
        .y((d) => y(d.position))
        .curve(d3.curveMonotoneX);

    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 2)
        .attr("d", line);

    // X ve Y eksenlerini ekleyelim
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    svg.append("g")
        .call(d3.axisLeft(y));

    // Başlangıçta iki sabit nokta seçelim
    let point1 = { x: x(10), y: y(data[10].position) };
    let point2 = { x: x(5), y: y(data[5].position) };

    const circle1 = svg
        .append("circle")
        .attr("cx", point1.x)
        .attr("cy", point1.y)
        .attr("r", 6)
        .attr("fill", "red");
    
    const dashLineSecond = svg.append("line")
        .attr("x1", point1.x)
        .attr("y1", point1.y)
        .attr("x2", point1.x)
        .attr("y2", height)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("opacity", 0.3)
        .lower()
        .attr("stroke-dasharray", "5,5");   

    const dashLineFirst = svg.append("line")
        .attr("x1", point2.x)
        .attr("y1", point2.y)
        .attr("x2", point2.x)
        .attr("y2", height)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("opacity", 0.3)
        .lower()
        .attr("stroke-dasharray", "5,5");   

    const dashLineSecondX = svg.append("line")
        .attr("x1", point1.x)
        .attr("y1", point1.y)
        .attr("x2", 0)
        .attr("y2", point1.y)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("opacity", 0.3)
        .lower()
        .attr("stroke-dasharray", "5,5");   

    const dashLineFirstX = svg.append("line")
        .attr("x1", point2.x)
        .attr("y1", point2.y)
        .attr("x2", 0)
        .attr("y2", point2.y)
        .attr("stroke", "black")
        .attr("opacity", 0.3)
        .attr("stroke-width", 2)
        .lower()
        .attr("stroke-dasharray", "5,5");   

    const circle2 = svg
        .append("circle")
        .attr("cx", point2.x)
        .attr("cy", point2.y)
        .attr("r", 6)
        .attr("fill", "red");



     // Butona tıklanınca noktaları ve dashline'ları 6. saniyeye hareket ettirme
     document.getElementById("yaklastir-btn").addEventListener("click", function() {
        function moveAlongPath(circle, lineV, lineH, fromIndex, toIndex) {
            const interpolateX = d3.scaleLinear()
                .domain([0, 1])
                .range([x(data[fromIndex].time), x(data[toIndex].time)]);
            
            const interpolateY = d3.scaleLinear()
                .domain([0, 1])
                .range([y(data[fromIndex].position), y(data[toIndex].position)]);

            circle.transition()
                .duration(2000)
                .attrTween("cx", function() {
                    return function(t) { return interpolateX(t); };
                })
                .attrTween("cy", function() {
                    return function(t) { return interpolateY(t); };
                });
            
            lineV.transition()
                .duration(2000)
                .attrTween("x1", function() {
                    return function(t) { return interpolateX(t); };
                })
                .attrTween("x2", function() {
                    return function(t) { return interpolateX(t); };
                })                
                .attrTween("y1", function() {
                    return function(t) { return interpolateY(t); };
                });
            
            lineH.transition()
                .duration(2000)
                .attrTween("y1", function() {
                    return function(t) { return interpolateY(t); };
                })
                .attrTween("y2", function() {
                    return function(t) { return interpolateY(t); };
                })
                .attrTween("x1", function() {
                    return function(t) { return interpolateX(t); };
                });
        }

        moveAlongPath(circle1, dashLineSecond, dashLineSecondX, 10, 6);
        moveAlongPath(circle2, dashLineFirst, dashLineFirstX, 5, 6);
    });
})();