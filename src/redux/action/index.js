 //add to card

 export const  addCard=(Product)=>{
    return{
        type:"ADDITEM",
        payload:Product,
         
    }
 }
// delete from card

 export const  deletCard=(Product)=>{
    return{
        type:"DELITEM",
        payload:Product,
         
    }
 }