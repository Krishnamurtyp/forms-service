import auth0 from 'auth0-js'
import { initializeXsrfToken } from './xsrf'
import { config } from '../_config'

const AUTH_CONFIG = config.auth0

export default function lockInstance() {
  // set csrf token
  const token = initializeXsrfToken()
  // https://auth0.com/docs/libraries/lock/v10/customization
  return new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    //audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid email'
  })
}
