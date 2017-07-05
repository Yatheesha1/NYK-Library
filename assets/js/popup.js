 $(document).ready(function(){
				$("#limca").hide();	
				
	$("#limcatd").click(function(){
								
	$("#limca").show();		
	
	 $("#limca").animate({
	"right":"0px",					 
    width: "400px",
	marginLeft: "0.0in",
    borderWidth: "10px"
  }, 1500 );
	 
	  $("#limca").animate({
	height:"450px",
    marginLeft: "0.0in",
    borderWidth: "10px"
  }, 1500 ); 
	
	});
	$("#close").click(function(){
							$('#limca').hide();		   
									   });		
		 
	}); //end ready