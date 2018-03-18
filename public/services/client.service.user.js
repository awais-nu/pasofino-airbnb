app.service("userService",["$cookies", "$http", "$location", function ($cookies, $http, $location) {

  this.getUserProfile = function (params, promise) {
    // alert("inside add User service..!!!");
    console.log("[USER SERVICE]-> get user profile params: ", params);
    var csid = $cookies.get('sesid');
    // console.log("note inside service: ", msg);
    // console.log("uid: ", uid);
    if(csid !== undefined){
      $http({
          method: 'POST',
          url: window.RightCRM_URL + '/getuserprofile',
          dataType: 'json',
          data: {
                  "user_id": params.usrid,
                  "sessionid": csid
                }
      }).then(function (response) {
        console.log("[USER SERVICE]->Success: User's Profile is loaded...!!!");
        promise(response);
      }, function (error){
        console.error("[USER SERVICE]->Error: Failed to User's Profile Data...!!!");
      });
    }
    else{
       window.location.href = window.location.origin + "/rightlogin";
    }

  }//end of addUser function

  this.updateUserProfile = function (params, promise) {
    // alert("inside add User service..!!!");
    console.log("[USER SERVICE]->update user profile params: ", params);
    var csid = $cookies.get('sesid');
    // console.log("note inside service: ", msg);
    // console.log("uid: ", uid);
    if(csid !== undefined){
      $http({
          method: 'POST',
          url: window.RightCRM_URL + '/updateuserprofile',
          dataType: 'json',
          data: {
                  "user_id": params.PERSONAL.USRID,
                  "sessionid": csid,
                  "login_id" : params.LOGIN_ID,
                  "phone": params.PHONE,
                  "skype_id": params.SKYPE_ID,
                  "acname" : params.PERSONAL.USRNAME
                }
      }).then(function (response) {
        console.log("[USER SERVICE]->Success: User's Profile is updated...!!!");
        promise(response);
      }, function (error){
        console.error("[USER SERVICE]->Error: Failed to Update User's Profile Data...!!!");
      });
    }
    else{
       window.location.href = window.location.origin + "/rightlogin";
    }
  }//end of updateUserProfile function

  this.getUsersAccounts = function (params, promise) {
    var csid = $cookies.get('sesid');
    console.log("csid: ", csid);
    console.log("[User Service]filters for User Accounts before search: ");
    console.log("Params: ", params);
    if(csid !== undefined){
      $http({
          method: 'POST',
          url: window.RightCRM_URL + '/userlist',
          dataType: 'json',
          data: {
            "sessionid": csid,
            "srch_pageno" : params.srch_pageno,
            "srch_keywords" : (params.search_keyword == undefined ? null : params.search_keyword),
            "only_saved":(params.only_saved_accounts == undefined ? null : params.only_saved_accounts),
            "srch_address_id" : (params.address == undefined ? null : params.address),
            "srch_user_login_id" : null,
            "srch_user_status" : (params.user_status == undefined ? null : params.user_status),
            "campaign_name" : null,
            "campaign_source" : null,
            "campaign_media" : null,
            "srch_industry" : (params.industry == undefined ? null : params.industry),
            "srch_company_size" : (params.company_size == undefined ? null : params.company_size),
            "srch_annual_revenue" : null,
            "srch_ctag" : (params.ctag == undefined ? null : params.ctag),
            "user_list" : (params.sales_workers == undefined ? null : params.sales_workers),
            "saved_search_id": (params.saved_search_id == undefined ? null : params.saved_search_id)
            }
      }).then(function (response) {
        console.log("[]Success: Persons are loaded...!!!");
        // "srch_pageno" : params.srch_pagen,
        // "user_status" : (params.status == undefined ? null : params.status)
        promise(response);
      }, function (error){

        toastr["error"]("failed to load Persons...!!!", "Error");
        console.error("Error: failed to load Persons...!!!");

      });
    }
    else{
       window.location.href = window.location.origin + "/rightlogin";
    }
  }//end of getUsersAccounts function

  this.getPersonsMetaData = function (params, promise) {
    var csid = $cookies.get('sesid');
    console.log("csid: ", csid);
    console.log("filters before search: ");
    console.log("Params: ", params);
    if(csid !== undefined){
      $http({
          method: 'POST',
          url: window.RightCRM_URL + '/userlist',
          dataType: 'json',
          data: {
            "sessionid": csid,
            "srch_pageno" : params.srch_pageno,
            "srch_keywords" : (params.search_keyword == undefined ? null : params.search_keyword),
            "only_saved":0,
            "srch_address_id" : (params.address == undefined ? null : params.address),
            "user_login_id" : null,
            "user_status" : (params.user_status == undefined ? null : params.user_status),
            "campaign_name" : null,
            "campaign_source" : null,
            "campaign_media" : null,
            "srch_industry" : (params.industry == undefined ? null : params.industry),
            "srch_company_size" : (params.company_size == undefined ? null : params.company_size),
            "srch_annual_revenue" : null,
            "srch_ctag" : (params.ctag == undefined ? null : params.ctag),
            "user_list" : (params.sales_workers == undefined ? null : params.sales_workers),
            "saved_search_id": (params.saved_search_id == undefined ? null : params.saved_search_id)
            }
      }).then(function (response) {
        console.log("[]Success: Persons are loaded...!!!");
        // "srch_pageno" : params.srch_pagen,
        // "user_status" : (params.status == undefined ? null : params.status)
        promise(response);
      }, function (error){

        toastr["error"]("failed to load Persons...!!!", "Error");
        console.error("Error: failed to load Persons...!!!");

      });
    }
    else{
       window.location.href = window.location.origin + "/rightlogin";
    }
  }//end of getUsersAccounts function

}]);
