class Book {
    private bid!: number;
    private bname!: string;

    setBid(bid: number): void {
        this.bid = bid;
    }
    setBname(bname: string): void {
        this.bname = bname;
    }
    getBname(): string {
        return this.bname;
    }
    toDisplay(): string {
        return "Book( Id " + this.bid + "Name " + this.bname + ")";
    }
}

class List {
    books: Book[] = [];
    constructor(books: Book) {
        this.books.push(books);
    }

    public getList(): Book[] {
        return this.books;
    }
}
class BookShop {
    private shopName!: string;
    list!:List;
    getShopName():string{
        return this.shopName;
    }
    setShopName(shopName:string):void{
        this.shopName=shopName;
    }
    getBook():Book[]{
        return this.list.getList();
    }
    setBook(books:Book[]):void{
        for(let i in books){
            this.list=new List(books[i])
        }
    }
    
    toDisplay():string{
        return `BookShop [shopName ${this.shopName}, books ${this.getBook()}]`;
    }

}

const bs:BookShop=new BookShop();
const book1=new Book();
book1.setBid(100);
book1.setBname("Data Structure");

const book2=new Book();
book2.setBid(100);
book2.setBname("Data Structure");

const book3=new Book();
book3.setBid(100);
book3.setBname("Data Structure");
let books=[book1, book2,book3];
bs.setBook(books)
console.log(bs)

