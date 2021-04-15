class Node {
    constructor(id) {
        this.id = id;
        this.children = [];
        this.right = null;
    }
} 

function setRight(node){
    if (node.children.length != 0) {
        for (i=0; i<node.children.length-1; i++) {
            node.children[i].right = node.children[i+1].id;
        }
    }

    else {
        return 0;
    }

    if (node.right === null || node.right.children === undefined) {
        return;
    }
}

//testing the creation of the Tree 
const rootNode = new Node(0);
rootNode.children.push(new Node(10));
rootNode.children.push(new Node(20));
rootNode.children.push(new Node(30));
rootNode.children[0].children.push(new Node(40));
rootNode.children[0].children.push(new Node(50));
rootNode.children[2].children.push(new Node(60));

setRight(rootNode);
setRight(rootNode.children[0]);
setRight(rootNode.children[1]);
setRight(rootNode.children[2]);

//print the test the right value of each node
console.log(rootNode.children[0].right);
console.log(rootNode.children[1].right);
console.log(rootNode.children[2].right);

console.log(rootNode.children[0].children[0].right);
console.log(rootNode.children[0].children[1].right);
console.log(rootNode.children[2].children[0].right);


