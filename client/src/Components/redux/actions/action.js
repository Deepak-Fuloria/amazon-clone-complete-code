import axios from "axios"
export const getProducts = ()=> async(dispatch)=>{
    try {
        // const data = await fetch(`http://localhost:5000/getproducts`,{
        //         method:"GET",
        //         headers:{
        //             "Content-Type":"application/json"
        //         }
        // });
        const res=await axios(`/getproducts`)
        // const res = await data.json();
        // console.log(res);
        dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res.data});
    } catch (error) {
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response});
    }
}
