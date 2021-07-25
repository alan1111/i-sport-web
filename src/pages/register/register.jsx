// eslint-disable-next-line
import { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";

import {
  preCls,
  regMapping,
  formItemLayout,
  tailFormItemLayout,
} from "./constant";

import { addUser } from '../fetch'

const Register = (props) => {
  const { name, phone } = regMapping;
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const res = await addUser(values);
    // props.history.push("/");
  };
  return (
    <div className={preCls}>
      <div className={`${preCls}-wx`}>
        <h3 className={`${preCls}-wx-desc`}>
          扫描二维码添加管理员微信，可免费领取体验机会呦!
        </h3>
        <img className={`${preCls}-wx-img`} src="/myWx.png" alt="" />
      </div>
      <Form
        {...formItemLayout}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="company"
          label="公司名称"
          rules={[
            {
              required: true,
              message: "请输入您在的公司名称",
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="请输入您在的公司名称" />
        </Form.Item>
        <Form.Item
          name="name"
          label="姓名"
          rules={[
            {
              required: true,
              message: "请输入您的姓名",
              whitespace: true,
            },
            // () => ({
            //   validator(_, value) {
            //     if (!value || name.test(value)) {
            //       return Promise.resolve();
            //     }

            //     return Promise.reject(new Error("请输入正确的姓名"));
            //   },
            // }),
          ]}
        >
          <Input placeholder="请输入您的姓名" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="手机号"
          rules={[
            {
              required: true,
              message: "请输入您的手机号",
            },
            // () => ({
            //   validator(_, value) {
            //     if (!value || phone.test(value)) {
            //       return Promise.resolve();
            //     }

            //     return Promise.reject(new Error("请输入正确的手机号"));
            //   },
            // }),
          ]}
        >
          <Input placeholder="请输入您的手机号" />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: "请输入您的密码",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="请输入您的密码" />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="确认密码"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "请确认您的密码",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error("您输入的两个密码不匹配"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="请确认您的密码" />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
