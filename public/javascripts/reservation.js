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

  $('.answer-like-btn').click(function(e) {
    var $el = $(e.currentTarget); //현재 눌러진 거에 대해서 jquery를 적용
    if ($el.hasClass('disabled')) return;
    $.ajax({
      url: '/api/answers/' + $el.data('id') + '/like',
      method: 'POST',
      dataType: 'json',
      success: function(data) {
        $el.parents('.answer').find('.num-likes').text(data.numLikes);
        $el.addClass('disabled'); //더 이상 못누르게 disabled하게 함
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


  $( function() {
    $("#datepicker").datepicker();
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
  