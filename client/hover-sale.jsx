import React from 'react';

class HoverSale extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sale: {
        Women: ['Jackets', 'Vests', 'Tops', 'Dresses & Skirts', 'Pants', 'Shorts', 'Baselayers', 'Underwear & Sleepwear', 'Swimwear', 'Footwear', 'Accessories', 'Shop All'],
        Men: ['Jackets', 'Vests', 'Shirts', 'Sweaters & Hoodies', 'Pants', 'Shorts', 'Baselayers', 'Undersear & Sleepwear', 'Swimwear', 'Footwear', 'Accessories', 'Shop All'],
        Kids: ['Girls', 'Boys', 'Toddler Girls', 'Toddler Boys', 'Infant', 'Accessories', 'Shop All'],
        Activities: ['Ski', 'Snowboard', 'Hike & Campt', 'Bike', 'Climb', 'Run & Training', 'Snowshoe', 'Paddle', 'Surf', 'Fly Fish', 'Yoga', 'Travel']
      }
    };
  };

  render() {
    const keys = Object.keys(this.state.sale);
    return (
      <section className='hover-sale hover'>
        {keys.map((category, key) => {
          return (
            <div className={'category-container container-' + key} key={key}>
              <span className='category-name'>{category}</span>
              {this.state.sale[category].map((subcategory, key) => {
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

export default HoverSale;