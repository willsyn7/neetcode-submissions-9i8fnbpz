type LRUCache struct {
cache map[int]*Node
cap int
head *Node
tail *Node
    
}

type Node struct {
key int
val int
Prev, Next *Node
	
}

func Constructor(capacity int) LRUCache {

head := &Node{} 
tail := &Node{}
head.Next = tail
tail.Prev = head

return LRUCache{
	cache : make(map[int]*Node),
	cap : capacity,
	head : head,
	tail : tail,

}
    
}

func (l *LRUCache) Get(key int) int {
	if node, has := l.cache[key]; has {
		l.delete(node)
		l.insert(node)
		return node.val
	}
	return -1
    
}

func (l * LRUCache)insert(node *Node){
	prev := l.tail.Prev
	prev.Next = node
	
	node.Prev = prev
	node.Next = l.tail

	l.tail.Prev = node

}

func(l * LRUCache) delete (node *Node){
	prev := node.Prev
	next := node.Next

	prev.Next = next
	next.Prev = prev
}

func (l *LRUCache) Put(key int, value int) {
if node,has := l.cache[key];has{
	node.val = value 
	l.delete(node)
	l.insert(node)
	
}else{
	newNode := &Node{key : key, val : value}
	l.cache[key] = newNode
	l.insert(newNode)
	if(len(l.cache) > l.cap){
		LRU := l.head.Next
		l.delete(LRU)
		delete(l.cache, LRU.key)

	}
}
    
}
