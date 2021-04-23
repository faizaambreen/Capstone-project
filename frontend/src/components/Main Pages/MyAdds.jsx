import React, { useState, useContext } from 'react'
import Ads from './Ads';
import data from "../../data"
import LoginContext from '../../Context/LoginContext';
import ItemListContext from '../../Context/ItemListContext';
import { NavLink, Redirect } from 'react-router-dom';

function MyAdds() {
  const [login] = useContext(LoginContext);
  const [{itemList,isLoading}, setList] = useContext(ItemListContext);
  const [data, setData] = useState(itemList.filter((item)=>item.ownerID==login.id));

  // if(!login.isLoggedIn){
  //   return <Redirect to="/" />;
  // }

  async function deleteAd(id) {
    console.log("Deleted");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id }),
    }
    const response = await fetch("/deleteAd", options);
    const resultCode = await response.json();
    if (resultCode.status === 200) {
      setData(data.filter((item) => item._id !== id));
      setList({
        itemList: itemList.filter((item) => item._id !== id),
        isLoading: isLoading,
      });
    }
    else {
      alert("Failed to Delete !");
    }
  }

  return (
    <main className="BetweenHeaderAndFooter">
      <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">
        <h1 style={{ marginLeft: "1%" }}>My Ads</h1>
        <section className="Section_myAdd">
          {data.map((item, index) => <Ads key={index} id={item._id} item={item} onChecked={deleteAd} />)}
        </section>
      </div>
    </main>
  )
}

export default MyAdds;
