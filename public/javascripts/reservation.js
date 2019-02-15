$(function() {
    $('#q').keyup(function() {
      var query = $('#q').val() || "";
      query = query.trim();
  
      // spinner를 돌리자..
      $('.form').addClass('loading');
  
      //GET http://localhost:3000/suggest?q=kor
      $.ajax({
        url: '/suggest',
        data: {q: query},
        success: function(data) {
          // Ajax의 결과를 잘 받았을 때
          // 화면에 받은 결과를 가지고 list를 rendering하고..
          var els = data.map(function(roomInfo) {
            return '<li>' + roomInfo + '</li>';
          });
          //els: <-- "<li>Korea</li>","<li>Japan</li>"
  
          $('.suggest-box').html(els.join('\n')).show();
  
          // li item을 클릭했을 때, text box의 내용을 바꾸고, suggest-box감춤
          $('.suggest-box li').click(function(e) {
            $('#q').val($(e.currentTarget).text());
            $('.suggest-box').hide();
          });
        },
        complete: function() {
          $('.form').removeClass('loading');  // spinner를 정지
        }
      });
    });
  });


  $( function() {
    $("#datepicker").datepicker();
  });
  
  $( function() {
    $("#timepicker").timepicker();
  });
  
  
  
  
  
  
  
  script.
  $(document).ready(function () {
  $('#StartTime,#EndTime').timepicker({
  timeFormat: 'h:mm p',
  interval: '60',
  minTime: '9:00am',
  maxTime: '6:00pm',
  // defaultTime: '11',
  startTime: '9:00',
  dynamic: false,
  dropdown: true,
  scrollbar: true
  });
  });
  