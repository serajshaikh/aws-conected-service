type dimension = {
    height: number
    width: number
    depth: number
}
interface IChair {
    name: string
    height: number
    width: number
    depth: number

    getDimensions(): dimension
}
class Chair implements IChair {
    name = ''
    height = 0
    width = 0
    depth = 0

    getDimensions(): dimension {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        }
    }
}
class SmallChair extends Chair {
    constructor() {
        super()
        this.name = 'SmallChair'
        this.height = 40
        this.width = 40
        this.depth = 40
    }
}
class MediumChair extends Chair {
    constructor() {
        super()
        this.name = 'MediumChair'
        this.height = 60
        this.width = 60
        this.depth = 60
    }
}

class BigChair extends Chair {
    constructor() {
        super()
        this.name = 'BigChair'
        this.height = 80
        this.width = 80
        this.depth = 80
    }
}
class ChairFactory {
    static getChair(chair: string): IChair {
        if (chair == 'BigChair') {
            return new BigChair()
        } else if (chair == 'MediumChair') {
            return new MediumChair()
        } else if (chair == 'SmallChair') {
            return new SmallChair()
        } else {
            throw new Error('No Chair Found')
        }
    }
}

interface ITable {
    name: string
    height: number
    width: number
    depth: number

    getDimensions(): dimension
}

class Table implements ITable {
    name = ''
    height = 0
    width = 0
    depth = 0

    getDimensions(): dimension {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        }
    }
}

class BigTable extends Table {
    constructor() {
        super()
        this.name = 'BigTable'
        this.height = 80
        this.width = 80
        this.depth = 80
    }
}
class MediumTable extends Table {
    constructor() {
        super()
        this.name = 'MediumTable'
        this.height = 60
        this.width = 60
        this.depth = 60
    }
}
class SmallTable extends Table {
    constructor() {
        super()
        this.name = 'SmallTable'
        this.height = 40
        this.width = 40
        this.depth = 40
    }
}

class TableFactory {
    static getTable(table: string): ITable {
        if (table === 'BigTable') {
            return new BigTable()
        } else if (table === 'MediumTable') {
            return new MediumTable()
        } else if (table === 'SmallTable') {
            return new SmallTable()
        } else {
            throw new Error('No Table Found')
        }
    }
}

interface IFurniture extends IChair, ITable {

}
class FurnitureFactory {
    static getFurniture(furniture: string): IFurniture|any {
        try {
            if (['SmallChair', 'MediumChair', 'BigChair'].indexOf(furniture) > -1) {
                return ChairFactory.getChair(furniture)
            }
            if (['SmallTable', 'MediumTable', 'BigTable'].indexOf(furniture) > -1) {
                return TableFactory.getTable(furniture)
            }
            throw new Error('No Factory Found')
        } catch (e) {
            console.log(e)
        }
    }
}

// client 
let FURNITURE = FurnitureFactory.getFurniture("SmallChair");
console.log(FURNITURE?.name)
console.log(FURNITURE?.getDimensions())

FURNITURE = FurnitureFactory.getFurniture('MediumTable')
console.log(FURNITURE?.name)
console.log(FURNITURE?.getDimensions())