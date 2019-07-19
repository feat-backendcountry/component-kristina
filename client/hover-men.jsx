import React from 'react';

class HoverMen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      men: {
        Clothing: ['Jackets', 'Vests', 'Shirts', 'Hoodies & Sweaters', 'Pants', 'Shorts', 'Baselayers', 'Underwear & Sleepwear', 'Swimwear', 'Shop All'],
        Footwear: ['Casual', 'Hiking', 'Winter', 'Rain', 'Running', 'Approach', 'Water', 'Sandals', 'Slippers', 'Accessories', 'Shop All'],
        Accessories: ['Hats', 'Beanies', 'Neckwear', 'Gloves & Mittens', 'Gaiters', 'Socks', 'Sunglasses', 'Watches', 'Electronics', 'Bags & Daypacks', 'Blankets & Beach Towels', 'Shop All'],
        Activities: ['Ski', 'Snowboard', 'Hike & Camp', 'Bike', 'Climb', 'Run & Training', 'Snowshoe', 'Paddle', 'Surf', 'Fly Fish', 'Yoga', 'Travel', 'Shop All']
      }
    };
  };

  render() {
    const keys = Object.keys(this.state.men);
    return (
      <section className='hover-display hover-men'>
        {keys.map((category, key) => {
          return (
            <div className={'category-container container-' + key} key={key}>
              <span className='category-name'>{category}</span>
              {this.state.men[category].map((subcategory, key) => {
                return(
                  <span className='category-item' key={key}>{subcategory}</span>
                )
              })}
            </div>
          )
        })}
      </section>

    )
  }
};

export default HoverMen;