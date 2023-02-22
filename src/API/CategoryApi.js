import axios from 'axios'
import { useState , useEffect, useCallback} from 'react'

const url = 'http://dummyjson.com'

function useCategoryApi() {
  const [category , setCategory] = useState([])

  const readCategories = async() =>{
        const out = await axios.get(`${url}/products/categories`);
        console.log(out.data)
        setCategory(out.data)

  }

  const initValues = useCallback(()=>{
    readCategories()
  },[])

  useEffect(()=>{
     initValues()
  },[initValues])
  return{
    category:[category,setCategory]

  }
}

export default useCategoryApi
