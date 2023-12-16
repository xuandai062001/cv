$( function() {
    $( document ).ready(function() {
            $( "#tabs" ).tabs();

            function progressBar(){
                let pageTop = $(document).scrollTop()
                let pageBottom = pageTop + $(window).height();
                let tags = $(".progress-bar")

                console.log("page bottom " + pageBottom);

                tags.each(function(){
                    
                    console.log("item offset top " + $(this).offset().top);

                    if($(this).offset().top < pageBottom){
                        $(this).removeClass("deactive");
                    }
                    else{
                        $(this).addClass("deactive");
                    }

                })
            }

            progressBar();

            $(document).on("scroll", function () {
                progressBar();
            })
      });
  } );


  