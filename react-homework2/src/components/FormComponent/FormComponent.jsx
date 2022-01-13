import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

class FormComponent extends Component {

    constructor(props) {
        super(props);

        this.layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
          };

          this.onFinish = this.onFinish.bind(this);
    }

    onFinish (values){
        console.log(values);
        this.props.addPost(values);
      };

    render() {
        return (
            <div>
                <Form
          {...this.layout}
          name="nest-messages"
          onFinish={this.onFinish}
        //   validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "userId"]}
            label="ID"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
          name={["user", "title"]}
            label="TITLE"
         
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "body"]} label="BODY">
            <Input />
          </Form.Item>
        
          <Form.Item wrapperCol={{ ...this.layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
            </div>
        );
    }
}

export default FormComponent;