// eslint-disable-next-line
import { useState, useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { preCls, regMapping } from "./constant";

const Login = (props) => {
  const { phone} = regMapping;
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    props.history.push("/")
  };
  const info = () => {
    Modal.info({
      content: '请扫描二维码添加管理员微信获取',
    });
  }
  return (
    <div className={preCls}>
      <div className={`${preCls}-wx`}>
        <h3 className={`${preCls}-wx-desc`}>
          扫描二维码添加管理员微信，可免费领取体验机会呦!
        </h3>
        <img className={`${preCls}-wx-img`} src="/myWx.png" alt="" />
      </div>
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "请输入手机号",
            },
            () => ({
              validator(_, value) {
                if (!value || phone.test(value)) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error("请输入正确的手机号"));
              },
            }),
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="请输入手机号"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "请输入密码",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
        <Form.Item>
          <a href="/register">去注册</a>
          <span className="login-form-forgot" onClick={info}>
            忘记密码?
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
