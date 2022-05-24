import GoodsItem from "./GoodsItem"

function GoodsList(props) {

const {goods = [], addtoBucket} = props;

if(!goods.length){
  return <h3>Not found</h3>
}

  return (
    <div className="goods">
      {
        goods.map(e => (<GoodsItem key={e.id} {...e} addtoBucket={addtoBucket} />))
      }
    </div>
  );
}

export default GoodsList;
