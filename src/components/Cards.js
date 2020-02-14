import React from 'react';
import SampleCard from './SampleCard';

const wrapperStyle = {
  display: 'flex',
}
class Cards extends React.Component {
  state = { 
    cards: [
      {
        id: 1,
        name: 'Jane',
        year: 2015,
        info: 'Jane is a musician living in Nashville.',
        friend: 10,
      },
      {
        id: 2,
        name: 'Tom',
        year: 2016,
        info: 'Tom is a comedian living in Boston.',
        friend: 30,
      },
      {
        id: 3,
        name: 'Joe',
        year: 2018,
        info: 'Joe is a teacher living in New York.',
        friend: 27,
      },
      {
        id: 4,
        name: 'Amy',
        year: 2020,
        info: 'Amy is a freelandcer living in Portland.',
        friend: 12,
      }
    ]
   }
  render() { 

    return ( 
      <div style={wrapperStyle}>
      {this.state.cards.map(card => (
        <SampleCard key={card} image={card.id} name={card.name} year={card.year} info={card.info} friend={card.friend}/>
      ))}
      </div>

     );
  }
}
 
export default Cards;