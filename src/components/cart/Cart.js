import { useState } from "react"

// DEPENDENCIES - decoupling
// state SHARING management
// 1. LIFT UP THE STATE - HOC -> HIGHER ORDER COMPONENT
// 2. useContext()
// 3. Redux, Recoil, Redux 

const Cart = ({count}) =>{
   //contrainer 1
    return (

            <button>cart ({count})</button>
    )
}

const AddToCartButton = ({count, setCount} ) =>{
  //contrainer 2
    return (
            <button onClick={() => {
            setCount(++count)
                 console.log(count)
            }}
            >Add To Cart</button>
    )
}

// HIGHER ORDER COMPONENT
// DRILL DOWN PROPS
const HOC = (props) =>{
    let [count, setCount] = useState(props.count)

    return (
        <>
            <Cart count={count}/>
            <AddToCartButton  count={count} setCount ={setCount}/>
        </>
    )
}

export {Cart, AddToCartButton, HOC}