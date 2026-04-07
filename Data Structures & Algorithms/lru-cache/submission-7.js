class Node{
    constructor(id,value){
    this.id = id ; 
    this.val = value;
    this.prev = null;
    this.next = null;
    }   
}


class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.head = new Node(0,0);
        this.tail = new Node(0,0);
        this.cache = new Map();
        this.connectNodes(this.head,this.tail)
    }

    connectNodes(node1,node2){
        node1.next = node2;
        node2.prev = node1
    }

    /**
     * @param {number} key
     * @return {number}
     */


    get(key) {
    if(this.cache.has(key)){
        let node = this.cache.get(key);
        this.removeNode(node);
        this.addNode(node);
       
        return node.val;
    }
    return -1;

    }

    addNode(node){
        let prev = this.tail.prev;
         prev.next = node;
        node.prev = prev;
        node.next = this.tail;
        this.tail.prev = node;
    }

    removeNode(node){
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
    if (this.cache.has(key)) {
        this.removeNode(this.cache.get(key));
        this.cache.delete(key);
    }
    const node = new Node(key, value);
    this.cache.set(key, node);
    this.addNode(node);

    if (this.cache.size > this.cap) {
        const lru = this.head.next;
        this.removeNode(lru);
        this.cache.delete(lru.id);
    }
}
}
