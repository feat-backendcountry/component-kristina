import React from 'react';

class HoverActivities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainActivities: ['Hike & Camp', 'Bike', 'Climb', 'Running & Training', 'Ski', 'Snowboard'],
      otherActivities: ['Snowshoe', 'Paddle', 'Surf', 'FlyFish', 'Yoga', 'Travel']
    };
  };

  render() {
    return (
      <section className='hover-display hover-activities'>
          {this.state.mainActivities.map((activity, key) => {
            return (
              <span className='activity-container' key={key}>
                <span className={'activity-image image-' + key}>
                  <span className='activity-name'>{activity}</span>
                </span>
              </span>
            )
          })}
        <div className='separator-container'>
          <span className='separator'></span>
        </div>
        <div className='other-activities-container'>
          {this.state.otherActivities.map((activity, key) => {
            return(
              <span className='other-activity-item' key={key}>{activity}</span>
            )
          })}
        </div>
      </section>

    )
  }
};

export default HoverActivities;