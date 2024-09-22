import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

import { paths } from '../../paths'; // Assuming this is an object containing route paths.

import { useUser } from '../../hooks/use-user'; // Assuming useUser is a hook to fetch user data.

export function AuthGuard({ children }) {
  const navigate = useNavigate();
  const { user, error, isLoading } = useUser();
  const [isChecking, setIsChecking] = useState(true);

  const checkPermissions = async () => {
    if (isLoading) {
      return;
    }

    if (error) {
      setIsChecking(false);
      return;
    }

    if (!user) {
      console.debug('[AuthGuard]: User is not logged in, redirecting to sign in');
      navigate(paths.auth.signIn);
      return;
    }

    setIsChecking(false);
  };

  useEffect(() => {
    checkPermissions().catch(() => {
      // noop
    });
  }, [user, error, isLoading]);

  if (isChecking) {
    return null;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return <>{children}</>;
}
