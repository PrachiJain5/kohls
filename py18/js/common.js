

// Get IE or Edge browser version
var version = detectIE();
var version_pass = false;

if (version === false || version > 8) {
    version_pass = true;

} else {

    version_pass = false;
    $('#browser').iziModal({
        autoOpen: true,
        headerColor: '#eeeeee',
        width: 760,
        overlayColor: 'rgba(255, 255, 255, 0.8)',
        fullscreen: false,
        closeOnEscape: true,
    });

    $('#browser').css('display', 'block');

}

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');

    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);

    }
    var gecko = ua.indexOf('Gecko/');

    if (gecko > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

if (version_pass) {
    function getCookie() {
        if (document.cookie) {
            var cookieGroup = [];
            var doc_cookie = document.cookie.split(";");

            for (var i = 0; i < doc_cookie.length; i++) {

                var name = doc_cookie[i].split("=")[0].trim();
                 
                if (name == 'user_status')
                    var status = doc_cookie[i].split("=")[1];

            }

            cookieGroup[0] = status;
            return cookieGroup;

        } else {
            return false;
        }
    }


    var pageCounter = 1;


    var population_location_en = {
        most: "United States",
        //cali: "California",
        //dal: "Dallas",
        //hawaii: "Hawaii",
        //phx: "Phoenix",
        rico: "Puerto Rico"
    };
    var population_status_en = {
        full: "Full-time",
        part: "Part-time"
    };
    var population_languaue_en = {
        english: "English",
        spanish: "Spanish"
    };

    var population_location_sp = {
        most: "Estados Unidos",
        //cali: "California",
        //dal: "Dallas",
        //hawaii: "Hawaii",
        //phx: "Phoenix",
        rico: "Puerto Rico"
    };
    var population_status_sp = {
        full: "Tiempo completo",
        part: "Tiempo parcial"
    };
    var population_languaue_sp = {
        english: "Inglés",
        spanish: "Español"
    };


    var bgcolor = {
         
    };

    function populationCheck(){
        if($("#Select1").val() == 'part'){
            $(".ftOnly").css('display','none');
        }else{
            $(".ftOnly").css('display','block');
        }
    }
    function call_sliders() {
        if ($('#learn1').length) {

               $('#learn1').slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4, 
                responsive: [

                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
							slidesToScroll: 3 

                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            arrow: false,
                            dots: true,
                            slidesToShow: 2,
							slidesToScroll: 2,
                            nextArrow: false,
                            prevArrow: false,
                            swipeToSlide: true
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrow: false,
                            slidesToShow: 2,
							 slidesToScroll: 2, 
                            dots: true,
                            swipeToSlide: true
                        }
                    }

                ]
            });
            $('#decide1').slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4, 
                responsive: [

                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            arrow: false,
                            dots: true,
                            slidesToShow: 2,                         
                            slidesToScroll: 2, 
                            swipeToSlide: true

                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrow: false,
                            slidesToShow: 2,
							 slidesToScroll: 2,
                            dots: true,
                            swipeToSlide: true
                        }
                    }

                ]
            });
            $('#enroll1').slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4, 
                responsive: [

                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3 
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            arrow: false,
                            dots: true,
                            slidesToShow: 2,  
                            slidesToScroll: 2, 
                            swipeToSlide: true
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrow: false,
                            slidesToShow: 2,
                             slidesToScroll: 2, 
                            dots: true,
                            swipeToSlide: true
                        }
                    }

                ]
            });



        }

    }

    if (document.cookie) {
        console.log('called at 1');
        //call_sliders();
    }

    var dialog, form, first_user = 0;


    $('#dialog-form').iziModal({
        autoOpen: false,
        //headerColor: '#eeeeee', 
        width: 760,
        overlayColor: 'rgba(255, 255, 255, 0.8)',
        fullscreen: false,
        closeOnEscape: true,
        onClosing: function() {
            var doc_cookie = document.cookie.split(";");
            var status ;
            for (var i = 0; i < doc_cookie.length; i++) {
                var name = doc_cookie[i].split("=")[0].trim();
                if (name == 'user_status')
                    status = doc_cookie[i].split("=")[1]; 
            } 
 
        },
        onClosed: function() {
            // $("#ext").css('display',"none");  
            window.history.replaceState('', document.title, window.location.pathname);
        }
    });

    $('#dialog-legal').iziModal({
        autoOpen: false,
        //headerColor: '#eeeeee', 
        width: 760,
        overlayColor: 'rgba(255, 255, 255, 0.8)',
        fullscreen: false,
        closeOnEscape: true,
        onClosing: function() {
            
 
        },
        onClosed: function() {
            // $("#ext").css('display',"none");  
            window.history.replaceState('', document.title, window.location.pathname);
        }
    });




    $("#dialog-form").on('click', '.submit', function(event) {
        event.preventDefault();
        checkPopulation();
        //$("#ext").css('display',"none");
        $('#dialog-form').iziModal('close');
        // window.history.replaceState('', document.title, window.location.pathname);
    });


    $('#myModal').iziModal({
        autoOpen: false,
        //headerColor: '#eeeeee', 
        width: '600',
        overlayColor: 'rgba(255, 255, 255, 0.8)',
        fullscreen: false,
        onClosed: function() {
            window.history.replaceState('', document.title, window.location.pathname);
        }
    });

     $("#legal").on("click", function(e) {
        $('#dialog-legal').iziModal('open');
        e.preventDefault();
     });
     
    $("#customize_population").on("click", function(e) {
        // $("#dialog-form").dialog("open");
        // $(".login-note").css('display','none');


        $('#dialog-form').iziModal('open');
        e.preventDefault();
        //$(".login-note").css('display', 'none');

        //set modal values
        var cookieValue = getCookie();
        if(cookieValue == 'ft'){            
            $("#Select1").val('full');
        }else if(cookieValue == 'ftk'){
            $("#Select1").val('full');
            $("#Select2").val('kaiser');
        }else if(cookieValue == 'pt'){ 
            $("#Select1").val('part');           
            $(".ftOnly").css('display','none');
        }

    });




    function renderHTML(data, status) { 
        var cnt = 0;
        var c = 0;
        var ct = 0;
 
        var htmlString_learn = "";
        var htmlString_decide = "";
        var htmlString_enroll = "";
        tile_data = [];
        tile_data_decide = [];
        tile_data_enroll = [];        

        for (i = 0; i < data.length; i++) {
                var stat = 0;               
                if ((data[i].status.length) >= 1) {                  
                    for (j = 0; j < data[i].status.length; j++) {
                        if (status === data[i].status[j]) {
                            stat++;
                        }
                    }
                }
            if (stat > 0) {
                
                //Learn tile fill based on selection (lan, stat,loc)
                if (data[i].tile_category == 1) {

                    tile_data.push({
                        "id": data[i].id,
                        "title": data[i].title,
                        "filename": data[i].filename,                        
                        "icon": data[i].icon,                        
                        "tile_position": data[i].tile_category_position,
                        "bg_img": data[i].bg_img,
                        "bg_img_url": data[i].bg_img_url,
                        "bg_class": data[i].bg_class

                    });
                }
                //decide tile fill based on selection (lan, stat,loc)
                if (data[i].tile_category == 2) {
                    tile_data_decide.push({
                        "id": data[i].id,
                        "title": data[i].title,
                        "filename": data[i].filename, 
                        "icon": data[i].icon,                      
                        "tile_position": data[i].tile_category_position,
                        "bg_img": data[i].bg_img,
                        "bg_img_url": data[i].bg_img_url,
                        "bg_class": data[i].bg_class
                    });

                }

                //enroll tile fill based on selection (lan, stat,loc)
                if (data[i].tile_category == 3) {
                    tile_data_enroll.push({
                        "id": data[i].id,
                        "title": data[i].title,
                        "filename": data[i].filename,
                         "icon": data[i].icon,                         
                        "tile_position": data[i].tile_category_position,
                        "bg_img": data[i].bg_img,
                        "bg_img_url": data[i].bg_img_url,
                        "bg_class": data[i].bg_class

                    });

                }
            }


        }

        //sort for tile learn position  and output
        tile_data.sort(function(a, b) {
            return a.tile_position - b.tile_position
        });

        for (var i = 0; i < tile_data.length; i++) {
            newWindow = false;
            

            if ((tile_data[i].bg_img) && (tile_data[i].icon.trim() == 'video')) {

                htmlString_learn += '<a style = "background-image: url(' + tile_data[i].bg_img_url + ');" id="' + tile_data[i].id + '"  class="' + tile_data[i].bg_class + ' tileboxbt align-bottom icon-video" href= "' + tile_data[i].filename + '"><div class="text-mask"></div><div class=tilebox><h2>' + tile_data[i].title + ' </h2> </div></a>';
            } else if (tile_data[i].bg_img) {
                htmlString_learn += '<a style = "background-image: url(' + tile_data[i].bg_img_url + ');" id="' + tile_data[i].id + '"  class=" tileboxbt ' + tile_data[i].bg_class + ' align-bottom" href="' + tile_data[i].filename + '"><div class="text-mask"></div><div class=tilebox><h2>' + tile_data[i].title + ' </h2> </div></a>';
            } else if (tile_data[i].icon.trim() == 'pdf') {
                htmlString_learn += '<a id="' + tile_data[i].id + '"  class="' + tile_data[i].bg_class + ' tileboxbt icon-pdf" href= "' + tile_data[i].filename + '"><div class=tilebox><h2>' + tile_data[i].title + ' </h2> </div></a>';
            } else if (tile_data[i].icon.trim() == 'video') {
                htmlString_learn += '<a id="' + tile_data[i].id + '"  class="' + tile_data[i].bg_class + ' tileboxbt icon-video" href= "' + tile_data[i].filename + '"><div class=tilebox><h2>' + tile_data[i].title + ' </h2> </div></a>';
            } else {
                htmlString_learn += '<a id="' + tile_data[i].id + '"  class="' + tile_data[i].bg_class + ' tileboxbt" href= "' + tile_data[i].filename + '"><div class=tilebox><h2>' + tile_data[i].title + ' </h2> </div></a>';
            }
            cnt++;
        }
        //sort tile decide position and output
        tile_data_decide.sort(function(a, b) {
            return a.tile_position - b.tile_position
        });

        for (var i = 0; i < tile_data_decide.length; i++) {
        
            if ((tile_data_decide[i].bg_img) && (tile_data_decide[i].icon.trim() == 'video')) {

                htmlString_decide += '<a style = "background-image: url(' + tile_data_decide[i].bg_img_url + ');" id="' + tile_data_decide[i].id + '"  class="' + tile_data_decide[i].bg_class + ' tileboxbt align-bottom icon-video" href= "' + tile_data_decide[i].filename + '"><div class="text-mask"></div><div class=tilebox><h2>' + tile_data_decide[i].title + ' </h2> </div></a>';
            } else if (tile_data_decide[i].bg_img) {
                htmlString_decide += '<a style = "background-image: url(' + tile_data_decide[i].bg_img_url + ');" id="' + tile_data_decide[i].id + '"  class=" tileboxbt ' + tile_data_decide[i].bg_class + ' align-bottom" href="' + tile_data_decide[i].filename + '"><div class="text-mask"></div><div class=tilebox><h2>' + tile_data_decide[i].title + ' </h2> </div></a>';
            } else if (tile_data_decide[i].icon.trim() == 'pdf') {
                htmlString_decide += '<a id="' + tile_data_decide[i].id + '"  class="' + tile_data_decide[i].bg_class + ' tileboxbt icon-pdf" href= "' + tile_data_decide[i].filename + '"><div class=tilebox><h2>' + tile_data_decide[i].title + ' </h2> </div></a>';
            } else if (tile_data_decide[i].icon.trim() == 'video') {
                htmlString_decide += '<a id="' + tile_data_decide[i].id + '"  class="' + tile_data_decide[i].bg_class + ' tileboxbt icon-video" href= "' + tile_data_decide[i].filename + '"><div class=tilebox><h2>' + tile_data_decide[i].title + ' </h2> </div></a>';
            } else {
                htmlString_decide += '<a id="' + tile_data_decide[i].id + '"  class="' + tile_data_decide[i].bg_class + ' tileboxbt" href= "' + tile_data_decide[i].filename + '"><div class=tilebox><h2>' + tile_data_decide[i].title + ' </h2> </div></a>';
            }
            ct++;
        }

        //sort tile enroll position and output
        tile_data_enroll.sort(function(a, b) {
            return a.tile_position - b.tile_position
        });

        for (var i = 0; i < tile_data_enroll.length; i++) {

             if ((tile_data_enroll[i].bg_img) && (tile_data_enroll[i].icon.trim() == 'video')) {

                htmlString_enroll += '<a style = "background-image: url(' + tile_data_enroll[i].bg_img_url + ');" id="' + tile_data_enroll[i].id + '"  class="' + tile_data_enroll[i].bg_class + ' tileboxbt align-bottom icon-video" href= "' + tile_data_enroll[i].filename + '"><div class="text-mask"></div><div class=tilebox><h2>' + tile_data_enroll[i].title + ' </h2> </div></a>';
            } else if (tile_data_enroll[i].bg_img) {
                htmlString_enroll += '<a style = "background-image: url(' + tile_data_enroll[i].bg_img_url + ');" id="' + tile_data_enroll[i].id + '"  class=" tileboxbt ' + tile_data_enroll[i].bg_class + ' align-bottom" href="' + tile_data_enroll[i].filename + '"><div class="text-mask"></div><div class=tilebox><h2>' + tile_data_enroll[i].title + ' </h2> </div></a>';
            } else if (tile_data_enroll[i].icon.trim() == 'pdf') {
                htmlString_enroll += '<a id="' + tile_data_enroll[i].id + '"  class="' + tile_data_enroll[i].bg_class + ' tileboxbt icon-pdf" href= "' + tile_data_enroll[i].filename + '"><div class=tilebox><h2>' + tile_data_enroll[i].title + ' </h2> </div></a>';
            } else if (tile_data_enroll[i].icon.trim() == 'video') {
                htmlString_enroll += '<a id="' + tile_data_enroll[i].id + '"  class="' + tile_data_enroll[i].bg_class + ' tileboxbt icon-video" href= "' + tile_data_enroll[i].filename + '"><div class=tilebox><h2>' + tile_data_enroll[i].title + ' </h2> </div></a>';
            }else {
                htmlString_enroll += '<a id="' + tile_data_enroll[i].id + '"  class="' + tile_data_enroll[i].bg_class + ' tileboxbt" href= "' + tile_data_enroll[i].filename + '"><div class=tilebox><h2>' + tile_data_enroll[i].title + ' </h2> </div></a>';
            }

            c++;
        }


        $('#learn1').html(htmlString_learn);
        $('#decide1').html(htmlString_decide);
        $('#enroll1').html(htmlString_enroll);

        /*hide parent incase no content*/
        if (cnt == 0) {
            $('#learn1').parent('div').css('display', 'none');
        }

        if (ct == 0) {
            $('#decide1').parent('div').css('display', 'none');
        }

        if (c == 0) {
            $('#enroll1').parent('div').css('display', 'none');
        }

        return cnt;

    }

    function renderData(status) {
        if (document.cookie) {
            console.log('called unslick at 3');
            //unslick_sliders();
        }

        var ourRequest = new XMLHttpRequest();
            ourRequest.open('GET', 'js/kohlsContent.json');
        
        ourRequest.onload = function() {
            if (ourRequest.status >= 200 && ourRequest.status < 400) {
                var ourData = JSON.parse(ourRequest.responseText);
                var c = renderHTML(ourData, status);
                console.log('called at 2');
                call_sliders();
            } else {
                console.log("We connected to the server, but it returned an error.");
            }
            // return valid;
        };
        ourRequest.onerror = function() {
            console.log("Connection error");
        };

        ourRequest.send();
        pageCounter++;
        if (pageCounter > 3) {
            // btn.classList.add("hide-me");
        }
        setHeader();


    }


    function setHeader() {

        var nav_str = '';
        var doc_cookie = document.cookie.split(";");
        var status;
        $('#selected_population').html('');  

        for (var i = 0; i < doc_cookie.length; i++) {
            var name = doc_cookie[i].split("=")[0].trim();             
            if (name == 'user_status')
            status = doc_cookie[i].split("=")[1];
        }

        if(status == 'ft'){
            nav_str += '<li>Full-time</li><li>Not eligible for Kaiser</li>';   
        }else if(status == 'ftk'){
            nav_str += '<li>Full-time</li><li>Eligible for Kaiser (limited CA locations only)</li>';   
        }
        else if(status == 'pt'){
            nav_str += '<li>Part-time</li>';   
        }
        nav_str += '<li class="edit"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></li>';
        
        $('#selected_population').html(nav_str);

      
    }

    function setCookie(status) {
        //set cookies for robust search result
        var edate = new Date();
        var day = edate.getDay();
        var month = edate.getMonth();
        var year = edate.getFullYear();

        var newDate = new Date(year + 1, month, day);

        expiration_date = newDate.toUTCString();
        document.cookie = "user_status=" + status + "; expires=" + expiration_date;
        document.cookie = "initialCookie=" + true;
    }
    function pageRedirect(){ 
       window.location = 'index.html'; 
    }

    function checkPopulation() {
        
        var medCoverage = $("#Select2").val();

        if((medCoverage == 'nonkaiser') & ($("#Select1").val() == 'full')){
            status='ft';
        }else{
            status='ftk';
        }
        if($("#Select1").val() == 'part'){
            status='pt';
        }
       
        setCookie(status);
        setHeader();
        pageRedirect();
        eventTrack();
        $('#dialog-form').iziModal('close');
        //$("#dialog-form").dialog("close");

        return;
    }

     
    function unslick_sliders() {
        //unslick slider
        $('#learn1').slick('slickRemove');
        $('#decide1').slick('slickRemove');
        $('#enroll1').slick('slickRemove');

        $('#learn1').slick('unslick');
        $('#decide1').slick('unslick');
        $('#enroll1').slick('unslick');

        $('#learn1').html('');
        $('#decide1').html('');
        $('#enroll1').html('');
    }

    /*related links begin*/
    if ($("#related1").length) {


        var ourRequest = new XMLHttpRequest();
        var doc_cookie = document.cookie.split(";");
        //lang = doc_cookie[2].split('=');
        for (var i = 0; i < doc_cookie.length; i++) {
            var name = doc_cookie[i].split("=")[0].trim();
            if (name == 'user_status')
                language = doc_cookie[i].split("=")[1];
        }
      ourRequest.open('GET', 'js/kohlsContent.json');
   

        ourRequest.onload = function() {
            if (ourRequest.status >= 200 && ourRequest.status < 400) {
                var ourData = JSON.parse(ourRequest.responseText);
                var c = renderRelated(ourData);
            }
        };
        ourRequest.onerror = function() {
            console.log("Connection error");
        };

        ourRequest.send();
    }

    function renderRelated(data) {
        var htmlString_related = '';

        var bgcolor = {
           
        };

        var doc_cookie = document.cookie.split(";");

        var pop_location, pop_status, pop_language;

        for (var i = 0; i < doc_cookie.length; i++) {
            var name = doc_cookie[i].split("=")[0].trim();
            
            if (name == 'user_status')
                pop_status = doc_cookie[i].split("=")[1];

        }


         var no_related = 0,relate=0;
        var filename = window.location.pathname;
        var basic_related = [];
        var filename_new = filename.substr(filename.lastIndexOf('/') + 1);

        for (var i = 0; i < data.length; i++) {
            
            if (data[i].filename == filename_new) {
                //dynamically generate related links
                if (data[i].related.length > 0) {
                    
                    for (var j = 0; j < data[i].related.length; j++) {
                      
                        for (var x = 0; x < data.length; x++) {

                            var bg_class = '';
                            var location_matched = 0,
                                language_matched = 0,
                                status_matched = 0;                         
                           
                            if (data[x].status.length > 1) {
                                for (data_status = 0; data_status < data[x].status.length; data_status++) {                                
                                    if (data[x].status[data_status] == pop_status){
                                        status_matched++;                                        
                                    }
                                }
                            } else if (data[x].status == pop_status) {
                                status_matched++;                              
                            }

                            if (data[x].id == data[i].related[j] && status_matched == 1 ) {
                               
                                if ((data[x].bg_img) && (data[x].icon.trim() == 'video')) {

                                    htmlString_related += '<a style = "background-image: url(' + data[x].bg_img_url + ');" id="' + data[x].id + '"  class="' + data[x].bg_class + ' tileboxbt align-bottom icon-video" href= "' + data[x].filename + '"><div class="text-mask"></div><div class=tilebox><h2>' + data[x].title + ' </h2> </div></a>';
                                } else if (data[x].bg_img) {
                                    htmlString_related += '<a style = "background-image: url(' + data[x].bg_img_url + ');" id="' + data[x].id + '"  class=" tileboxbt ' + bg_class + ' align-bottom" href="' + data[x].filename + '"><div class="text-mask"></div><div class=tilebox><h2>' + data[x].title + ' </h2> </div></a>';
                                } else if (data[x].icon.trim() == 'pdf') {
                                    htmlString_related += '<a id="' + data[x].id + '"  class="' + data[x].bg_class + ' tileboxbt icon-pdf" href= "' + data[x].filename + '"><div class=tilebox><h2>' + data[x].title + ' </h2> </div></a>';
                                } else if (data[x].icon.trim() == 'video') {
                                    htmlString_related += '<a id="' + data[x].id + '"  class="' + data[x].bg_class + ' tileboxbt icon-video" href= "' + data[x].filename + '"><div class=tilebox><h2>' + data[x].title + ' </h2> </div></a>';
                                } else {
                                    htmlString_related += '<a id="' + data[x].id + '"  class="' + data[x].bg_class + ' tileboxbt" href= "' + data[x].filename + '"><div class=tilebox><h2>' + data[x].title + ' </h2> </div></a>';
                                }
                                relate++;

                            }
                        }

                    }
                   
                } else {
                      no_related++;
                }
            }

        }
       
        //hide if no related link
       
        if (relate > 0) {

            if ($("#related1").hasClass('slick-initialized')) {
                //     $("#related1").unslick();
            }
            $('#related1').html(htmlString_related);
            //$("#related1").not('.slick-initialized').slick({
            $('#related1').slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4, 
                responsive: [

                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            arrow: false,
                            dots: true,
                            slidesToShow: 2,                         
                            slidesToScroll: 2, 
                            swipeToSlide: true

                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrow: false,
                            slidesToShow: 2,
                             slidesToScroll: 2,
                            dots: true,
                            swipeToSlide: true
                        }
                    }

                ]
            });                
 

        } else {
     
            $('#related1').parent('div').css('display', 'none');
        }

        eventTrack();
    }


    function showFullResults() {
        //force keyup here 
        e = $.Event('keyup');
        e.keyCode = 13; // enter
        $('#tipue_search_input').trigger(e);
        $('#tipue_search_input').tiles();
        $('#myModal').iziModal('open');
        // $("#myModal").dialog("open");

    }

    function closeModal() {
        $('#myModal').iziModal('close');
        $('#myDiv').html('');     
    }

    function closeDropdownFromResults() {

        $("input[name*='serach-top']").val("");
        $("#mySearchBox").hide();
        $('#myModal').dialog('close');
        //$('#myModal').iziModal('close');   
        $(".search-top-input").blur();

    }


    //redirect to page
    var u = window.location;

    var path = window.location.pathname;
    var page = path.split("/").pop();
    var doc_cookie = document.cookie.split(';');
    var ga_avail = false,
      status='';
    for (var i = 0; i < doc_cookie.length; i++) {
        var name = doc_cookie[i].split("=")[0].trim();
        if (name == 'user_status')
            status = doc_cookie[i].split("=")[1];
        if (name == '_ga')
            ga_avail = true;

    }
    
    if (((ga_avail) || (!ga_avail)) && status == '' && window.location.search == "") {        
        $('#dialog-form').iziModal('open');       
        renderData('ft');
        setCookie('ft');
        setHeader();
          console.log('1');

    }else if(window.location.search != "" && status ==''){
      console.log('2');
         //check url if it has query string set cookie appropriately.
        var qrStr = window.location.search;
        var chkParameter = qrStr.substr(qrStr.indexOf("=")+1);
        if(chkParameter == 'ftkaiser') 
            chkParameter='ftk';
        
            setCookie(chkParameter);
            renderData(chkParameter);
            setHeader();
        
        if(qrStr != '' )
            window.history.replaceState('', document.title, window.location.pathname);
    }else if(window.location.search != "" && status !=''){
        console.log('3');
         //check url if it has query string set cookie appropriately.
        var qrStr = window.location.search;
        var chkParameter = qrStr.substr(qrStr.indexOf("=")+1);
        if(chkParameter == 'ftkaiser') 
            chkParameter='ftk';
       
            setCookie(chkParameter);
            renderData(chkParameter);
            setHeader();
       
        if(qrStr != '' )
            window.history.replaceState('', document.title, window.location.pathname);
    } else {
        console.log('4');
        var doc_cookie = document.cookie.split(";");
        var loc, status, language, first_cookie, allCookie, initialCookie = true;      


        for (var i = 0; i < doc_cookie.length; i++) {

            var name = doc_cookie[i].split("=")[0].trim(); 
            if (name == 'user_status')
                status = doc_cookie[i].split("=")[1];
            if (name == 'initialCookie')
                first_cookie = doc_cookie[i].split("=")[1];
            if (name == 'allCookie')
                allCookie = doc_cookie[i].split("=")[1];
        }
        renderData(status);

        if (!first_cookie) {
            window.location = 'index.html';            
            document.cookie = "initialCookie=" + true;
            document.cookie = "allCookie=" + true;
        } else {
              console.log('5');
            var path = window.location.pathname;
            var page = path.split("/").pop();

            if ((page == 'index.html') && (!initialCookie)) {

                $("#dialog-form").iziModal('open');
                document.cookie = 'allCookie' + '=; Max-Age=0'
            }

        }

        //eventTrack();
    }



    //search drop down close
    $('body').click(function() {
        // do something here
        if ($('#tipue_drop_content').css('display') == 'block') {
            $('#tipue_drop_content').css('display', 'none');
        }


    });

    $(document).keypress(function(e) {
        if (e.keyCode === 13) {
            showFullResults();
            e.preventDefault();
        }
        if (e.keyCode === 27) {
            if ($('#tipue_drop_content').css('display') == 'block') {
                $('#tipue_drop_content').css('display', 'none');
            }
            if ($('#dialog-form').css('display') == 'block') {
                // $("#dialog-form").dialog("close");
                $('#dialog-form').iziModal('close');
                var doc_cookie = document.cookie.split(";");
                //  lan = doc_cookie[2].split('='); 
                var language;

                for (var i = 0; i < doc_cookie.length; i++) {
                    var name = doc_cookie[i].split("=")[0].trim();
                    if (name == 'user_status')
                        language = doc_cookie[i].split("=")[1];
                }

                
                window.location = 'index.html';
                
            }
        }
    });

    $('#tipue_drop_content').mouseleave(function() {

        if ($('#tipue_drop_content').css('display') == 'block') {
            $('#tipue_drop_content').css('display', 'none');
        }

    });


    function eventTrack() {
        $('a[href^="http"]').each(function() {

            // ADD GA tracking code to links
            $(this).attr('onclick', "ga('send', 'event', 'Outbound', 'Clicked', jQuery(this).attr('href'), {'nonInteraction': 1});");
            $(this).attr('target', '_blank'); // OPTIONAL: ADD target blank
            $(this).append('<span class="sr-only">opens in a new window</span>');
        });

        $('a[href^="https"]').each(function() {

            // ADD GA tracking code to links
            $(this).attr('onclick', "ga('send', 'event', 'Outbound', 'Clicked', jQuery(this).attr('href'), {'nonInteraction': 1});");
            $(this).attr('target', '_blank'); // OPTIONAL: ADD target blank
            $(this).append('<span class="sr-only">opens in a new window</span>');
        });

        $('a[href^="pdf/"]').each(function() {

            // ADD GA tracking code to links
            $(this).attr('onclick', "ga('send', 'event', 'PDF', 'Clicked', jQuery(this).attr('href'), {'nonInteraction': 1});");
            $(this).attr('target', '_blank'); // OPTIONAL: ADD target blank
            $(this).append('<span class="sr-only">opens in a new window</span>');
        });
        $('a[href^="video/"]').each(function() {

            // ADD GA tracking code to links
            $(this).attr('onclick', "ga('send', 'event', 'Video', 'Clicked', jQuery(this).attr('href'), {'nonInteraction': 1});");
            $(this).attr('target', '_blank'); // OPTIONAL: ADD target blank
            $(this).append('<span class="sr-only">opens in a new window</span>');
        });


       


    }

    // Scroll to fn with offset options
    function scrollTo(el, d, n) { // element, diff(-/+), number
        if (d !== undefined) { // If offset is provided
            if (d === "pos") {
                $('html, body').animate({
                    scrollTop: $(el).offset().top + n
                }, 800)
            } else {
                $('html, body').animate({
                    scrollTop: $(el).offset().top - n
                }, 800)
            }
        } else { // If no offset is defined
            $('html, body').animate({
                scrollTop: $(el).offset().top
            }, 800)
        }
    }

    // Panels expand/collapse
    if ($("div.panel").length) {
        $("div.panel").hide();

        $("h2.panel").click(function(e) {
            $(this).next().slideToggle().end().toggleClass("active");
            e.preventDefault();
            scrollTo($(this), 'neg', 100);
        })
    }

}

$(document).ready(function() {    
    $("#inc-en-footer").load("inc-en-footer.html", function() {
             $("#legal").on("click", function(e) {
        $('#dialog-legal').iziModal('open');
        e.preventDefault();
     });
    })    
});