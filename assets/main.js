$(document).ready(function(){
     // Check for hash value in URL
     var hash = window.location.hash.substr(1);
     var href = $('#nav-mobile li a').each(function(){
         var href = $(this).attr('href');
         if(hash==href.substr(0,href.length-5)){
             var toLoad = hash+'.html .container';
             $('.container').load(toLoad)
         } 
     });
     
    $('#nav-mobile li a').click(function(){
       var toLoad = $(this).attr('href')+'.container' //function here 
       $('.container').hide('fast',loadContent);
    $('#load').remove();
    $('#nav-wrapper').append('<span id="load">LOADING...</span>');
    $('#load').fadeIn('normal');
    function loadContent() {
    	$('.container').load(toLoad,'',showNewContent())
    }
    function showNewContent() {
    	$('.container').show('normal',hideLoader());
    }
    function hideLoader() {
    	$('#load').fadeOut('normal');
    }
    return false;
    
    });
})