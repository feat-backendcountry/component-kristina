import React from 'react';

class HoverKids extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kids: {
        Girls: ['Jackets', 'Vests', 'Tops', 'Dresses & Skirts', 'Pants', 'Shorts', 'Baselayers', 'Underwear & Sleepwear', 'Swimwear', 'Footwear', 'Accessories', 'Shop All'],
        Boys: ['Jackets', 'Vests', 'Tops', 'Pants', 'Shorts', 'Baselayers', 'Undersear & Sleepwear', 'Swimwear', 'Footwear', 'Accessories', 'Shop All'],
        'Toddler Girls': ['Jackets', 'Vests', 'Tops', 'Pants', 'Shorts', 'Baselayers', 'Swimwear', 'Footwear', 'Accessories', 'Shop All'],
        'Toddler Boys': ['Jackets', 'Vests', 'Tops', 'Pants', 'Shorts', 'Baselayers', 'Swimwear', 'Footwear', 'Accessories', 'Shop All'],
        Infant: ['Jackets', 'Vests', 'Tops', 'Pants', 'Shorts', 'Swimsuits & Buntings', 'Baselayers', 'Swimwear', 'Footwear', 'Accessories', 'Shop All']
      }
    };
  };

  render() {
    const keys = Object.keys(this.state.kids);
    return (
      <div id='hover-kids'>
        {keys.map((category, key) => {
          return (
            <span className='kids-item' key={key}>
              <div className='kids-category'>{category}</div>
              {this.state.kids[category].map((subcategory, key) => {
                return(
                  <div key={key}>{subcategory}</div>
                )
              })}
            </span>
          )
        })}
      </div>

    )
  }
};

export default HoverKids;