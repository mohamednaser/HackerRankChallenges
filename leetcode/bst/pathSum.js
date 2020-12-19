class Node 
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
} 

// Binary Search tree class 
class BinarySearchTree 
{ 
    constructor() 
    { 
        // root of a binary seach tree 
        this.root = null; 
    }
    
    insert(data) 
    { 
        // Creating a node and initailising  
        // with data  
        var newNode = new Node(data); 
        
        // root is null then node will 
        // be added to the tree and made root. 
        if(this.root === null) 
        this.root = newNode; 
        else
        
        // find the correct position in the  
        // tree and add the node 
        this.insertNode(this.root, newNode); 
    }    
    
    
    // Method to insert a node in a tree 
    // it moves over the tree to find the location 
    // to insert a node with a given data  
    insertNode(node, newNode) 
    { 
        // if the data is less than the node 
        // data move left of the tree  
        if(newNode.data < node.data) 
        { 
            // if left is null insert node here 
            if(node.left === null) 
            node.left = newNode; 
            else
            
            // if left is not null recurr until  
            // null is found 
            this.insertNode(node.left, newNode);  
        } 
        
        // if the data is more than the node 
        // data move right of the tree  
        else
        { 
            // if right is null insert node here 
            if(node.right === null) 
            node.right = newNode; 
            else
            
            // if right is not null recurr until  
            // null is found 
            this.insertNode(node.right,newNode); 
        } 
    }
}

let pathSum = (node, sum) => {
    let sums = {}
    let pathSumHelper = (node, res) => {
        if(!node) return
        if (isLeaf(node)) {
            sums[res+node.data] = ++sums[res+node.data] || 1
            res = 0 
        }

        if(node.right) pathSumHelper(node.right, res + node.data)
        if(node.left) pathSumHelper(node.left, res + node.data)
    }

    pathSumHelper(node, 0)
    return !!sums[sum]
}

let isLeaf = (node) => {
    return !node.right && !node.left
}

var BST = new BinarySearchTree(); 

BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27);

console.log(pathSum(BST.root, 42))
