import React ,{useState} from 'react'
import Ads from './Ads';
import data from "../../data"


function MyAdds() {
  
  const [d , setD ] =useState(data);

  function del(id){

    setD(pre => {
      return pre.filter((item , index) => {
          return index !== id;
      })
    })

  }
  return (
    <main className="BetweenHeaderAndFooter">
      <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">
      <h1 style={{marginLeft:"1%"}}>My Ads</h1>
      <section className="Section_myAdd">
        {d.map((x,index) => <Ads key={index} id={index} adds={x} onChecked={del}/>)}    
      </section>
      </div>
    </main>
  )
}

export default MyAdds;
