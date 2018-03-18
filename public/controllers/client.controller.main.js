app.controller("MainController", function($scope,$cookies, $location, $http, $timeout) {
  console.log("inside MainController");
  $scope.loginCredentials = {};
  $scope.login = function () {
    console.log("username:", $scope.loginCredentials.username);
    console.log("password:", $scope.loginCredentials.password);
    $http({
        method: 'POST',
        url: AirBNB_URL + '/login',
        dataType: 'json',
        data: {
                "username": $scope.loginCredentials.username,
                "password": $scope.loginCredentials.password
              }
    }).then(function (response) {
      console.log('Login Response:', response);
      if(response.data !== ""){
        alert("login successfully");
      }else {
        alert("invalid credentials");
      }

    }, function (error){
      console.error("[USER SERVICE]->Error: Failed to User's Profile Data...!!!");
    });
  }
  $scope.signup = function () {
    console.log("Request for signup");
  }

});
