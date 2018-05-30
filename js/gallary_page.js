/*gallary_page controller*/
var app=angular.module('my_module',[]);
app.controller('myCtrlGallary',['$http','$scope', '$filter', function ($http, $scope, $filter) {
  $scope.page_name = 'hello gallary';
   $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = [];
    $scope.q = ''; 
    $scope.id =''; 
    $scope.first_name   = 'firstname';
    $scope.last_name    = 'lastname';
    $scope.home_town    = 'hometown';
    $scope.job          = 'job';
    $scope.age          = 'age';
    $scope.submit_data  = 'submit';

    $scope.table_id         = 'id';
    $scope.table_firstname  = 'firstname';
    $scope.table_lastname   = 'lastname';
    $scope.table_hometown   = 'hometown';
    $scope.table_job        = 'job';
    $scope.table_age        = 'age';
    $scope.table_edit       =  'edit';
    $scope.table_delete     =  'delete'; 
    url = "database/studentInfo.php";

    $scope.getData = function () {
      return $filter('filter')($scope.data, $scope.q)
    } 

    $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.pageSize);                
    } 

     $http({url:'new_php.php'}).then(function(response) {
            //$scope.data.push(response.data);
            //$scope.data.push(append);
        for (var i=0; i<response.data.length; i++) {
            $scope.data.push({  'id':response.data[i].id,
                                'fname':response.data[i].FirstName,
                                'lname':response.data[i].LastName,
                                'ht':response.data[i].HomeTown,
                                'age':response.data[i].Age,
                                'job':response.data[i].Job,
                            });
        }
        console.log(response.data);
    });
    $http.get("new_php.php").then(function(response) {
         $scope.items = response.data;
    });
    $scope.$on('updateNewRow', function(event, data) {
        $http.get("new_php.php").then(function (response) {
            $scope.items = response.data;
        });
    });
    $scope.my_delete_btn = function (userid){
        if(confirm("Do u want to Delete this Record ? ")) {
            var httpParams = $http({
                method:"POST",
                url:url,
                data:{id:userid,queryType:'delete'},
                headers: {'Content-Type': 'application/json' }
            });
            httpParams.then(function successCallback(response){
                //console.log(response);
                $scope.$broadcast('updateNewRow', [1,2,3]);
                $scope.message = response.data;
            });
        }
    }
      $scope.my_edit_btn = function(data_id){
         $scope.formShow = true;
         $scope.my_popup = true;
         for(var i=0;i<$scope.items.length;i++){
             if(data_id == $scope.items[i].id){
                 $scope.userId = $scope.items[i].id;
                 $scope.fName = $scope.items[i].FirstName;
                 $scope.lName = $scope.items[i].LastName;
                 $scope.homeTown = $scope.items[i].HomeTown;
                 $scope.userJob = $scope.items[i].Job;
                 $scope.userAge = $scope.items[i].Age;

                 $scope.updsubmitForm = function() {
                     var httpParams = $http({
                         method: "POST",
                         url: url,
                         data: {id:$scope.userId,FirstName:$scope.fName,LastName:$scope.lName,HomeTown:$scope.homeTown,Job:$scope.userJob, Age:$scope.userAge,queryType:'update'},
                         headers: {'Content-Type': 'application/json'}
                     });
                     (httpParams).then(function successCallback(response) {
                         $scope.my_popup = false;
                         $scope.my_cover = false;
                         $scope.$broadcast('updateNewRow', [1, 2,3]);
                         $scope.message = response.data;
                     }, function errorCallback(response) {
                         // called asynchronously if an error occurs
                         // or server returns response with an error status.
                     });
                 }
             }
         }
    }
    $scope.my_popup_show = function(data_id){
        //console.log('This is Selected '+ data_id);
        $scope.my_popup = true;
        $scope.my_cover = true;
    }
    $scope.my_popup_hide = function (){
        $scope.my_popup = false;
        $scope.my_cover = false;
        $scope.successmsg = '';
    }

}]);
//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
app.filter('startFrom', function() {
    return function(input, start) {
    start = +start; //parse to int
    return input.slice(start);
}
app.directive('ngConfirmClick',function(){
    return {
        link : function(scope,element,attr){
            var msg = attr.ngConfirmClick || 'Are you sure want delete';
            var clickAction = attr.confirmedClick;
            element.bind('click',function(event){
                if(window.confirm(msg)){
                    scope.$eval(clickAction);
                }
            })
        }
    }
});
});