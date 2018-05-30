/*home_page controller*/
var app=angular.module('my_module',[]);
app.controller('myCtrl', function($scope){
	$scope.page_name = 'hello home';
        var slide_val1 = 0,slide_val2 = 0,x = 1,y = 1;
      
        $('.right_icon').click(function(){
            var slideCount = $('#owl-example .item').length;
            var slideWidth = $('#owl-example .item').width()+4;
            if(x+4<=slideCount){
                slide_val1 =slide_val1 - slideWidth;
                slide_val2 = slide_val1;
                $('#owl-example').animate({ left: slide_val1 },600);
                x++;
                if(x>=2){
                    $('.left_icon').css({'display':'block'});
                }
                if(x>slideCount-4){
                    $('.right_icon').css({'display':'none'});
                }
                console.log(slide_val1 +','+slide_val2+ ','+x +','+y);
            }
        });
        $('.left_icon').click(function(){
            var slideCount = $('#owl-example .item').length;
            var slideWidth = $('#owl-example .item').width()+4;
            if(x > y){
                slide_val2 = slide_val2 + slideWidth;
                slide_val1 = slide_val2;
                $('#owl-example').animate({ left: slide_val2 },600);
                x--;
                if(x<=slideCount-4){
                    $('.right_icon').css({'display':'block'});
                }
                if(x<2){
                    $('.left_icon').css({'display':'none'});
                }
                console.log(slide_val1 +','+slide_val2+ ','+x +','+y);
            }
        });
});