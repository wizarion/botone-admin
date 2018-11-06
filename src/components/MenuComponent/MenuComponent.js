import React, { Component } from 'react';
import { Icon } from 'evergreen-ui';
import './MenuComponent.css';

class MenuComponent extends Component {
   render() {
      return (
         <div className="side-menu">
            <div className="options">
               <div className="item">
                  <Icon icon="home" />
                  <span className="title">Home</span>
               </div>
               <div className="item">
                  <Icon icon="settings" />
                  <span className="title">Configurações</span>
               </div>
            </div>
         </div>
      );
   }
}

export default MenuComponent;