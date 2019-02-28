


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

////////////////////////////////////////////////////////////////////////
//넘겨받은 roomnum정보에서
//예약날짜의 요일과 시간표의 요일이 같으면 

$(function() {
  $('.roomnum-btn').click(function(e) {
    var $el = $(e.currentTarget);
    $.ajax({
      url: '/reservation/timeview',
      method: 'GET',
      dataType: 'json',
      success: function(timetable,reservation) {
        $('.classstart.color').text(timetable.classstart);
        $('.question-like-btn').hide();
      },
      error: function(data, status) {
        if (data.status == 401) {
          alert('Login required!');
          location = '/signin';
        }
        console.log(data, status);
      },
      complete: function(data) {
        
      }
    });
  });

//예약정보 db에 저장하기
  $('.answer-like-btn').click(function(e) {
    var $el = $(e.currentTarget);
    if ($el.hasClass('disabled')) return;
    $.ajax({
      url: '/api/answers/' + $el.data('id') + '/like',
      method: 'POST',
      dataType: 'json',
      success: function(data) {
        $el.parents('.answer').find('.num-likes').text(data.numLikes);
        $el.addClass('disabled');
      },
      error: function(data, status) {
        if (data.status == 401) {
          alert('Login required!');
          location = '/signin';
        }
        console.log(data, status);
      }
    });
  });
}); 