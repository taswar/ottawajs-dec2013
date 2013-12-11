//dzone.js
var page = require('webpage').create(),
    url = 'http://www.dzone.com/links/index.html';

page.open(url, function (status) {
    if (status !== 'success') {
        console.log('Unable to access ' + url);
    } else {
         page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js", function() {
           var result = page.evaluate(function() {
             var stories = $("a[rel='bookmark']"), a, a_txt,
                 news = [], i = stories.length;

                 for(; i >= 0; i -= 1){
                   a = $(stories[i]);

                   a_txt = a.text() || '';
                   if(a_txt !== '') {
                    news.push(a.text().trim() + " | " + a.attr('href'));
                   }
                 }

                return news;
           });
           console.log(result.join('\n'));

        phantom.exit();
       });
   }
  });