import React from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Button , Input, Form , Icon ,Menu, Dropdown, message, Select} from 'antd';
import { connect } from 'react-redux';
import {  rootGroupnameStart } from '../../action/getRootAction';
import './categories.css';
const { Option } = Select;

const Intialstate = {
             visible: false,
             confirmLoading: false,
            categoryName: '',
            id: '',
}
class Categories extends React.Component {
    state = {
        Intialstate
    };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  clearstate= () => {
      this.setState({...Intialstate})
  }
  componentDidMount =() => {
    this.props.rootGroupnameStart()
  }

  handleOk =  () => {
      let data = {
        groupGroupID : this.state.id,
        categoryName:  this.state.categoryName
      }
      console.log(data)
       this.clearstate();
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };
  
  inputChange = (e) => {
      const { name, value } =  e.target
      this.setState({ [name]: value });
      console.log(name, value);
  }
  
   onChange = (id) => {
     this.setState({ id :  id})
  }
  
   onBlur = () => {
    console.log('blur');
  }
  
   onFocus = () => {
    console.log('focus');
  }
  
   onSearch = (val) => {
    console.log('search:', val);
  }


  render() {
    const { visible, confirmLoading , categoryName } = this.state;
    return (
      
      <div>
        <div className="groupName">
            <Button size= 'large' type="primary" onClick={this.showModal} ghost>
                <Icon type="edit" />Add Categories
            </Button>
        </div>
        <Modal
          title="Add Category"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
            <Form className='d-flex justify-content-between'>
            <Form.Item label="Group Name">
            <Select
            showSearch
            style={{ width: 150 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSearch={this.onSearch}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
          {this.props.payload.map((item, index) => {
            return(
                <Option key={index} value={item.GroupID}>{item.GroupName}</Option>
                )
          })}
          </Select>
            </Form.Item>
            <Form.Item label="Categorie Name">
                 <Input label="Rootname" placeholder="Enter A Name" name="categoryName" value={categoryName} allowClear  onChange={(e) => this.inputChange(e)} />
             </Form.Item>
            </Form>

        </Modal>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
	return {
      payload: state.getRootGroup.payload
	}
  }
  
  const mapDispatchToProps = (dispatch) => {
	return {
        rootGroupnameStart: () => { dispatch( rootGroupnameStart() ) },
	}
  }
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories));

