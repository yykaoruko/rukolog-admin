import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { signinService } from '~/src/services/auth';
import { updateUser } from '~/src/store/user';
import { SigninPresenter } from './signin.presenter';

export function SigninContainer() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setDisabled] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onClickSignin = async (event) => {
    event.preventDefault();
    setDisabled(true);
    const params = {
      email,
      password,
    };
    const res = await signinService(params);
    setDisabled(false);
    if (res.ok) {
      const user = res.data.data;
      dispatch({ type: 'UPDATE_USER', payload: user });
      // TODO: なんかおかしい
      router.push('/');
    } else {
      window.alert(res.errors[0]);
    }
  }

  const props = {
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    onClickSignin,
    isDisabled,
  };

  return <SigninPresenter {...props} />
};