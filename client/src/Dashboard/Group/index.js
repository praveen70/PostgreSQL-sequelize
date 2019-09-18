import React from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Button , Input, Form , Icon} from 'antd';
import { connect } from 'react-redux';
import { rootGroupnameStart  } from '../../action/rootAction';
import './group.css';
const Intialstate = {
             visible: false,
          confirmLoading: false,
          GroupName: ''
}
class Group extends React.Component {
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
  handleOk =  async () => {
    if(!this.state.GroupName){
        return false;
    }
    let GroupName = {
        GroupName: this.state.GroupName
    }
    this.setState({
        confirmLoading: this.props.loading,
      }); 
    await this.props.rootGroupnameStart(GroupName)
        this.setState({
            visible: false,
            confirmLoading:  !this.props.loading,
          });
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
  render() {
    const { visible, confirmLoading , GroupName } = this.state;
    return (
      <div>
        <div className="groupName">
            <Button size= 'large' type="primary" onClick={this.showModal} ghost>
                <Icon type="edit" />Add Source
            </Button>

        </div>
        <Modal
          title="Add Source"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
            <Form>
                <Form.Item label="Root Name">
                    <Input  placeholder="Enter A Name" allowClear name="GroupName" value={GroupName} onChange={(e) => this.inputChange(e)} />
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
     loading: state.getRootGroup.loading,
	}
  }
  
  const mapDispatchToProps = (dispatch) => {
	return {
        rootGroupnameStart: (GroupName) => { dispatch( rootGroupnameStart(GroupName) ) },
	}
  }
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Group));

