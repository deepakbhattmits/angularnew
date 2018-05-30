/*profile_page controller*/
var app=angular.module('my_module',[]);
app.controller('myCtrlProfile', function($scope, $interval) {
	$scope.page_name = 'hello profile';
    $scope.firstName = "deepak";
    $scope.lastName = "bhatt";
    $scope.rupee = 100;
    $scope.fundata = $interval(function(){
        var time = new Date();
        var h = time.getHours(); 
            if(h >= 12 ){
                a = 'PM';
            }
            else{
                a = 'AM';
            }
        var m = time.getMinutes();
        var s = time.getSeconds();
        var c_time = h +":"+ m +":"+ s +" "+ a;
        $scope.timee =  c_time;
        },1000);
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var newdate = day + "/" + month + "/" + year;
    $scope.daate = newdate;
 	$scope.names = [
                        {name:'deepak',state:'uk'},
                        {name:'akhilesh',state:'up'},
                        {name:'devesh',state:'up'},
                        {name:'nishant',state:'up'},
                        {name:'bharath',state:'ka'},
                        {name:'naresh',state:'ka'},
                        {name:'priyanka',state:'ka'},
                        {name:'dinesh',state:'ap'},
                        {name:'pooja',state:'mp'},
                        {name:'mahadev',state:'ka'}
                    ];
});