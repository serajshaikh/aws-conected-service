// Adoptor Design pattern
class Pen {
    write(str: string): void{
        console.log(str);
    };
}
class AssignmentWork {
    private p!: Pen;
    public getP(): Pen {
        return this.p;
    }
    public setP(p: Pen) {
        this.p = p;
    }
    writeAssignment(str: string): void {
        console.log(str);
    }
}

class PilotPen {
    public mark(str: string): void {
        console.log(str);
    }
}

class PenAdapter extends Pen {

    pp!: PilotPen;
    constructor(pp: PilotPen) {
        super();
        this.pp = pp;

    }
    

}

/* 
// that's not possible
const pp:PilotPen=new PilotPen();

const aw:AssignmentWork=new AssignmentWork();
aw.setP(pp);
aw.writeAssignment("I am bit tired to write on Assignment"); */

/* const pp:PilotPen=new PilotPen();
const p:pen = new PenAdapter(pp);
const aw: AssignmentWork = new AssignmentWork();
aw.setP(p);
aw.writeAssignment("I am bit tired to write on Assignment"); */

export {Pen, PenAdapter, PilotPen, AssignmentWork}