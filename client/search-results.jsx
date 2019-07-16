import React from 'react';

const SearchResults = (props) => {
  return (
    <section className='search-results'>
      <div className='search-result-text-container'>
        <span className='search-result-text-item'>
          <span className='query-text'>{props.query}</span>
          <span>remaining result</span>
        </span>
        {props.searchTextItems.map((item, key) => {
          return(
            <span className='search-result-text-item' key={key}>
              <span>{item.name.toLowerCase()}</span>
              <span className='search-department'>{' in ' + item.childCategory}</span>
            </span>
          );
        })}

        <span className='search-result-text-item'>----separator line-----</span>
        <span className='search-result-text-item'>
          <span className='query-text'>{props.query}</span>
          <span>remaining result</span>
        </span>
        <span className='search-result-text-item'>
          <span className='query-text'>{props.query}</span>
          <span>remaining result</span>
        </span>
        <span className='search-result-text-item'>
          <span className='query-text'>{props.query}</span>
          <span>remaining result</span>
        </span>
        <span className='search-result-text-item'>
          <span className='query-text'>{props.query}</span>
          <span>remaining result</span>
        </span>
        <span className='search-result-text-item'>
          <span className='query-text'>{props.query}</span>
          <span>remaining result</span>
        </span>
        <span className='search-result-text-item'>
          <span className='query-text'>{props.query}</span>
          <span>remaining result</span>
        </span>
        <span className='search-result-text-item'>
          <span className='query-text'>{props.query}</span>
          <span>remaining result</span>
        </span>
        <span className='search-result-text-item'>
          <span className='query-text'>{props.query}</span>
          <span>remaining result</span>
        </span>
        <span className='search-result-text-item'>
          <span className='query-text'>{props.query}</span>
          <span>remaining result</span>
        </span>
      </div>

      <div className='search-result-display-container'>
        {props.searchDisplayItems.map((item, key) => {
          return(
            <span className='search-result-display-item' key={key}>
              <img className='search-result-display' src={item.url}alt='search result 1' />
              <span className='search-result-display-brand'>{item.brand}</span>
              <span className='search-result-display-name'>{item.name}</span>
            </span>
          );
        })
        }
      </div>
    </section>
  )
}

export default SearchResults;
