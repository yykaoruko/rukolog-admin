import { useState } from 'react';
import { signinService } from '~/src/services/auth';
import { useRouter } from 'next/router';
import { SigninPresenter } from './signin.presenter';

export function SigninContainer() {
  const router = useRouter();
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
    await signinService(params).then(res => {
      setDisabled(false);
      if (res.ok) {
        router.push('/');
      } else {
        window.alert(res.errors[0]);
      }
    });
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