import React from 'react'
import { Card, Button } from 'antd';
import  './mobilenewlaunch.css'

const Newmobile = () => (
    <div style={{ background: '#ECECEC', padding: '30px', justifyContent: "space-between"}}>
        <Card title="Best Camera Smartphones" bordered={false} style={{ width: 1400 }} extra={<Button type="primary" ghost>VIEW ALL</Button>}>
            <div style={{display: 'flex', marginTop: '10px' , justifyContent: 'space-between'}}>
                <div class="ui special cards">
         <Card bordered={false} style={{ width: 400 }}
            style={{ minHeight: '100%'}}
            cover={<img alt="example" src="Redmi Note 7 Pro (From ₹13,999)" src="https://rukminim1.flixcart.com/image/300/300/jt641ow0/mobile/d/w/k/mi-redmi-note-7-pro-na-original-imafe4bbyfppbnuu.jpeg?q=70" />}>
                <strong><p class="iUmrbN" >Redmi Note 7 Pro</p></strong>   
                <strong><p class="iUmrbN" style={{ color: 'green',  marginTop: 10 }}>From ₹13,999</p></strong>   
                <strong><p class="iUmrbN" style={{ marginTop: 10 }} >48MP+5MP|13MP Camera</p></strong>   
            </Card>
             <Card bordered={false} style={{ width: 400 }}
            style={{ minHeight: '100%'}}
            cover={<img alt="example" src="Redmi Note 7 Pro (From ₹13,999)" src="https://rukminim1.flixcart.com/image/300/300/jt641ow0/mobile/d/w/k/mi-redmi-note-7-pro-na-original-imafe4bbyfppbnuu.jpeg?q=70" />}>
                <strong><p class="iUmrbN" >Oppo F11 pro</p></strong>   
                <strong><p class="iUmrbN" style={{ color: 'green',  marginTop: 10 }}>48MP +5MP 16MP Camera</p></strong>   
                <strong><p class="iUmrbN" style={{ marginTop: 10 }} >Just ₹24,990</p></strong>   
            </Card>
            <Card bordered={false} style={{ width: 400 }}
            style={{ minHeight: '100%'}}
            cover={<img alt="example" src="Redmi Note 7 Pro (From ₹13,999)" src="https://rukminim1.flixcart.com/image/300/300/jvcp9jk0/mobile/a/u/x/oppo-f11-pro-cph1969-original-imafec8h3uqk3fqw.jpeg?q=70" />}>
                <strong><p class="iUmrbN" >Samsung S10 Series </p></strong>   
                <strong><p class="iUmrbN" style={{ color: 'green',  marginTop: 10 }}>Ultra-wide Camera</p></strong>   
                <strong><p class="iUmrbN" style={{ marginTop: 10 }} >From ₹55,900</p></strong>   
            </Card>
            <Card bordered={false} style={{ width: 400 }}
            style={{ minHeight: '100%'}}
            cover={<img alt="example" src="Redmi Note 7 Pro (From ₹13,999)" src="https://rukminim1.flixcart.com/image/300/300/jsyyufk0/mobile/b/w/f/samsung-galaxy-a50-sm-a505fzwdins-original-imafefghh95xxr6d.jpeg?q=70" />}>
                <strong><p class="iUmrbN" >Samsung A50</p></strong>   
                <strong><p class="iUmrbN" style={{ color: 'green',  marginTop: 10 }}>25MP+5MP + 8MP Camera</p></strong>   
                <strong><p class="iUmrbN" style={{ marginTop: 10 }} >From ₹19,990</p></strong>   
            </Card>
            <Card bordered={false} style={{ width: 400 }}
            style={{ minHeight: '100%'}}
            cover={<img alt="example" src="Redmi Note 7 Pro (From ₹13,999)" src="https://rukminim1.flixcart.com/image/300/300/jtrjngw0/mobile/2/t/v/realme-3-rmx1825-original-imaferd5uzuyxrsv.jpeg?q=70" />}>
                <strong><p class="iUmrbN" >Realme 3</p></strong>   
                <strong><p class="iUmrbN" style={{ color: 'green',  marginTop: 10 }}>13MP+2MP |13MP Camera</p></strong>   
                <strong><p class="iUmrbN" style={{ marginTop: 10 }} >From ₹8,999</p></strong>   
            </Card>
   
</div>
  
    </div>
    </Card>
  </div>
)

export default Newmobile;
