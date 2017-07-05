// JavaScript Document
$(document).ready(function()
{ 
	$("#selcategory").change(function(){
	var selid=$("#selcategory").val();					  
	window.location="book.php?category="+selid;
	});
});
//category