import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Menu, Dropdown } from 'antd';
import '../styles.css';
import bluelogo from '../Images/blue-logo.jpg';
import whitelogo from '../Images/whitelogo.png';

const SubMenu = Menu.SubMenu;
const trains = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">Book Ticket</a>
    </Menu.Item>
    <SubMenu title="Cancel Ticket">
      <Menu.Item>E-tickets/I-tickets</Menu.Item>
      <Menu.Item>Counter Ticket</Menu.Item>
    </SubMenu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">PNR Enquiry</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">Train Schedule</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">Track Your Train</a>
    </Menu.Item>
  </Menu>
);

const holidays = (
  <Menu>
    <SubMenu title="Special Trains">
      <Menu.Item>Tourist Train</Menu.Item>
      <Menu.Item>Maharaja's Express</Menu.Item>
    </SubMenu>
    <SubMenu title="Packages">
      <Menu.Item>Tour Packages</Menu.Item>
      <Menu.Item>Air Packages</Menu.Item>
      <Menu.Item>International Packages</Menu.Item>
    </SubMenu>
    <SubMenu title="Accomodation">
      <Menu.Item>Hotel and Lounge</Menu.Item>
      <Menu.Item>Retiring Room</Menu.Item>
    </SubMenu>
  </Menu>
);

const loyalty = (
  <Menu>
    <Menu.Item> About IRCTC SBI Credit Card </Menu.Item>
    <Menu.Item> IRCTC SBI Platinum Card e-apply </Menu.Item>
  </Menu>
);

const meals = (
    <Menu>
      <Menu.Item> E-Catering </Menu.Item>
      <Menu.Item> Standard Menu Rates </Menu.Item>
    </Menu>
);

const promotions = (
    <Menu>
      <Menu.Item>IRCTC Rail Connect App</Menu.Item>
      <Menu.Item>IRCTC Tourism App</Menu.Item>
      <Menu.Item>IRCTC Air App</Menu.Item>
      <Menu.Item>WiFi Railway Stations</Menu.Item>
      <SubMenu title="IRCTC SBI Credit Card">
        <Menu.Item> About IRCTC SBI Credit Card </Menu.Item>
        <Menu.Item> IRCTC SBI Platinum Card e-apply </Menu.Item>
      </SubMenu>
      <Menu.Item>National Voter's Service Portal</Menu.Item>
      <Menu.Item>Mahila E-Haat</Menu.Item>
      <Menu.Item>Support SHG/Handicraft</Menu.Item>
    </Menu>
);

const service = (
  <Menu>
    <Menu.Item>Wifi Railway Stations</Menu.Item>
    <Menu.Item>Battery Operated Cars</Menu.Item>
    <Menu.Item>E-bedroll</Menu.Item>
    <Menu.Item>E-wheelchair</Menu.Item>
    <Menu.Item>Book a Cab</Menu.Item>
    <Menu.Item>Retiring Room</Menu.Item>
  </Menu>
);

const irctcwallet = (
    <Menu>
      <Menu.Item>About IRCTC eWallet</Menu.Item>
      <Menu.Item>IRCTC eWallet User Guide</Menu.Item>
    </Menu>
);

const more = (
  <Menu>
    <Menu.Item>Lucky Draw</Menu.Item>
    <Menu.Item>Link Your Aadhaar</Menu.Item>
    <Menu.Item>Counter Ticket Cancellation</Menu.Item>
  </Menu>
);

class Navbar extends Component {

  render() {
    return (
      <div className="navbox">
        <Row>
          <Col span={4}>
            <img src={bluelogo} alt="IRCTC Logo" className="bluelogo"/>
          </Col>
              <Col span={16} className="middlebox">
                  <ul class="list">
                    <li className="listelement">
                    <Dropdown overlay={trains}>
                      <a className="ant-dropdown-link" href="#">
                        TRAINS
                      </a>
                    </Dropdown>
                  </li>
                  <li className="listelement">
                    <Dropdown overlay={holidays}>
                      <a className="ant-dropdown-link" href="#">
                        HOLIDAYS
                      </a>
                    </Dropdown>
                  </li>
                  <li className="listelement">
                    <Dropdown overlay={loyalty}>
                      <a className="ant-dropdown-link" href="#">
                        LOYALTY
                      </a>
                    </Dropdown>
                  </li>
                  <li className="listelement">
                    <Dropdown overlay={meals}>
                      <a className="ant-dropdown-link" href="#">
                        MEALS
                      </a>
                    </Dropdown>
                  </li>
                  <li className="listelement">
                    <Dropdown overlay={promotions}>
                      <a className="ant-dropdown-link" href="#">
                        PROMOTIONS
                      </a>
                    </Dropdown>
                  </li>
                  <li className="listelement">
                    <Dropdown overlay={service}>
                      <a className="ant-dropdown-link" href="#">
                        SERVICE AT STATIONS
                      </a>
                    </Dropdown>
                  </li>
                  <li className="listelement">
                    <Dropdown overlay={irctcwallet}>
                      <a className="ant-dropdown-link" href="#">
                        IRCTC eWallet
                      </a>
                    </Dropdown>
                  </li>
                  <li className="listelement">
                      <a className="ant-dropdown-link" href="#">
                        ALERTS
                      </a>
                  </li>
                  <li className="listelement">
                    <Dropdown overlay={more}>
                      <a className="ant-dropdown-link" href="#">
                        MORE
                      </a>
                    </Dropdown>
                  </li>
                </ul>
             </Col>
          <Col span={4} className="whitelogoContainer" >
            <img src={whitelogo} alt="IRCTC Logo" className="whitelogo" />
          </Col>
        </Row>
      </div>
    );
  }

}

export default Navbar;
