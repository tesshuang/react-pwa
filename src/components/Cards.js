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
      },
      {
        id: 5,
        name: 'Jay',
        year: 2010,
        info: 'Jay is a teacher living in Seatle.',
        friend: 12,
      },
      {
        id: 6,
        name: 'Rob',
        year: 2012,
        info: 'Rob is a developer living in Portland.',
        friend: 18,
      },
      {
        id: 7,
        name: 'Tam',
        year: 2015,
        info: 'Tam is a designer living in Vancouver.',
        friend: 15,
      },
      {
        id: 8,
        name: 'Bob',
        year: 2016,
        info: 'Amy is a freelandcer living in Austin.',
        friend: 12,
      },
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