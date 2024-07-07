import { useContext } from 'react';
import { Layout, Dropdown } from 'antd';
import type { MenuProps } from 'antd';

import { LogoutOutlined } from '@ant-design/icons';

import { AuthContext } from '../../auth';

import LogoIcon from '../../../assets/imgs/logo.svg';
import AvatarIcon from '../../../assets/imgs/avatar.png';

function Header() { 

  const auth = useContext(AuthContext);

  const handleLogout = () => { 
    auth.setAuth({ user: '', loading: false });
    localStorage.removeItem('user');
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='flex items-center' onClick={handleLogout}>
          <LogoutOutlined className='mr-2 text-slate-500' />
          <span>ログアウト</span>
        </div>
      ),
    },
  ]

  return (
    <Layout.Header className='text-black bg-white flex justify-between ps-[20px] pe-[20px] h-[56px] border-b border-gray-200'>
      <div className='flex items-center cursor-pointer'>
        <img className='w-8' src={LogoIcon} alt='' />
        <span className='ml-4 text-xl'>Buyer</span>
        <span className='ml-2 text-xl'>Central</span>
      </div>
      <div className='flex items-center'>
        <Dropdown menu={{ items }} placement="bottom">
          <div className='flex items-center cursor-pointer pl-4 pr-4 hover:bg-gray-100 leading-10 rounded-lg'>
            <img className='w-4 h-4 mr-2' src={AvatarIcon} alt='' />
            <span>{auth.user}</span>
          </div>
        </Dropdown>
      </div>
    </Layout.Header>
  )
}

export default Header;