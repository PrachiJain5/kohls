(function($) {

$('.flowchart-1 .start-quiz').before('<h3 class="start-quiz-text">Answer some questions. Get some tips.</h3>');
$('.flowchart-2 .start-quiz').before('<h3 class="start-quiz-text">Review these examples for inspiration.</h3>');
    //Added
    $('#start-button').click(function() {
        $(this).closest('.flowchart-container .content').toggleClass('hide-quiz');
        $('.intro').toggleClass('hide-quiz');
        $('.quiz-container').parent().toggleClass('show-quiz');
        $('.start-quiz-text').css('display','none');
    });
    //End Added
    // make sure to attach json object 'var input' with quiz data, and define 'var pubStylesheet'
    // variables
    var slug, currentRow, connectsTo, currentSlug, pub, number, lastRow;
    var questionNumber = 0;
   
    var separator = ",";
    var pageScroll = function(target) {
        $('html,body').animate({
            scrollTop: $(target).offset().top - 30
        }, 1000);
    };
    // get next slug to build question, disable previous question's buttons
    var getSlug = function(newslug, selection) {
        $(selection).addClass('flowchart-selected'); 

        var questionClass = $(selection).attr("id");
        //alert(questionClass);
        //trackEvent('q' + questionNumber + '-selected-' + questionClass, 'Q' + questionNumber + ' selected ' + questionClass);

        var parent = ($(selection).parent());
        //var moveArrow = $(selection).position().left + 55;
        //$(parent).after('<div style="position:absolute; left:' + moveArrow + 'px;" class="arrow-down">↓</div>');
        $(parent).addClass('question-answered');
        $('.flowchart-button').attr('disabled', true);
        slug = newslug;
        buildQuestion(slug);
    };
    // clean slug
    var cleanSlug = function(slug) {
        slug = slug.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return slug;
    };
    var compareSlug = function(slug) {
        for (var i = 0; i < input.length; i++) {
            currentSlug = cleanSlug(input[i].slug);
            if (currentSlug == slug) {
                currentRow = i;
                break;
            }
        }
    };
    // build question in flowchart - scrolldown enabled for all questions except the last one
    var buildQuestion = function(slug) {
        compareSlug(slug);
        if (currentRow === 0) {
            $(".quiz-container").append("<div class='question-" + questionNumber + "'><div class='question'>" + input[currentRow].text + "</div></div>");
        } else {
            if ($(window).width() > 500) {
                $(".quiz-container").append("<div class='question-" + questionNumber + "' style=''><div class='question'>" + input[currentRow].text + "</div></div>");
                //$(".question-" + (questionNumber)).fadeIn('slow');
                pageScroll(".question-" + (questionNumber));
            } else {
                $(".quiz-container").append("<div class='question-" + questionNumber + "'><div class='question'>" + input[currentRow].text + "</div></div>");
                pageScroll(".question-" + (questionNumber));
            }
        }
        writeOptions(currentRow);
        //trackEvent('q' + questionNumber + '-displayed', 'Q' + questionNumber + ' displayed');
    };
    // write possible options to each question, handles multiple options
    var writeOptions = function(currentRow) {
        var row = input[currentRow];
        var connectsLabels = row.connectstext.split(separator);
        connectsTo = row.connectsto.split(separator);
        if (connectsTo[0] == 'End') {
            $('.question-' + questionNumber).fadeIn(400);
            lastQuestion();
        } else {
            for (var i = 0; i < connectsLabels.length; i++) {
                $('.question-' + questionNumber).append("<button class='flowchart-button qq-button choice-" + questionNumber + "-" + i + "' id='choice-" + questionNumber + "-" + i + "'>" + connectsLabels[i] + "</button>");
                $('.choice-' + questionNumber + '-' + i).on('click', getClass);
            }
            $('.question-' + questionNumber).fadeIn(400);
            questionNumber++;
        }
    };
    var getClass = function() {
        var classes = $(this).attr('class').split(' ');
        number = classes[classes.length - 1].split('-');
        getSlug(cleanSlug(connectsTo[number[number.length - 1]]), this);
    };
    // handles last question and social media sharing buttons
    var lastQuestion = function() {
        for (var i = 0; i < input.length; i++) {
            input[i].slug = cleanSlug(input[i].slug);
            if (input[i].slug == 'end') {
                lastRow = i;
                break;
            }
        }
        
        //Tracking which final result is displayed
        trackEvent('Flow Chart Result ' + currentRow, 'Flow Chart Result ' + currentRow);
 
        $('.question-' + questionNumber).append('<div class="last"><p>' + input[lastRow].text + '</p></div><button class="flowchart-button qq-button restart">Restart</button>');
        //$('.quiz-container').append('<button class="flowchart-button qq-button restart">Restart</button></div>');
        
        // Adding event tracking for links in results section
        // Top Money Goal Flow Chart Events Only
        
/*
        $('.answer-wrapper ul').addClass('fa-ul');
        $('.fa-ul>li').prepend('<i class="fa fa-li fa-square-o" aria-hidden="true"></i>');
*/
        //$('.answer-wrapper p').addClass('hidden');
        $('div.results-bar').appendTo('.quiz-container');

        $
           // Top Money Goal Flow Chart Only
          $('#what-challenges a[href$=".html"], #what-challenges a[href*=".html#"]').each(function() {
          	// ADD GA tracking code to links
          	$(this).attr('onclick', "ga('send', 'event', 'Top Money Goal Internal Link', 'Clicked', jQuery(this).attr('href'), {'nonInteraction': 1});");
          });
          $('#what-challenges a[href^="http"]').each(function() {
          	// OPTIONAL: ADD target blank
          	$(this).attr('target', '_blank');
          	// ADD GA tracking code to links
          	$(this).attr('onclick', "ga('send', 'event', 'Top Money Goal Outbound Link', 'Clicked', jQuery(this).attr('href'), {'nonInteraction': 1});");
          });
          $('#what-challenges a[href$="pdf"]').each(function() {
          	// OPTIONAL: ADD target blank
          	$(this).attr('target', '_blank');
          	// ADD GA tracking code to links
          	$(this).attr('onclick', "ga('send', 'event', 'Top Money Goal PDF', 'Clicked', jQuery(this).attr('href'), {'nonInteraction': 1});");
          });

        
        shareQuiz();
        //trackEvent('completed', 'Top Money Goal Flow Chart completed');
        $('.restart').on('click', restart);
    };
    // restarts flowchart from beginning
    var restart = function() {
        $('.quiz-container').empty();
        pageScroll('.quiz-container');
        questionNumber = 0;
        slug = input[0].slug;
        buildQuestion(slug);
        trackEvent('restart', 'Top Money Goal Flow Chart restarted');
    };

    function trackEvent(action, label) {
            if (typeof(ga) != 'undefined') {
                ga('send', 'event', 'Top Money Goal Flow Chart', action, label);
            } else if (typeof(_gaq) != 'undefined') {
                _gaq.push($.merge(['_trackEvent', 'Top Money Goal Flow Chart'], arguments));
            }
        }
        // social media sharing
    var link = document.URL;
    var shareQuiz = function() {
        switch (pub) {
            case 'vox':
                account = voxdotcom;
                break;
            case 'sbnation':
                account = sbnation;
                break;
            case 'verge':
                account = theverge;
                break;
            case 'polygon':
                account = polygon;
                break;
            default:
                account = 'voxproduct';
        }
    };
    // attach quiz and vertical-specific stylesheets
    //$('head').append('<link rel="stylesheet" href="http://assets.sbnation.com.s3.amazonaws.com/features/quiz-generator/flowchart.css" type="text/css" />');
    // $('head').append('<link rel="stylesheet" href="/stylesheets/flowchart.css" type="text/css" />');
    $('head').append('<link rel="stylesheet" href="' + pubStylesheet + '" type="text/css" />');

    function unpackQuizHack() {
        var newInput = [];
        for (var i = 0; i < input.length; i++) {
            newInput[i] = convertUrlinJson(input[i]);
        }
        input = newInput;
        slug = input[0].slug;
        slug = cleanSlug(slug);
        buildQuestion(slug);
    }

    function convertUrlinJson(data) {
        $.each(data, function(key, value) {
            if (key == 'correct' || key == 'incorrect' || key == 'text') {
                var j;
                var hexes = data[key].match(/.{1,4}/g) || [];
                var back = "";
                for (j = 0; j < hexes.length; j++) {
                    back += String.fromCharCode(parseInt(hexes[j], 16));
                }
                data[key] = back;
            }
        });
        return data;
    }
    $(document).ready(function() {
        trackEvent('loaded', 'Top Money Goal Flow Chart is loaded');
        unpackQuizHack();
    });
})(jQuery);