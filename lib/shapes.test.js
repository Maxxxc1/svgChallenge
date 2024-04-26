const {Shape, Circle, Square, Triangle} = require("./shapes")

// Circle //
describe('Circle', () => {
    test('renders correctly', () => {
    
    const shape = new Circle();
    shape.setColor(this.color);
    expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="100" height="100%" width="100%" fill="${this.color}" />`);
});
});


// Square //
describe('Square', () => {
    test('renders correctly', () => {
    
    const shape = new Square();
    shape.setColor(this.color);
    expect(shape.render()).toEqual(`<rect x="50" width="200" height="200" fill="${this.color}" />`);
});
});


// Triangle //
describe('Triangle', () => {
    test('renders correctly', () => {
    
    const shape = new Triangle();
    shape.setColor(this.color);
    expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}" />`);
});
});
