type LRUCache struct {
cache map[int]*Node
cap int
head *Node
tail *Node
}

type Node struct{
key int
value int
prev, next *Node



}

func Constructor(capacity int) LRUCache {
head := &Node{}
tail :=  &Node{}
head.next = tail
tail.prev = head

return LRUCache{
	cache : make(map[int]*Node),
	cap : capacity,
	head : head, 
	tail : tail,
	
}   
}


func (this *LRUCache) Get(key int) int {
if node,has := this.cache[key]; has{

this.delete(node)
this.insert(node)

	
	return node.value
}
    return -1
}

func(this * LRUCache) insert(node *Node){
	prev := this.tail.prev

	prev.next = node
	node.prev = prev
	node.next = this.tail
	this.tail.prev = node
}

func(this * LRUCache)delete(node *Node){
	prev := node.prev
	next := node.next

	prev.next = next
	next.prev = prev
}


func (this *LRUCache) Put(key int, value int) {
if node, has := this.cache[key]; has{
	this.delete(node)
	node.value = value
	this.insert(node)
	return
}else{	
	NewNode := &Node{key : key, value : value}
	this.insert(NewNode)
	this.cache[key] = NewNode
	if(len(this.cache) > this.cap){
		LRU := this.head.next
		this.delete(LRU)
		delete(this.cache,LRU.key)
	}
}
    
}
