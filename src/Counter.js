class Counter {

    constructor(count, setCount){
        this.count = count
        this.setCount = setCount
    }

    update_count(inc){
        this.setCount(this.count + inc)
    }
    
    reset(){
        this.setCount(0)
    }
}

export {Counter};
