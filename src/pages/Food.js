import { useState } from 'react';
import Breadcrumb from './../components/widget/Breadcrumb';
import foods from './../foods';

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
				<div className="btn-groups">
	        {menuItems.map((val, id) => {
	          return (
	            <button key={id} type="button"
	              className="btn btn-dark text-white"
	              onClick={() => filterItem(val)}
	              key={id}
	            >
	              {val}
	            </button>
	          );
	        })}
	        <button type="button"
	          className="btn btn-dark text-white"
	          onClick={() => setItem(foods)}
	        >
	          All
	        </button>
				</div>
      </div>
    </>
  );
};

const Card = ({ item }) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          {item.map((val, idx) => {
            return (
						<div key={idx} className="col-md-6">
              <div
                className="card"
                key={val.id}
              >
                <img src={val.img} alt={val.title} className="card-img-top" />
                <div className="card-body">
                  <div className="card-title">
                    {val.title} {val.price}
                  </div>
                  <div className="card-text">{val.desc}</div>
                </div>
              </div>
						</div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Food = () => {
  const [item, setItem] = useState(foods);

  const menuItems = [...new Set(foods.map((val) => val.category))];

  const filterItem = (curcat) => {
    const newItem = foods.filter((newval) => {
      return newval.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <main id="main">
			<Breadcrumb page="Foods" />
      <div className="container">
        <h1 className="text-center">Food Filtering App</h1>
        <Buttons
          filterItem={filterItem}
          setItem={setItem}
          menuItems={menuItems}
        />
        <Card item={item} />
      </div>
    </main>
  );
};

export default Food;
