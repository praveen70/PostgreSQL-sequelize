import React, { Component } from 'react';
import { Collapse, Form, Select, Button, Upload, Icon, message, Modal } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductActionStart } from '../../action/getProductAction';
import { uploadFileStart } from '../../action/productFileUploadAction';
import axios from 'axios';
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
		values: [],
		previewVisible: false,
		previewImage: '',
		fileList: []
	};

	componentDidMount() {
		this.props.getProductActionStart();
	}
	handleCancel = () => this.setState({ previewVisible: false });

	handlePreview = (file) => {
		this.setState({
			previewImage: file.thumbUrl,
			previewVisible: true
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			this.normFile();
			if (!err) {
				let formData = new FormData();
				let { productProductID } = values;
				formData.append('upload', this.state.fileList[0].originFileObj);
				formData.append('productProductID', productProductID);
				axios
					.post('http://localhost:8082/api/uploadfile', formData)
					.then((res) => {
						console.log('res', res);
					})
					.catch((err) => {
						console.log('err', err);
					});
			}
		});
	};
	handleChange = (id) => {
		this.setState({ productProductID: id });
	};

	handleUpload = ({ fileList }) => {
		this.setState({ fileList });
	};

	normFile = (e) => {
		if (Array.isArray(e)) {
			this.setState({ selectedfile: e.file });
			return e;
		}
		return e && e.fileList;
	};

	render() {
		const { previewVisible, previewImage, fileList } = this.state;
		const uploadButton = (
			<div>
				<Icon type="plus" />
				<div className="ant-upload-text">Upload</div>
			</div>
		);

		let data = this.props.payload;
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		const catgoriesError = isFieldTouched('productProductID') && getFieldError('productProductID');
		return (
			<div>
				<Collapse onChange={this.callback}>
					<Panel header="Add Product File" key="1">
						<Form
							onSubmit={this.handleSubmit}
							className="d-flex "
							method="post"
							enctype="multipart/form-data"
						>
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
										defaultActiveFirstOption={false}
										showArrow={false}
										onSearch={this.handleSearch}
										onChange={() => this.handleChange()}
										notFoundContent={null}
									>
										{data.map((item) => (
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
									<Upload
										listType="picture-card"
										fileList={fileList}
										onPreview={this.handlePreview}
										onChange={this.handleUpload}
										beforeUpload={() => false} // return false so that antd doesn't upload the picture right away
									>
										{uploadButton}
									</Upload>
								)}
							</Form.Item>
							<Form.Item>
								<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
									<img alt="example" style={{ width: '100%' }} src={previewImage} />
								</Modal>
							</Form.Item>
						</Form>
						<Button
							type="primary"
							htmlType="submit"
							disabled={hasErrors(getFieldsError())}
							onClick={(e) => this.handleSubmit(e)}
						>
							Submit
						</Button>
					</Panel>
				</Collapse>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('componentpage', state);
	return {
		payload: state.getProductData.payload
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getProductActionStart: () => {
			dispatch(getProductActionStart());
		},
		uploadFileStart: (values) => {
			dispatch(uploadFileStart(values));
		}
	};
};

const Fileupload = withRouter(connect(mapStateToProps, mapDispatchToProps)(Productfileupload));

export default Form.create()(Fileupload);
