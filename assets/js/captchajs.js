jQuery("#submit").click(function(e){
    var data_2;
jQuery.ajax({
    
            type: "POST",
            url: "../wp-content/plugins/contact-form-block/includes/google_captcha.php",
            data: jQuery('#FORMID').serialize(),
            async:false,
            success: function(data) {
             if(data.nocaptcha==="true") {
           data_2=1;
              } else if(data.spam==="true") {
           data_2=1;
              } else {
           data_2=0;
              }
            }
        });
        if(data_2!=0) {
          e.preventDefault();
          if(data_2==1) {
            alert("Check the captcha box");
          } else {
            alert("Please Don't spam");
          }
        } else {
            jQuery("#FORMID").submit
       }
});