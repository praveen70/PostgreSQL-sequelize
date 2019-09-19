import React from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Button , Input, Form , Icon ,Spin,  Select, message} from 'antd';
import { connect } from 'react-redux';
import {  rootGroupnameStart } from '../../action/getRootAction';
import { categoriesStart } from '../../action/categoriesAction';
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

  handleOk = async (e) => {
    e.preventDefault();
    let { id, categoryName } = this.state
    if( !id ||  !categoryName) {
      return false;
    }else{
      let data = {
        groupGroupID : id,
        categoryName: categoryName
      }
      console.log(data)
     await this.props.categoriesStart(data)
     message.success('Success');
       this.clearstate();
    }
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
      
      <div className="mx-3">
        <div className="groupName">
            <Button size= 'large' type="primary" onClick={this.showModal} ghost>
                <Icon type="edit" />Add Categories
            </Button>
        </div>
        <Modal
          title="Add Category"
          visible={visible}
          onOk={(e) =>this.handleOk(e)}
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
            notFoundContent={this.props.loading ? <Spin size="small" /> : null}
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
      payload: state.getRootGroup.payload,
      loading:state.getRootGroup.loading,
      categoriesPayload: state.categories.payload,
	}
  }
  
  const mapDispatchToProps = (dispatch) => {
	return {
        rootGroupnameStart: () => { dispatch( rootGroupnameStart() ) },
        categoriesStart: (data) => { dispatch( categoriesStart(data) ) },
	}
  }
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories));

