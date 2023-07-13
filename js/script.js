$(document).ready(function(){
   const date = new Date();
   const hour = date.getHours();
   let message='';
   if(hour>=24){
       message="Good Morning";

   }
   if(hour<=24){
       message="Good Afternoon";
   }
   if(hour>=17){
       message="Good Everning"
   }
  $('#headingText').empty().append(message+ "  From Korb Lina")
})