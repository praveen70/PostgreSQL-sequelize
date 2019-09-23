import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Collapse , Select, Form , Input, Button   } from 'antd';
import { getCategoriesActionStart  } from '../../action/getCategoriesAction';
import { productStart } from '../../action/productAction'
import Dashboard from '../Home'
import './product.css';
const { Panel } = Collapse;
const { Option } = Select;
const { TextArea } = Input;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
 
class Product extends Component {
  state = {
    value: '',
    categoryCategoryID: ''
  }
   handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.productStart(values)
          }
        });
      };

      componentDidMount () {
          this.props.getCategoriesActionStart()
         this.props.form.validateFields();
       
      }


      onChange = (id) => {
        this.setState({ id :  id})
     }

     onCategoriesChange = (id) => {
        this.setState({ id :  id})
     }
     onCategoriesSearch = (val) => {
        console.log('search:', val);
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
     
     handleChange = id => {
      this.setState({ categoryCategoryID: id });
    };

  render() {
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
  const catgoriesError = isFieldTouched('categories') && getFieldError('categories');
  const productError = isFieldTouched('productName') && getFieldError('productName');
  const productnameError = isFieldTouched('productFullName') && getFieldError('productFullName');
  const processorError = isFieldTouched('processor') && getFieldError('processor');
  const priceError = isFieldTouched('price') && getFieldError('price');
  const cameraError = isFieldTouched('camera') && getFieldError('camera');
  const batteryError = isFieldTouched('battery') && getFieldError('battery');
 const descriptionError = isFieldTouched('description') && getFieldError('description');
  
    return (
      <div>
      <Dashboard>
          <Collapse accordion>
                <Panel header="Product" key="1">
                <Form layout="inline" onSubmit={this.handleSubmit} className="d-flex align-content-start flex-wrap">
                <div>

                <Form.Item  label="Select Categories" validateStatus={catgoriesError ? 'error' : ''} help={catgoriesError || ''}>
                {getFieldDecorator("categoryCategoryID", {
                  rules: [
                    {
                      required: true,
                      message: "Please select categories"
                    }
                  ]
                })(
                  <Select
                  className="select"
                    placeholder="Please Select catgories"
                    showSearch
                  value={this.state.categoryID}
                  defaultActiveFirstOption={false}
                  showArrow={false}
                  onSearch={this.handleSearch}
                  onChange={() => this.handleChange()}
                  notFoundContent={null}
                  >
                    {this.props.payload.map(d => (
                      <Option key={d.categoryID}>{d.categoryName}</Option>
                    ))}
                  </Select>
                )}
              </Form.Item>

                    <Form.Item validateStatus={productError ? 'error' : ''} help={productError || ''} label="Product">
                        {getFieldDecorator('productName', {
                            rules: [{ required: true, message: 'Please input your productname!' }],
                        })(
                            <Input
                            placeholder="Product Name"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item validateStatus={productnameError ? 'error' : ''} help={productnameError || ''} label="Product Full Name">
                        {getFieldDecorator('productFullName', {
                            rules: [{ required: true, message: 'Please input your productfullname!' }],
                        })(
                            <Input
                            placeholder="Product Full Name"
                            />,
                        )}
                    </Form.Item>
                    </div>
                   <Form.Item validateStatus={processorError ? 'error' : ''} help={processorError || ''} label="Processor">
                        {getFieldDecorator('processor', {
                            rules: [{ required: true, message: 'Please input your processor!' }],
                        })(
                         
                            <Input
                            placeholder="Processor"
                            />,
                        )}
                    </Form.Item>
                     <Form.Item validateStatus={priceError ? 'error' : ''} help={priceError || ''} label="Price">
                        {getFieldDecorator('price', {
                            rules: [{ required: true, message: 'Please input your price!' }],
                        })(
                            <Input
                            placeholder="Price"
                            />,
                        )}
                    </Form.Item> 
                    <Form.Item validateStatus={cameraError ? 'error' : ''} help={cameraError || ''} label="Camera">
                        {getFieldDecorator('camera', {
                            rules: [{ required: true, message: 'Please input your camera!' }],
                        })(
                            <Input
                            placeholder="Camera"
                            />,
                        )}
                    </Form.Item>

                    <Form.Item validateStatus={batteryError ? 'error' : ''} help={batteryError || ''} label="Battery">
                        {getFieldDecorator('battery', {
                            rules: [{ required: true, message: 'Please input your battery!' }],
                        })(
                            <Input
                            placeholder="Battery"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''} label="Description">
                        {getFieldDecorator('description', {
                            rules: [{ required: true, message: 'Please input your battery!' }],
                        })(
                            <TextArea
                            value="praveen"
                            onChange={this.onChange}
                            placeholder="Description"
                            autosize={{ minRows: 3, maxRows: 5 }}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                  Submit
                </Button>
              </Form.Item>
                </Form>
                </Panel>
          </Collapse>
     </Dashboard>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        payload: state && state.getCategoriesData.payload,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getCategoriesActionStart: () => {dispatch( getCategoriesActionStart())},
      productStart : (data) => {dispatch(productStart(data))},
    }
  }


const Products =   withRouter(connect(mapStateToProps, mapDispatchToProps )(Product)); 

export default Form.create()(Products)