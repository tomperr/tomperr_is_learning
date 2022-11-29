function calculateArea(shape) {
    if (shape.kind == "rectangle") {
        return shape.width * shape.height;
    }
    else {
        return shape.width * shape.width;
    }
}
