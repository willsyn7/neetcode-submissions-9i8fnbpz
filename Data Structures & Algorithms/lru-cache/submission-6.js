class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new Node(0, null); // LRU side (least recently used)
        this.tail = new Node(0, null); // MRU side (most recently used)
        this.connectNodes(this.head, this.tail);
    }

    connectNodes(node1, node2) {
        node1.next = node2;
        node2.prev = node1;
    }

    // ✅ NEW: removes a node from its current position in the list
    remove(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    // ✅ FIXED: was using this.next and this.right — should be this.tail
    insert(node) {
        let prev = this.tail.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.tail;
        this.tail.prev = node;
    }

    get(key) {
        if (this.cache.has(key)) {
            let node = this.cache.get(key); // ✅ FIXED typo: cahce -> cache
            this.remove(node);              // ✅ FIXED: added missing remove step
            this.insert(node);              // re-insert at MRU position
            return node.val;
        } else {
            return -1;
        }
    }

    put(key, value) {
        // If key exists, remove the old node first
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
            this.cache.delete(key);
        }
        
        // Create new node and insert at MRU end
        let node = new Node(key, value);
        this.cache.set(key, node);
        this.insert(node);

        // If over capacity, evict LRU node (the one right after head)
        if (this.cache.size > this.capacity) {
            let lru = this.head.next;
            this.remove(lru);
            this.cache.delete(lru.key); // ✅ use lru.key to delete from map
        }
    }
}