var page = require('webpage').create(),
    url = 'https://news.ycombinator.com/',
    greater_than_points = 20;

page.open(url, function (status) {
    if (status !== 'success') {
        console.log('Unable to access ' + url);
    } else {
         page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js", function() {
           var result = page.evaluate(function() {
             var scores = $("span[id^='score']"), span_element, span_txt,
                 news = [], point = 0, i = scores.length, tr, a;

                 for(; i >= 0; i -= 1){
                   span_element = $(scores[i]);
                   span_txt = span_element.text().split(' ');
                   point = parseInt(span_txt[0], 10);

                   if(point > 20) {
                     tr = span_element.closest('tr').prev();
                     a = tr.find('td.title > a');
                     news.push(a.text() + " | " + a.attr('href'));
                   }
                }

                return news;
           });
           console.log(result.join('\n'));

        phantom.exit();
       });
   }
  });