$(function() {
  $('.check-btn').click(function(e) {
    alert("조회중");
    var $el = $(e.currentTarget);
    if ($el.hasClass('loading')) return;
    $el.addClass('loading');
    $.ajax({
      url: '/reservation/roomnum',
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        alert("하하하");
        //가져온 데이터를 버튼으로 만든다
        for (i in data){
          var a = i.roomnum;
          var btn = document.createElement('button');
          btn.appendChild(a);  
          document.getElementById('btn_place').appendChild(btn);        
        };
        $('.check-btn').hide();
      },
      error: function(data, status) {
        if (data.status == 401) {
          alert('Login required!');
          location = '/signin';
        }
        console.log(data, status);
      },
      complete: function(data) {
        $el.removeClass('loading');
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