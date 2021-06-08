import React, { useState, useContext, useEffect } from 'react'
import Ads from './Ads';
import LoginContext from '../../Context/LoginContext';
import ItemListContext from '../../Context/ItemListContext';
import { Redirect } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

function NoAds() {
  return (
    <main className="BetweenHeaderAndFooter">
      <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">

        <div className="notFoundMain">
          <div className="notFound1">
            <div className="notFoundMsg">
              <div style={{ fontSize: "28px" }}>
                <span>
                  "Yoy have not Posted any AD."
                    </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function MyAdds() {
  const [{ isLoggedIn, id }] = useContext(LoginContext);
  const [{ itemList, isLoading }, setList] = useContext(ItemListContext);
  const [data, setData] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setData(itemList.filter((item) => item.ownerID === id));
    }
  }, [isLoading]);

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  async function deleteAd(id) {
    setDeleting(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id }),
    }
    const response = await fetch("https://rentall-project.herokuapp.com/deleteAd", options);
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
    setDeleting(false);
  }

  return (
    <main className="BetweenHeaderAndFooter">
      <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">
        <h1 style={{ marginLeft: "1%" }}>My ADs</h1>
        {
          data !== null && data.length === 0 && <NoAds />
        }
        <section className="Section_myAdd">
          {
            deleting ? <CircularProgress className="loading" /> :
              data ? data.map((item, index) => (
                <Ads key={index} id={item._id} item={item} onChecked={deleteAd} />)
              ) : <CircularProgress className="loading" />
          }
        </section>
      </div>
    </main>
  )
}

export default MyAdds;
