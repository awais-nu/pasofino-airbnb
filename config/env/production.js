'use strict';

module.exports = {
  app: {
		title: 'RightAccount',
		description: 'SSO Application for RightApp',
		keywords: 'RightApp'
	},
	port: process.env.PORT || 80,
  RightAccount_URL : 'http://uat.sso.zepto.work',
  RightAccountAPI_URL : 'http://uat.sso.zepto.work:8081',
  RightMail_URL : 'http://dev.rightmail.zepto.work',
  RightCRM_URL : 'http://uat.crm.zepto.work',
  RightCRMAPI_URL: 'http://uat.crm.zepto.work:8083'
};
