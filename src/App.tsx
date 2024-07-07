import { useContext } from 'react';
import Router from './router'
import { AuthContext } from './components/auth';
import { Layout } from 'antd';
import Header from './components/layout/header';
import Sider from './components/layout/sider';

const { Content } = Layout;

const App: React.FC = () => { 

  const auth = useContext(AuthContext);

  const isLogin = Boolean(auth.user);
  
  if (!isLogin) { 
    return (
      <Layout>
        <Router />
      </Layout>
    )
  }
  return (
    <Layout>
      <Header />
      <Layout>
        <Sider />
        <Content className='min-w-[800px] min-h-[calc(100vh-56px)]'>
          <Router />
        </Content>
      </Layout>
    </Layout>
  )
};

export default App;