import React, { useContext } from "react"
import ItemPic from './ItemPic';
import ItemSeller from './ItemSeller';
import { useParams } from "react-router-dom";
import ItemListContext from '../../Context/ItemListContext';

function ItemView() {
  const {itemId} = useParams();
  const {itemList} = useContext(ItemListContext);
  const item = itemList.find(({_id})=>_id===itemId);
  
  return (
    <main className="BetweenHeaderAndFooter">
      <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">
        <div className="itemViewDiv1 itemViewDiv2">
          <ItemPic item={item}/>
          <ItemSeller item={item}/>
        </div>
      </div>
    </main>
  );
}

export default ItemView;

//https://apollo-singapore.akamaized.net/v1/files/zkrhb7la93c5-PK/image;s=1080x1080