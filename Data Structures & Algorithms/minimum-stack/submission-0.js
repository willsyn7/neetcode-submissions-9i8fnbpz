class MinStack {
    constructor() {
    
        this.stack = [];
        this.minstack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
    //1. Push a value ont the stack 
    //2. Check if the value that is being pushed is less then themin stack
    //3. if it is less push the new value, if not push the previous minimum 
    this.stack.push(val)
    if(this.minstack.length === 0){
        this.minstack.push(val);
    }else{
       this.minstack.push(Math.min(val,this.minstack[this.minstack.length -1 ]))
    }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minstack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length -1 ];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minstack[this.minstack.length-1]
    }
}
