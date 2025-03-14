function updateDraw(height){
    centerY = height / 2;

    unitCircle.attr("cy",centerY);

    line
        .attr("y1", centerY)
        .attr("y2", centerY - radius * Math.sin(Math.PI / 4));
    
    tanLine
    .attr("y1", centerY)
    .attr("y2", centerY - radius * Math.tan(Math.PI / 4));

    point.attr("cy", centerY - radius * Math.sin(Math.PI / 4));

    tanAxis.attr("y1", height - 50);

    yAxis.attr("y2", height - 50);

    xAxis
        .attr("y1", centerY)
        .attr("y2", centerY);
    
    upTri.attr(
        "points",
        `${centerX},${centerY - (height / 2 - 40)} ${centerX - 10},${
            centerY - (height / 2 - 50)
        } ${centerX + 10},${centerY - (height / 2 - 50)}`
    )

    rightTri.attr(
        "points",
        `${600},${centerY} ${/* 700 - 10 */ 590},${centerY - 10} ${590},${
            centerY + 10
        }`
    )

    leftTri.attr(
        "points",
        `${0},${centerY} ${10},${centerY - 10} ${10},${centerY + 10}`
    )

    downTri.attr(
        "points",
        `${centerX},${centerY + (height / 2 - 40)} ${centerX - 10},${
            centerY + (height / 2 - 50)
        } ${centerX + 10},${centerY + (height / 2 - 50)}`
    )

    xAxisText.attr("y", centerY + 40);

}