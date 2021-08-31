class Cart {
    //common logic
    constructor(id ) {
        this.id = id
        this.items = []       
    }
    
    toPOJO() {
       
         return{
            id : this.id,
            items:this.items
        }
       
    }
    toJson(){
        return JSON.stringify(this.toPOJO())
    }
    
    //cart specific logic
    add( item ){
        this.items.push(item)
    }
    
    getCount(){
        return this.items.length
    }

}
export default Cart;