export const CONFIG = {
  verticoFactory: 'http://localhost:6765/verticofactory/',
  instancesEndpoint:'http://localhost:6765/verticofactory/rest/v2/queries/vertico$Instance/list?userID=',
  userExistCheckEndpoint:'http://localhost:6765/verticofactory/rest/v2/queries/vertico$Donors/userPresent?email=',
  registerEndpoint:'http://localhost:6765/verticofactory/rest/v2/entities/vertico$Donors',
  profileEndpoint:'http://localhost:6765/verticofactory/rest/v2/queries/vertico$Donors/profile?email=',
  oauthCheck:false
  
};


