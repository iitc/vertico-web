# Vertico WebApp

## Pre-requirement

1. Auth0 secret is key required.  `vertico-web/src/app/auth/auth0-variables.ts

```
export const AUTH_CONFIG: AuthConfig = {
  clientID: 'fdsafadsffdsafadfsdafasdf',
  domain: 'your-app.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
```

2. Angular, Node and Npm 

## Run 

``` 
ng serve
```