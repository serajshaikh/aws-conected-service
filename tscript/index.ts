interface Animal{
    name:string
}

interface Human{
    name:string
    age:number
}


export const displayDetails=<TItem extend Animal Human>=> (item:TItem):TItem extend Human Animal? {humanName:string, age:number}:{name:string}{
    return {name:item.name};
}

console.log(displayDetails({name:"Elephant"}));