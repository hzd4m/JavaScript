class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    addChild(child) {
        if (child instanceof TreeNode) {
            this.children.push(child);
        } else {
            this.children.push(new TreeNode(child));
        }
    }
    /*Remover Filho(Child) 
    I.Criamos uma constante com o valor do tamanho da array CHILDREN
    II.Utilizamos .filter(Devolve os elementos sob uma condição) para filtrar a array e remover o nó que corresponde a childToRemove  */
    removeChild(childToRemove) {
        const length = this.children.length();
        this.children = this.children.filter(child => {
            if (childToRemove instanceof TreeNode) {
                return childToRemove != child; // Quando childToRemove não é igual a child , ele será adicionado à array de remoção 
            } else {
                return child.data !== childToRemove;
            }
        })

        if (length === this.children.length) {
            this.children.forEach(child => child.removeChild(childToRemove));
        }
    }

    print(level = 0) {
        let result = ' ';
        for (let i = 0; i < level; i++) {
            result += '-- ';
        }
        console.log(`${result}${this.data}`);
        this.children.forEach(child => child.print(level + 1));
    }
    /* Realiza uma travessia em profundidade na árvore a partir deste nó.*/
    depthFirstTraversal() {
        console.log(this.data);
        this.children.forEach(child => child.depthFirstTraversal());
    }

    breadthFirstTraversal() {

    }
}

module.exports = TreeNode;