import { useRouter } from 'next/router'
import React from 'react'
import UserDetail from '../../components/Users/UserDetail';

const UserDetailPage = () => {
    const router = useRouter();
    console.log(router.query.id);
  return (
    <div className='container p-2 mx-auto bg-slate-200'>
    <UserDetail />
    </div>
  )
}

export default UserDetailPage