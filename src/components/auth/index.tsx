import { LoadingOutlined } from '@ant-design/icons';
import { createContext, useState, useEffect, ReactNode } from 'react';

interface Auth {
  user: string;
  loading?: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType extends Auth {
  setAuth: (auth: Auth) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: '',
  loading: true,
  setAuth: () => {},
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<Auth>({ user: '', loading: true });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAuthInfo = async () => {
      try {
        setLoading(true);
        const user = localStorage.getItem('user') || '';
        setTimeout(() => {
          setAuth({
            user,
            loading: false,
          });
          setLoading(false);
        }, 200);
      } catch (error) {
        console.error('Failed to fetch auth info:', error);
      }
    };

    fetchAuthInfo();
  }, []);

  if (loading) {
    return (
      <div className='mt-10 text-center'>
        <LoadingOutlined className='mr-2' />
        ロード中...
      </div>
    );
  }

  const authContextValue: AuthContextType = {
    ...auth,
    setAuth: (newAuth: Auth) => setAuth(newAuth),
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };