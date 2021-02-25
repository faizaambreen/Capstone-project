import React, { useEffect } from 'react';

const ItemListContext = React.createContext([]);

export default ItemListContext;

// export const ItemListProvider = ({children})=>{
//     useEffect(() => {
//         async function fetchData() {
//             const response = await fetch("/categories/:");
//             const data = await response.json();
//             return (
//                 <itemListContext.Provider value={data}>
//                     {children}
//                 </itemListContext.Provider>
//             );
//         }
//         const result = fetchData();
//         return result;
//     }, [1]);

// }