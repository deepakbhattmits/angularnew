/*mp3_page controller*/
var app=angular.module('my_module',[]);
app.controller('myCtrlMp3', function($scope) {
    $scope.page_name = 'hello mp3';
    /*$scope.names = [
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
                    ];*/

});
app.controller('AppController',['$scope', function($s) {

  $s.items = [{
      name  : 'First Item',
      value : 500
    },
    {
      name  : 'Second Item',
      value : 200
    },
    {
      name  : 'Third Item',
      value : 700
    }];

}]);