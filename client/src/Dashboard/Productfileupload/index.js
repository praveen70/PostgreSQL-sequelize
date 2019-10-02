import React, { Component } from 'react';
import { Collapse, Form, Select, Button, Upload, Icon, message } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductActionStart } from '../../action/getProductAction';
import { uploadFileStart } from '../../action/productFileUploadAction';
import './productfileupload.css';

const { Panel } = Collapse;
const { Option } = Select;
const { Dragger } = Upload;

function hasErrors(fieldsError) {
	return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
class Productfileupload extends Component {
	state = {
        id: '',
		selectedfile: '',
		values:[]
    };
    
	callback(key) {
		// console.log(key);
	}

	componentDidMount() {
		this.props.getProductActionStart();
    }
    
    // onChange = (e) => {
    //     const files = Array.from(e.files);
    //     console.log(e.file)
    //     const formData = new FormData()
    
    //     files.forEach((file, i) => {
    //       formData.append(i, file)
    //     })
    
        
    //   }

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			this.normFile()
			if (!err) {
				this.props.uploadFileStart(values)
                // const formData = new FormData()
                // formData.append("image" ,values.dragger[0]);
                // values.dragger.map((item, i) => {
                //     let  data = {
                //         type:item.originFileObj.type,
                //         fileName:item.originFileObj.name,
                //         productProductID:values.productProductID,
                //         size:item.originFileObj.size
                //         // docPath: ,
                //         // path:,
                //     }
                //     console.log("formData", data)
                //    let x= formData.append("image" ,data);
                //    console.log("formData", x)
                // });
               
               
               
			}
		});
	};
	handleChange = (id) => {
		this.setState({ productProductID: id });
	};

	normFile = (e) => {
		if (Array.isArray(e)) {
          console.log(e.file)
            this.setState({ selectedfile : e.file})
			return e;
		}
		return e && e.fileList;
	};

	render() {
		let data = this.props.payload;
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		const catgoriesError = isFieldTouched('productProductID') && getFieldError('productProductID');
		return (
			<div>
				<Collapse onChange={this.callback}>
					<Panel header="Add Product File" key="1">
						<Form onSubmit={this.handleSubmit} className="d-flex ">
							<Form.Item
								label="Select Product"
								validateStatus={catgoriesError ? 'error' : ''}
								help={catgoriesError || ''}
							>
								{getFieldDecorator('productProductID', {
									rules: [
										{
											required: true,
											message: 'Please select product'
										}
									]
								})(
									<Select
										className="select"
										placeholder="Please Select Product"
										showSearch
										// value={this.state.categoryID}
										defaultActiveFirstOption={false}
										showArrow={false}
										onSearch={this.handleSearch}
										onChange={() => this.handleChange()}
										notFoundContent={null}
									>
										{data.map((item) =>  (
											<Option key={item.productID}>{item.productFullName}</Option>
										))}
									</Select>
								)}
							</Form.Item>
							<Form.Item label="File upload" style={{ marginLeft: 200 }}>
								{getFieldDecorator('dragger', {
									valuePropName: 'fileList',
									getValueFromEvent: this.normFile
								})(
									<Upload.Dragger name="files" beforeUpload={this.normFile} action="http://localhost:8082/api/uploadfile">
										<p className="ant-upload-drag-icon">
											<Icon type="inbox" />
										</p>
										<p className="ant-upload-text">Click or drag file to this area to upload</p>
									</Upload.Dragger>
									
									
								)}
							</Form.Item>
							
						</Form>
						<Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} onClick={(e) => this.handleSubmit(e)}>
							Submit
						</Button>
					</Panel>
				</Collapse>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log("componentpage", state)
	return {
		payload: state.getProductData.payload
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getProductActionStart: () => {
			dispatch(getProductActionStart())
		},
		uploadFileStart : (values) => {
			dispatch(uploadFileStart(values))
		}
	};
};

const Fileupload = withRouter(connect(mapStateToProps, mapDispatchToProps)(Productfileupload));

export default Form.create()(Fileupload);
  