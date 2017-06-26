/*
* @Author: Administrator
* @Date:   2017-01-12 10:11:29
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-23 15:42:07
*/

// 'use strict';
$(function(){
   var index = 0;
   var lis = $(".item li");
   var timer = null;
   $(".item li").click(function(){
      index = $(this).index();
      hide_show(index);
      change(index);
   });

   $(".more").click(function() {
      $(".link").toggleClass('active');
      $(".link span").toggleClass('active');
      $(".more").toggleClass('active');
      if($(".more").html() == "更多"){
         $(".more").text("收下");
      }else{
         $(".more").text('更多');
      }
   });

   $(window).mousewheel(function(e,d){
      clearTimeout(timer);
      timer = setTimeout(function(){
         index-=d;
         if(index > lis.length-1 || index < 0){
            index = 0;
         }
         hide_show(index);
         change(index);
      },100);
   });

      function hide_show(index){
         if(index == 0){
            $(".download").hide();
            $(".scroll").show();
         }else{
            $(".download").show();
            $(".scroll").hide();
         }
      };

      function change(index){
         lis.eq(index).addClass('cur').siblings().removeClass('cur');
         $("section").eq(index).show().siblings('section').hide();
         if(index == 1){
            $("header").addClass('header2');
         }else{
            $("header").removeClass('header2');
         }
         timer = setTimeout(function(){
            $("section").eq(index).removeClass('current').siblings('section').addClass('  current');
         },50);
      };












































})
