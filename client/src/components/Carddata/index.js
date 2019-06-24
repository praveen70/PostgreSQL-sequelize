import React from 'react'
import { Card,  Button, Radio } from 'antd';
import  './carddata.css'
const Carddata = () => (
    <div style={{ background: '#ECECEC', padding: '25px'}}>
    <Card title="Deals of the Day" bordered={false} style={{ width: 1400 }} extra={ <Button type="primary" ghost>VIEW ALL</Button>}>
        <div style={{display: 'flex', marginTop: '10px' }}>
            <div class="ui special cards">
     <Card bordered={false}
        cover={<img alt="example" src="Redmi Note 7 Pro (From ₹13,999)" src="https://rukminim1.flixcart.com/image/300/300/shoe/q/e/h/sx0277g-7-sparx-blue-original-imaeqgfyzgmgpp4n.jpeg?q=70" />}>
            <strong><p class="iUmrbN" >Men's Footwear</p></strong>   
            <strong><p class="iUmrbN" style={{ color: 'green',  marginTop: 10 }}>From ₹199+Extra 5%</p></strong>   
            <strong><p class="iUmrbN" style={{ marginTop: 10 }} >Red Tape, Sparx & more</p></strong>   
        </Card>
         <Card bordered={false} 
        cover={<img alt="example" src="Redmi Note 7 Pro (From ₹13,999)" src="https://rukminim1.flixcart.com/flap/300/300/image/7599515653b7150f.jpg?q=70" />}>
            <strong><p class="iUmrbN" >Oppo F11 pro</p></strong>   
            <strong><p class="iUmrbN" style={{ color: 'green',  marginTop: 10 }}>48MP +5MP 16MP Camera</p></strong>   
            <strong><p class="iUmrbN" style={{ marginTop: 10 }} >Just ₹24,990</p></strong>   
        </Card>
        <Card bordered={false} 
        cover={<img alt="example" src="Redmi Note 7 Pro (From ₹13,999)" src="https://rukminim1.flixcart.com/flap/300/300/image/050993a5517eeb9c.jpg?q=70" />}>
            <strong><p class="iUmrbN" >Best Of Trimmers & Hair Styling</p></strong>   
            <strong><p class="iUmrbN" style={{ color: 'green',  marginTop: 10 }}>From ₹249</p></strong>   
            <strong><p class="iUmrbN" style={{ marginTop: 10 }} >By Nova, Syska & more</p></strong>   
        </Card>
         <Card bordered={false}   style={{ minHeight: '100%'}}
        cover={<img alt="example" src="Redmi Note 7 Pro (From ₹13,999)" src="https://rukminim1.flixcart.com/image/300/300/wardrobe-closet/y/v/v/nv-001k-carbon-steel-novatic-navy-blue-original-imaekx7egff8qvwp.jpeg?q=70" />}>
            <strong><p class="iUmrbN" >Collapsible Wardrobes & more</p></strong>   
            <strong><p class="iUmrbN" style={{ color: 'green',  marginTop: 10 }}>From ₹199</p></strong>   
            <strong><p class="iUmrbN" style={{ marginTop: 10 }} >Space Saving Furniture</p></strong>   
        </Card>
        
      {/*  <Card bordered={false} style={{ width: 400 }}
        style={{ minHeight: '100%'}}
        cover={<img alt="example" src="Redmi Note 7 Pro (From ₹13,999)" src="https://rukminim1.flixcart.com/image/300/300/jtrjngw0/mobile/2/t/v/realme-3-rmx1825-original-imaferd5uzuyxrsv.jpeg?q=70" />}>
            <strong><p class="iUmrbN" >Realme 3</p></strong>   
            <strong><p class="iUmrbN" style={{ color: 'green',  marginTop: 10 }}>13MP+2MP |13MP Camera</p></strong>   
            <strong><p class="iUmrbN" style={{ marginTop: 10 }} >From ₹8,999</p></strong>   
        </Card> */}

</div>

</div>
</Card>

</div>
)

export default Carddata
