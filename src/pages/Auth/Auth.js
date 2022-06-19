import React from 'react';
import { useRecoilValue } from 'recoil';
import { authActionState } from '../../states/UserStates';
import SignUp from './SignUp';
import Login from './Login';

export default function Auth()
{
  const authAction = useRecoilValue(authActionState);
  return(
    <>
      { authAction === 'login' && (<Login />)}
      { authAction === 'signup' && (<SignUp />)}
    </>
  )
}