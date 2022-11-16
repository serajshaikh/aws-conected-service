
abstract class Shape {
    private X!: number;
    private Y!: number;
    private color!: string;
    public constructor(source?: { X: number, Y: number, color: string }) {
        if (source) {
            this.X = source.X;
            this.Y = source.Y;
            this.color = source.color;
        }

    }


    abstract clone(): Shape;
}

class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(source: { X: number, Y: number, color: string, width: number, height: number }) {
        super(source);
        this.width = source.width;
        this.height = source.height;
    }
    clone(): Shape {
        return new Rectangle(this);
    }
}

class Circle extends Shape {
    radius: number;
    constructor(source: { X: number, Y: number, color: string, radius: number }) {
        super(source);
        this.radius = source.radius;
    }
    clone(): Shape {
        return new Circle(this);
    }
}

class Application {
    shape!: Shape[];
    constructor() {
        const circle: Circle = new Circle();
    }
}