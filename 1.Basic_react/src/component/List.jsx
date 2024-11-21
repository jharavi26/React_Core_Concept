function List (){
  let foodItems = ['Grain','Rice','Bread','Vegetable','Milk','Salad' ];
  return (
    <>
    <h1>Healthy Foods </h1>
    <ol className="list-group">
      {foodItems.map(item => (                                  //Simple way to iterate a array
        <li key={item} className="item-1">{item}</li>
      ))}
    </ol>
  
    </>
  );
}

export default List;