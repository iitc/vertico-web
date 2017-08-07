interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'yourid',
  domain: 'vertico-cloud.auth0.com',
  callbackURL: 'http://localhost/callback'
};
