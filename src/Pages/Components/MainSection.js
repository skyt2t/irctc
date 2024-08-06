import React, {Component} from 'react';
import {Row, Col, Icon, Input, DatePicker} from 'antd';
import Time from 'react-time';

function onChange(date, dateString) {
  console.log(date, dateString);
}

class MainSection extends Component {

  render() {
    var tempDate = new Date();
    var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' | '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
    const currDate = date;

    return (
      <div class="mainsection">
      <Row>
        <Col span={6} offset={2}>
          <div className="bookticketcontainer">
            <h1 className="head"> BOOK </h1>
            <h2 className="headsub"> YOUR TICKET </h2>
            <Icon className="icon" type="car" />
            <div className="time">{currDate}</div>
            <Input placeholder="From*" />
            <Input placeholder="To*" />
            <DatePicker onChange={onChange} />
          </div>
        </Col>
      </Row>
    </div>
  );
  }

}

export default MainSection;
