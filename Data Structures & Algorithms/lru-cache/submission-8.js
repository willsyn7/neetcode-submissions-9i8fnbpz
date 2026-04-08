
class Node{
     constructor(key, value) {
        this.id = key;
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.connectNodes(this.head, this.tail);
    }

    connectNodes(node1, node2) {
        node1.next = node2;
        node2.prev = node1;
    }

    insert(node) {
        let prev = this.tail.prev;
        node.next = this.tail;
        node.prev = prev;
        prev.next = node;
        this.tail.prev = node;
    }

    remove(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    get(key) {
        if (this.cache.has(key)) {
            let node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
        }
        return -1;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            let node = this.cache.get(key);
            node.val = value;
            this.remove(node);
            this.insert(node);
        } else {
            let node = new Node(key, value);
            this.insert(node);
            this.cache.set(key, node);
        }
        if (this.cache.size > this.cap) {
            let LRU = this.head.next;
            this.cache.delete(LRU.id);
            this.remove(LRU);
        }
    }
}