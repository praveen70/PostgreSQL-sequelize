import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import  './carddata.css'
const Carddata = () => (
    <div style={{display: 'flex'}}>
  <Card style={{minWidth: 1400, marginTop:20}}>
   
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card style={{display: "flex"}}>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' style={{ position: "absolute;",
   
    maxWidth: '100%;',
    maxHeight: '100%;'}} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' style={{ position: "absolute;",
   
    maxWidth: '100%;',
    maxHeight: '100%;'}} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
  
      
    </Card.Content>
  </Card>

    </div>
    
)

export default Carddata
