import React from 'react';

class SampleCard extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div className="ui card" style={{ margin: '5px'}}>
      <div className="image"><img src={`https://i.pravatar.cc/300$? ${this.props.image}`} alt="avatar"/></div>
      <div className="content">
        <div className="header">{this.props.name}</div>
        <div className="meta"><span className="date">Joined in {this.props.year}</span></div>
        <div className="description">{this.props.info}</div>
      </div>
      <div className="extra content">
        <i aria-hidden="true" className="user icon"></i>
        {this.props.friend} Friends
      </div>
    </div>
     );
  }
}
 
export default SampleCard;