import React from 'react';
import Header from './Header';
import Carousal from './Carousal';
import TicketList from './TicketList';
import TopCategory from './TopCategory';
import SellerCategory from './SellerCategory';
import Featured from './Featured';
import Footer from './Footer';

class Zoonga extends React.Component{

  render() {
    return (
      <div>
        <Header/>
        <Carousal/>
        <TicketList/>
        <TopCategory/>
        <SellerCategory />
        <Featured />
        <Footer/>
      </div>
    )
  }
}

export default Zoonga;
