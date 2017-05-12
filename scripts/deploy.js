const upgrade = require('gitlab2rancher-deploy')
const gitBranch = process.env.CI_BUILD_REF_NAME
let serviceUrl
switch(process.env.CI_BUILD_REF_NAME) {
  case 'master':
    serviceUrl = process.env.RANCHER_SERVICE_URL_MASTER; break;
  case 'test':
    serviceUrl = process.env.RANCHER_SERVICE_URL_TEST; break;
  default:
    throw new Error(`Unable to determine serviceUrl for branch ${ gitBranch }`)
}
upgrade(serviceUrl)
.catch(err => { console.log(err.stack); process.exit(1) })
