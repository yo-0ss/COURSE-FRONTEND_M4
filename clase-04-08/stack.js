//crear un stack
let stack = [];

///agrega elemento
stack.push("1");
stack.push("2");
stack.push("3");
stack.push("4");
stack.push("5");
console.log(stack);

///quita elemento
let ultimo = stack.pop();
console.log(ultimo);
console.log(stack);

//stack mediante clases
class Pila{
    constructor(){
        this.items = [];
    }

    push(elemento){
        this.items.push(elemento);
    }

    pop(){
        if (this.isEmpty()) {
            return "El stack esta vacio";
        }
        return  this.items.pop();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        return this.items.join(" - ");
    }
}

const breakfast = new Pila();

breakfast.push("Huevos");
breakfast.push("Hotcakes");
breakfast.push("Molletes");

console.log("Desayunos pendientes : ", breakfast.print());

console.log("Entregado : ", breakfast.pop());

console.log("Desayunos pendientes : ", breakfast.print());




