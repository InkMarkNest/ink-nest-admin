import { FC, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Checkbox, Form, Input } from 'antd';

import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { RuleObject } from 'antd/es/form';

import { useUserStore } from '@/store';
import { login, getUserInfo } from '@/services';

import { CommonPath } from '@/router/Constant';

import { LoginParams } from '@/types/user';

import { LoginFormFinishedParams } from '@/types/login';

/**
 * 登录页面组件
 */
const Login: FC = () => {
  const navigate = useNavigate();

  const setUser = useUserStore.use.setUser();
  const setToken = useUserStore.use.setToken();
  const setRememberMe = useUserStore.use.setRememberMe();

  const [form] = Form.useForm();

  useEffect(() => {
    // form.validateFields(['nickname']);
  }, [form]);

  /**
   * 处理登录
   */
  const handleLogin = async (params: LoginParams) => {
    try {
      const loginRes = await login(params);

      setToken(loginRes.data.token);

      // 登录成功后获取并设置用户信息
      handleFetchAndSetUserInfo();
    } catch (error) {
      console.error('登录失败，错误详情:', error);
    }
  };

  /**
   *  获取并设置用户信息
   */
  const handleFetchAndSetUserInfo = async () => {
    try {
      const userInfoRes = await getUserInfo();

      if (userInfoRes.code !== 200) {
        console.error('获取用户信息失败:', userInfoRes);
      } else {
        console.log('获取用户信息成功:', userInfoRes);
        await setUser(userInfoRes.data.userInfo); // 如果获取用户信息成功，就更新用户状态

        navigate(CommonPath.MainLayout);
      }
    } catch (error) {
      console.error('获取用户信息失败，错误详情:', error);
    }
  };

  const onFinish = useCallback(
    async (values: LoginFormFinishedParams) => {
      const { username, password, rememberMe } = values;
      const loginParams = {
        username,
        password,
      };

      await handleLogin(loginParams);

      if (rememberMe) {
        await setRememberMe(rememberMe);
      }
    },
    [form],
  );

  const userNameValid = (_: RuleObject, value: string) => {
    // 正则表达式解释：
    // ^[a-zA-Z]+[-]? : 开头一位或多位字母，可以跟随一个“-”
    // ([a-zA-Z0-9]*[-]?)* : 中间部分可以有任意多的字母或数字，每个字母或数字后面可以跟一个“-”
    // [a-zA-Z0-9]+$ : 结尾必须是一个或多个字母或数字
    const userNamePattern = /^[a-zA-Z]+[-]?([a-zA-Z0-9]*[-]?)*[a-zA-Z0-9]+$/;

    if (!userNamePattern.test(value)) {
      return Promise.reject(
        new Error('用户名只能由字母和数字组成，可以包含"-"，但不能是纯数字，并且"-"不能在首尾'),
      );
    }

    return Promise.resolve();
  };

  const passwordValid = (_: RuleObject, value: string) => {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

    if (!passwordPattern.test(value)) {
      return Promise.reject(
        new Error(
          '密码长度应为8-20个字符,且至少包含一个大写字母、一个小写字母、一个数字和一个特殊字符',
        ),
      );
    }

    return Promise.resolve();
  };

  return (
    <div className="tw-container tw-flex tw-h-screen tw-items-center tw-justify-center">
      <Form
        className=" tw-h-56 tw-w-60"
        name="ink-login"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, validator: userNameValid, validateTrigger: 'onChange' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, validator: passwordValid, validateTrigger: 'onBlur' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="rememberMe" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className=" tw-mr-6">
            登 录
          </Button>
          <a className="" href="">
            忘记密码
          </a>
        </Form.Item>
      </Form>
    </div>
  );
};

export { Login };
