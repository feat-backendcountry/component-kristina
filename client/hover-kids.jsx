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
      <section id='hover-kids'>
        {keys.map((category, key) => {
          return (
            <div id={'container-' + key} className='category-container' key={key}>
              <span className='category-name'>{category}</span>
              {this.state.kids[category].map((subcategory, key) => {
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

export default HoverKids;