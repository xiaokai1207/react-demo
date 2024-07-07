import { useContext } from 'react';
import { AuthContext } from '../../components/auth';
import LogoIcon from '../../assets/imgs/logo.svg';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);

  const onFinish = (values: any) => {
    setAuth({
      user: values.username,
      loading: false,
    });
    localStorage.setItem('user', values.username);
    navigate('/receiveStock')
  };

  return <div className="h-[100vh] bg-cover bg-[url('../../assets/imgs/loginBg.png')] flex-col flex items-center pt-[160px]">
    <div className='flex items-center'>
      <img className='w-12 h-12 mr-4' src={LogoIcon} alt='' />
      <span className='text-xl'>xxx バックグラウンド管理システム</span>
    </div>
    <Form
      name="normal_login"
      className="mt-12"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'ユーザー名を入力してください' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="ユーザー名" className="w-[300px]" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'パスワードを入力してください' }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="ひそかに言う"
          className="w-[300px]"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-[300px]">
          ログイン＃ログイン＃
        </Button>
      </Form.Item>
    </Form>
  </div>;
}

export default Login;