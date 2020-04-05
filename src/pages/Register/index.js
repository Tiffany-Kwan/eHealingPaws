import React, { Component } from "react";
import { connect } from "dva";
import { Form, Input, Button, Icon } from "antd";
import styles from "./index.less";
const FormItem = Form.Item;
@connect((state) => ({
  register: state.register,
}))
@Form.create()
export default class Register extends Component {
  componentDidMount() {}
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields({ force: true }, (err, values) => {
      if (!err) {
        console.log("register page submit: ", values);
        this.props.dispatch({
          type: "register/accountSubmit",
          payload: values,
        });
      }
    });
  };
  render() {
    const {
      form,
      register: { submitting },
    } = this.props;

    const { getFieldDecorator } = form;

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 8 },
    };

    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

    // const Demo = () => {
    //   const onFinish = (value) => {
    //     console.log("Success", value);
    //   };
    // };
    return (
      <div className={styles.mian}>
        <Form {...layout} onSubmit={this.handleSubmit}>
          <FormItem label="First Name: ">
            {getFieldDecorator("firstName", { initialValue: null })(
              <Input size="large" autoComplete="off" placeholder="FirstName" />
            )}
          </FormItem>
          <FormItem label="Last Name: ">
            {getFieldDecorator("lastName", { initialValue: null })(
              <Input size="large" autoComplete="off" placeholder="LastNmae" />
            )}
          </FormItem>
          <FormItem label="Password: ">
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Please enter password." }],
              initialValue: null,
            })(
              <Input
                size="large"
                autoComplete="off"
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <FormItem label="Phone Number: ">
            {getFieldDecorator("phone", {
              rules: [
                { required: true, message: "Please enter phone number." },
              ],
              initialValue: null,
            })(<Input />)}
          </FormItem>
          <FormItem {...tailLayout}>
            <Button
              icon="login"
              size="large"
              loading={submitting}
              type="primary"
              htmlType="submit"
            >
              {"Login"}
            </Button>
          </FormItem>
        </Form>
      </div>
      // <Form
      //   onSubmit={this.handleSubmit}
      //   {...layout}
      //   name="basic"
      //   initialValues={{ remember: true }}
      //   // onFinish={onFinish}
      //   // onFinishFailed={onFinishFailed}
      // >
      //   <Form.Item
      //     label="FirstName"
      //     name="firstName"
      //     rules={[
      //       { required: true, message: "Please input your Firstname!" },
      //     ]}
      //   >
      //     <Input className={styles.loginInput} />
      //   </Form.Item>
      //   <Form.Item
      //     label="LastName"
      //     name="lastName"
      //     rules={[{ required: true, message: "Please input your Lastname!" }]}
      //   >
      //     <Input />
      //   </Form.Item>
      //   <Form.Item label="Age" name="age" rules={[{ required: false }]}>
      //     <Input />
      //   </Form.Item>

      //   <Form.Item {...tailLayout} name="remember" valuePropName="checked">
      //     <Checkbox>Remember me</Checkbox>
      //   </Form.Item>
      //   <Form.Item {...tailLayout}>
      //     <Button type="primary" htmlType="submit">
      //       Submit
      //     </Button>
      //   </Form.Item>
      // </Form>
    );
  }
}
// export default Form.create()(Register);
