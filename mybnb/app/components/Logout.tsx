import { useRouter } from 'next/navigation'
import React from 'react'
import MenuLink from './navbar/MenuLink';
import { handleLogout } from '../lib/actions';

const Logout: React.FC = () => {
  const router = useRouter();
  const submitLogout = async () => {
    handleLogout();
    router.push('/');
  }
  return (
    <MenuLink
    label='Logout'
    onClick={submitLogout}
    />
  )
}

export default Logout