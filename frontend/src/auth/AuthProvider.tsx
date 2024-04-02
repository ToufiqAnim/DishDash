import { AppState, Auth0Provider, User } from '@auth0/auth0-react';

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const domain = import.meta.env.AUTH0_DOMAIN;
  const clientID = import.meta.env.AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.AUTH0_CALLBACK_URL;

  if (!domain || !clientID || redirectUri) {
    throw new Error('Unable to initialise Auth');
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log('USER', user);
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
