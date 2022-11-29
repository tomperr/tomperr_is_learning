interface Square {
    kind: 'square';
    width: number;
}
interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape.kind == "rectangle") {
        return shape.width * shape.height;
    } else {
        return shape.width * shape.width;
    }
}