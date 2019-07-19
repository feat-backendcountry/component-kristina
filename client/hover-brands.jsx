import React from 'react';

class HoverBrands extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brandIndex: ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    };
  };

  render() {
    return (
      <ul className='hover-display hover-brands'>
        <div className='brands-header'>Shop Over A Thousand Brands</div>
        {this.state.brandIndex.map((index, key) => {
          return(
            <span className='brands-item' key={key}>{index}</span>
          );
        })}
      </ul>

    )
  }
};

export default HoverBrands;