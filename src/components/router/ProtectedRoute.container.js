import { ProtectedRoutePresenter } from './ProtectedRoute.presenter'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { signinService } from '~/src/services/auth';

export const ProtectedRouteContainer = (props) => {
  const userSelector = state => state.user;
  const user = useSelector(userSelector);
  console.log('protected route', user);
  if (!user.id) {
    // TODO: 再ログイン
    if (typeof window !== 'undefined') {
      const router = useRouter();
      router.push('/signin');
    }
  }
  return (
    <ProtectedRoutePresenter {...props} />
  );
};