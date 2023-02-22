import {useState, useMemo, useEffect} from 'react'
import axios from 'axios'
import { toast} from 'react-toastify'

const url = `http://dummyjson.com`

function useProductApi() {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])

    // state to calculation of cart subtotal total tax delivery charges 
    const [subTotal,setSubTotal] = useState(0)
    const [discount,setDiscount] =useState(0)
  const [gst , setGst] = useState(5)
  const [dc , setDc]= useState(50)

    const readProduct = async()=>{
        const out = await axios.get(`${url}/products`)
        setProducts(out.data.products)

    }

    const initValue = useMemo(()=>(
        {value : [products,setProducts]}
    ))

    useEffect(()=>{
        readProduct()
    },[])
    //add product to cart
    const addToCart = async(product)=>{
      // console.log('cart=',product)

      // product exist in cart or not
      const check = cart.every(item=>{
        return item.id !== product.id
      });
      if(check){
        toast.success('product added to cart')
        setCart([...cart,{...product,quantity:1}])
      }else{
        toast.warning('product already in cart')
      }
      
    }


  return{
    product: initValue,
    cart:[cart,setCart],
    addToCart : addToCart,
    subTotal: [subTotal ,setSubTotal],
     gst:[gst,setGst],
     dc:[dc,setDc],
     discount:[discount,setDiscount]

  }
}

export default useProductApi
