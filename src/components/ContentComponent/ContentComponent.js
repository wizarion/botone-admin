import React, { Component } from 'react';
import { Pane, Text } from 'evergreen-ui';
import './ContentComponent.css';

class ContentComponent extends Component {
   render() {
      return (
         <Pane
            minHeight={'100%'}
            width={'100%'}
            display="flex"
            backgroundColor="red"
            alignItems="center"
            justifyContent="center"
         >
            <Text>Pane</Text>
         </Pane>
      );
   }
}

export default ContentComponent;