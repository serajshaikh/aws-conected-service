// Composite Desing
        //          C
         //         / \
         //    cainet   Peri 
         //    /\         \


         interface Component{
            showPrice():void;
        }
        
        class Leaf implements Component{
            price: number;
            name:string;
            constructor(price:number,name:string){
                this.price=price;
                this.name=name;
            }
            showPrice():void{
                  console.log("Name:",this.name,"price: ", this.price);
            }
        
        }
        class Composite implements Component{
            name:string;
            list!:List;
            constructor(name:string){
                this.name=name;
            }
            public addComponents(compontnt:Component){
                this.list=new List(compontnt);
            }
            showPrice():void{
                const comp:Component[]=this.list.getList();
                comp.forEach((cmp)=> console.log("component are: ", cmp.showPrice()));
              
            }
        }
        
        class List{
            comp:Component[]=[];
            constructor(component:Component){
                this.comp.push(component);
            }
        
            public getList():Component[]{
              return this.comp;
            }
        }
        
        
        const hd:Component=new Leaf(4000, "HDD");
        const mouse:Component=new Leaf(500, "Mouse");
        const ram:Component=new Leaf(3000, "Ram");
        const cpu:Component=new Leaf(9000, "CPU");
        const adapter:Component=new Leaf(300, "Adapter");
        
        const ph:Composite=new Composite("Peripheral");
        const cabinet:Composite=new Composite("MotherBoard");
        const mb:Composite=new Composite("Cabinet");
        const computer:Composite=new Composite("Computer");
        
        mb.addComponents(cpu);
        mb.addComponents(ram);
        mb.addComponents(adapter);
        
        ph.addComponents(hd);
        ph.addComponents(mouse);
        
        cabinet.addComponents(hd);
        cabinet.addComponents(mb);
        
        computer.addComponents(ph);
        computer.addComponents(cabinet);
        
        
        ram.showPrice();
        computer.showPrice();
        
        
        
        // class CompositeTest{
        //     public static main(){
        
        //     }
        // }
        
        // const cObj=new CompositeTest();
        
        