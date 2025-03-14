const Node = require('./Node.js')



class LinkedList {
    constructor() {
        this.head = null;
    }
    //Adicionar na ponta da lista ('cabeça')
    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }
    //Adicionar no final da lista ('Calda')
    addToTail(data) {
        let tail = this.head;
        if (!tail) {
            this.head = new Node(data);
        } else {
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }

            tail.setNextNode(new Node(data));
        }
    }
    //Remover o elemento da cabeça da lista 
    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.data;
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ';

        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }

        output += '<tail>';
        console.log(output);
    }
}
module.exports = LinkedList;