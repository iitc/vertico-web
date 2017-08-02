interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'id from auth0',
  domain: 'your-app.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
