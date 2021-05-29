import React, { useContext, useEffect, useState } from "react"
import ItemPic from './ItemPic';
import ItemSeller from './ItemSeller';
import { useParams } from "react-router-dom";
import ItemListContext from '../../Context/ItemListContext';
import { CircularProgress } from "@material-ui/core";
import { PageNotFound } from "../Main Pages/PageNotFound";

function ItemView() {
  const { itemId } = useParams();
  const [{ itemList, isLoading }] = useContext(ItemListContext);
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!isLoading) {
      setItem(itemList.find(({ _id }) => _id === itemId));
    }
  }, [isLoading]);

  return (
    <main className="BetweenHeaderAndFooter">
      <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">
        {
          item === null ? <CircularProgress className="loading" /> :
            item ? <div className="itemViewDiv1 itemViewDiv2">
              <ItemPic item={item} />
              <ItemSeller item={item} />
            </div> : <PageNotFound />
        }
      </div>
    </main>
  );
}

export default ItemView;