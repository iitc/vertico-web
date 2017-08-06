interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'enterYourID',
  domain: 'yourEndpoint.auth0.com',
  callbackURL: 'http://localhost/callback'
};
