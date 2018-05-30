/*shop_page controller*/
var app=angular.module('my_module',[]);
app.controller('myCtrlShop', function($scope,$http) {
    $scope.page_name    = 'hello shop';
    $scope.submit_data  = 'submit';
    $scope.select_name  = '--select Person--';
    $scope.add_new      = 'add new record';
    $scope.first_name   = 'firstname';
    $scope.last_name    = 'lastname';
    $scope.home_town    = 'hometown';
    $scope.job          = 'job';
    $scope.age          = 'age';
    $scope.arr_name = [];
    $scope.my_popup_show = function(){
        $scope.my_popup = true;
        $scope.my_cover = true;
    }
    $scope.my_popup_hide = function (){
        $scope.my_popup = false;
        $scope.my_cover = false;
        $scope.successmsg = '';
    }
    window.onkeydown = function(event) {
        if ( event.keyCode === 27 ) {
            console.log( 'escape pressed' );
            $scope.my_popup = false;
            $scope.my_cover = false;
            $scope.user = null;
        } 
    };
    $http({url:'all_ajax.php'}).then(function(response) {
        //console.log(response.data.FirstName);
        $scope.mydata = response.data; 
    });
    $scope.showMe = function(data_f) {
        //console.log('This is Selected '+ data_f);
        $scope.table_id         = 'id';
        $scope.table_firstname  = 'firstname';
        $scope.table_lastname   = 'lastname';
        $scope.table_hometown   = 'hometown';
        $scope.table_job        = 'job';
        $scope.table_age        = 'age';
        $scope.table_edit       =  'edit';
        $scope.table_delete     =  'delete';
        $http({url: 'ajax_search.php',method: "POST",
            data: {FirstName:data_f}
        })
        .then(function(response) {
           console.log(response.data); // success
           $scope.items= response.data;
        }, 
        function(response) { // optional
            console.log('error');// failed
        });
    }      
   $scope.submitForm = function() {
        //console.log($scope.user);
        $http({url:'all_ajax.php'}).then(function(response) {
            //$scope.arr_name = response.data; 
            for(i=0;i<=response.data.length;i++){
                console.log(response.data[i]);
                if($scope.user.fn == response.data[i] ){
                    alert('Record Already Exists !');
                    $scope.user = '';
                    $scope.successmsg = '';
                    return false;
                    }
                }
             $http({url: 'add_ajax.php',method: "POST",
            data : $scope.user})
        .then(function(res) {
        console.log(res.data.sucess); // success
               if (res) {
                  $scope.successmsg = res.data.success;
                  $scope.user = '';
                }
        });
        });
       
    }  
 });
