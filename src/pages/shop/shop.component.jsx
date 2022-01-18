import React from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = SHOP_DATA;
  }

  render() {
    const collections = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionData }) => (
          <PreviewCollection key={id} {...otherCollectionData} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
