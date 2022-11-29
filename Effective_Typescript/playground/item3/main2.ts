class Square {
    constructor(public width: number) {}
};

class Rectangle extends Square {
    constructor(public width: number, public height: number) {
        super(width)
    }
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
        return shape.height * shape.width;
    } else {
        return shape.width * shape.width;
    }
}