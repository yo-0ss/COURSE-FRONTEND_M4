class Queue {
    constructor() {
        this.items = []
    }

    enqueue(elemento){
        this.items.push(elemento);
    }

    dequeue(){
        if (this.isEmpty()) {
            return "El queue esta vacio"
        }
        return this.items.shift();
    }

    front(){
        return this.items[0]
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        return this.items.join(" - ")
    }
}

const myPrinter = new Queue();

myPrinter.enqueue("Pagina 1");
myPrinter.enqueue("Pagina 2");
myPrinter.enqueue("Pagina 3");
myPrinter.enqueue("Pagina 4");

console.log("Cola de impresión : ", myPrinter.print());

console.log("Imprimiendo... ", myPrinter.dequeue() );

console.log("Cola de impresión : ", myPrinter.print());

console.log("Imprimiendo... ", myPrinter.dequeue() );
