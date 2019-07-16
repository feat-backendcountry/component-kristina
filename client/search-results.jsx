import React from 'react';

const SearchResults = (props) => {
  console.log(props.result[0].url);
  return (
    <section className='search-results'>
      <div className='search-result-text-container'>
        <span className='search-result-text-item'>
          <span className='query-text'>{props.query}</span>
          <span>remaining result</span>
        </span>
        <span className='search-result-text-item'>
          <span>{props.result[0].name}</span>
          <span className='search-department'>{' in ' + props.result[0].childCategory}</span>
        </span>
        <span className='search-result-text-item'>
          <span>{props.result[1].name}</span>
          <span className='search-department'>{' in ' + props.result[1].childCategory}</span>
        </span>
        <span className='search-result-text-item'>
          <span>{props.result[2].name}</span>
          <span className='search-department'>{' in ' + props.result[2].childCategory}</span>
        </span>
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

      <div className='search-result-images-container'>
        <span className='search-result-image-item'>
          <img className='search-result-image' src={props.result[0].url}alt='search result 1' />
          <span className='search-result-image-brand'>brand</span>
          <span className='search-result-image-name'>item</span>
        </span>
        <span className='search-result-image-item'>
          <img className='search-result-image' src={props.result[1].url}alt='search result 2' />
          <span className='search-result-image-brand'>brand</span>
          <span className='search-result-image-name'>item</span>
        </span>
        <span className='search-result-image-item'>
          <img className='search-result-image' src={props.result[2].url}alt='search result 3' />
          <span className='search-result-image-brand'>brand</span>
          <span className='search-result-image-name'>item</span>
        </span>
        <span className='search-result-image-item'>
          <img className='search-result-image' src={props.result[3].url}alt='search result 4' />
          <span className='search-result-image-brand'>brand</span>
          <span className='search-result-image-name'>item</span>
        </span>
        <span className='search-result-image-item'>
          <img className='search-result-image' src={props.result[4].url}alt='search result 5' />
          <span className='search-result-image-brand'>brand</span>
          <span className='search-result-image-name'>item</span>
        </span>
        <span className='search-result-image-item'>
          <img className='search-result-image' src={props.result[5].url}alt='search result 6' />
          <span className='search-result-image-brand'>brand</span>
          <span className='search-result-image-name'>item</span>
        </span>
        <span className='search-result-image-item'>
          <img className='search-result-image' src={props.result[6].url}alt='search result 7' />
          <span className='search-result-image-brand'>brand</span>
          <span className='search-result-image-name'>item</span>
        </span>
        <span className='search-result-image-item'>
          <img className='search-result-image' src={props.result[7].url}alt='search result 8' />
          <span className='search-result-image-brand'>brand</span>
          <span className='search-result-image-name'>item</span>
        </span>
      </div>
    </section>
  )
}

export default SearchResults;
