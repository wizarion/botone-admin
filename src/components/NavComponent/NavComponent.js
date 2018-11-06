import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Pane, Text, Avatar, Popover, Icon } from 'evergreen-ui';
import './NavComponent.css';

class NavComponent extends Component {
   render() {
      return (
         <nav>
            <Pane
               elevation={1}
               backgroundColor="white"
               width={'100%'}
               height={60}
               display="flex"
               justifyContent="space-between"
               flexDirection="row"
            >
               <div className="logo">
                  <img src={logo} className="App-logo" alt="logo" />
                  <Text size={600} id="company">BotOne</Text>
               </div>

               <Popover
                  content={
                     <Pane
                        width={80}
                        height={50}
                        display="flex"
                        alignItems="center"
                        paddingLeft={20}
                     >
                        <div className="item">
                           <Icon icon="log-out" marginRight={10}/>
                           <Text size={500} >Sair</Text>
                        </div>
                     </Pane>
                  }
               >
                  <Text>
                     <div className="user">
                        <Avatar hashValue="id_124" name="Eddie Jr" size={40} marginRight={16} />
                        <Text size={500} id="username">Eddie Jr.</Text>
                     </div>
                  </Text>
               </Popover>
            </Pane>
         </nav>
      );
   }
}

export default NavComponent;