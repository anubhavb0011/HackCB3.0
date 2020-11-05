//Maps
console.log("hello");

var map;
function initMap() {
map = new window.google.maps.Map(document.getElementById('map'), {
center: {lat: 28.7041, lng: 77.0825},
zoom: 13
});
var marker = new google.maps.Marker({
  position:{lat: 28.7041, lng: 77.1025},
  map:map
});
}

// API

var url =
'http://newsapi.org/v2/everything?' +
'q=HealthCare&' +
'from=2020-03-19&' +
'sortBy=popularity&' +
'apiKey=377d033cce87471eafbe16e54d6c129e';
var req = new Request(url);
fetch(req)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  var article1 = data.articles[0];
  var author1 = (document.getElementById('aname1').innerHTML =
    article1.author);
    var title1 = (document.getElementById('ptitle1').innerHTML =
    article1.title);
    var content1 = (document.getElementById('content1').innerHTML =
    article1.content);
    var url = (document.getElementById('rmore1').href =
    article1.url);

  var article2 = data.articles[1];
  var author = (document.getElementById('aname2').innerHTML =
        article2.author);
      var title2 = (document.getElementById('ptitle2').innerHTML =
      article2.title);
      var content2 = (document.getElementById('content2').innerHTML =
      article2.content);
      var url = (document.getElementById('rmore2').href =
    article2.url);

      var article3 = data.articles[2];
      var author = (document.getElementById('aname3').innerHTML =
            article3.author);
          var title2 = (document.getElementById('ptitle3').innerHTML =
          article3.title);
          var content2 = (document.getElementById('content3').innerHTML =
          article3.content);
          var url = (document.getElementById('rmore3').href =
    article3.url);

          var article4 = data.articles[3];
          var author = (document.getElementById('aname4').innerHTML =
                article4.author);
              var title2 = (document.getElementById('ptitle4').innerHTML =
              article4.title);
              var content2 = (document.getElementById('content4').innerHTML =
              article4.content);
              var url = (document.getElementById('rmore4').href =
    article4.url);

              var article5 = data.articles[4];
              var author = (document.getElementById('aname5').innerHTML =
                    article5.author);
                  var title2 = (document.getElementById('ptitle5').innerHTML =
                  article5.title);
                  var content2 = (document.getElementById('content5').innerHTML =
                  article5.content);
                  var url = (document.getElementById('rmore5').href =
                  article5.url);

                  var article6 = data.articles[5];
                  var author = (document.getElementById('aname6').innerHTML =
                    article6.author);
                    var title2 = (document.getElementById('ptitle6').innerHTML =
                    article6.title);
                    var content2 = (document.getElementById('content6').innerHTML =
                    article6.content);
                    var url = (document.getElementById('rmore6').href =
                    article6.url);

                    var article7 = data.articles[6];
                    var author = (document.getElementById('aname7').innerHTML =
                      article7.author);
                      var title2 = (document.getElementById('ptitle7').innerHTML =
                      article7.title);
                      var content2 = (document.getElementById('content7').innerHTML =
                      article7.content);
                      var url = (document.getElementById('rmore7').href =
                      article7.url);

                      var article8 = data.articles[7];
                      var author = (document.getElementById('aname8').innerHTML =
                        article8.author);
                        var title2 = (document.getElementById('ptitle8').innerHTML =
                        article8.title);
                        var content2 = (document.getElementById('content8').innerHTML =
                        article8.content);
                        var url = (document.getElementById('rmore8').href =
                        article8.url);

                        var article9 = data.articles[8];
                        var author = (document.getElementById('aname9').innerHTML =
                          article9.author);
                          var title2 = (document.getElementById('ptitle9').innerHTML =
                          article9.title);
                          var content2 = (document.getElementById('content9').innerHTML =
                          article9.content);
                          var url = (document.getElementById('rmore9').href =
                          article9.url);
                          
                          var article0 = data.articles[9];
                          var author = (document.getElementById('aname0').innerHTML =
                            article0.author);
                            var title2 = (document.getElementById('ptitle0').innerHTML =
                            article0.title);
                            var content2 = (document.getElementById('content0').innerHTML =
                            article0.content);
                            var url = (document.getElementById('rmore0').href =
                            article0.url);
                
});