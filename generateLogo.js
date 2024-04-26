const Circle = require("./examples/circle")
const Square = require("./examples/square")
const Triangle = require("./examples/triangle")

function generateLogo(data) {
    let shape = undefined
    if(data.shape === 'Circle') {
        shape = new Circle(data.shapeColor, data.text, date.textColor)
    }else if (data.shape === 'Square') {
        shape = new Square(data.shapeColor, data.text, date.textColor)
    } else {
        shape = new Triangle(data.shapeColor, data.text, date.textColor)
    }
    return shape.render();
}
module.exports = generateLogo;
