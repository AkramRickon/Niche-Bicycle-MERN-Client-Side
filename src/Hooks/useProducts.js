import React, { useEffect, useState } from 'react';

const useProducts = () => {
   const[products,setProducts]=useState([]);
   useEffect(()=>{
       fetch('https://lit-fjord-01579.herokuapp.com/allProducts')
       .then(res=>res.json())
       .then(data=>setProducts(data))
   },[])
   return{products,setProducts};
};

export default useProducts;