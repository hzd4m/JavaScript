
//Construímos o Nó , agora com um ponteiro para o anterior. 
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the Node class')
        }
    }

    setPreviousNode(node) {
        if (node instanceof Node || node === null) {
            this.previous = node;
        } else {
            throw new Error('Previous node must be a member of the Node class')
        }
    }

    getNextNode() {
        return this.next;
    }
    //Função para retornar o Nó anterior . Essa é a principal diferença entre uma lista simples e um lista dupla
    getPreviousNode() {
        return this.previous;
    }
}

module.exports = Node;