import { useState } from 'react'

const PaginationSearch = () => {
    const [productsData , setProductsData] = useState([]);

    const fetchData = async () =>{
        const api = await fetch("https://dummyjson.com/products");
        const res = await api.json();
        if(res && res.products){
            setProductsData(res.products);
        }
    }
    fetchData();
  return (
    <div>
        {
            productsData.map((el,key) => <h1 key={key}>{el}</h1> )
        }
    </div>
  )
}

export default PaginationSearch