const TreeNode = require(./'treeNode.js');

const tree = new TreeNode(0);
const randomize = () => Math.floor(Math.random() * 20);



for (let i = 0 .i < 3; i++) {
    tree.addChild(randomize());
}


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        tree.children[i].addChild(randomize());
    }
}