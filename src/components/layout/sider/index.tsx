import { useState } from 'react';
import { Layout } from 'antd';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { DeliveredProcedureOutlined, AccountBookOutlined, SelectOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: '注文管理',
    icon: <AccountBookOutlined />,
    children: [
      { key: 'order', label: <Link to={'/order'}>注文管理</Link> },
    ],
  },
  {
    key: 'sub2',
    label: '入荷管理',
    icon: <DeliveredProcedureOutlined />,
    children: [
      { key: 'receiveStock', label: <Link to={'/receiveStock'}>入荷依頼管理</Link> },
      { key: 'receiveStockHandle', label: <Link to={'/receiveStockHandle'}>入庫処理</Link> },
    ],
  },
  {
    key: 'sub3',
    label: '出荷管理',
    icon: <SelectOutlined />,
    children: [
      { key: 'leaveStock', label: <Link to={'/leaveStock'}>出荷依頼管理</Link> },
      { key: 'leaveStockHandle', label: <Link to={'/leaveStockHandle'}>出庫処理</Link> },
    ],
  },
];

function Sider() {

  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation();

  let selectedKeys: string[] | undefined = [];

  selectedKeys = [location.pathname.slice(1)];

  return <Layout.Sider
    theme="light"
    width={256}
    className='text-black bg-white'
    collapsible
    collapsed={collapsed}
    collapsedWidth={80}
    onCollapse={(value) => setCollapsed(value)}
  >
    <Menu
      defaultSelectedKeys={selectedKeys}
      defaultOpenKeys={['sub1', 'sub2', 'sub3']}
      mode="inline"
      items={items}
    />
  </Layout.Sider>;
}

export default Sider;