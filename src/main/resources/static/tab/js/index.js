// item selection
$('li').click(function () {
    $(this).toggleClass('selected');
    if ($('li.selected').length == 0)
        $('.select').removeClass('selected');
    else
        $('.select').addClass('selected');
    counter();
});

// all item selection
$('.select').click(function () {
    if ($('li.selected').length == 0) {
        $('li').removeClass('selected');
        $('.select').removeClass('selected');
    }
    else {
        $('li').removeClass('selected');
        $('.select').removeClass('selected');
        var checkall=document.getElementsByName("role_ids[]");
        for(var $i=0;$i<checkall.length;$i++){
            checkall[$i].checked=false;
        }
    }
    counter();
});



/* $('.select').click(function () {
  if ($('li.selected').length == 0) {
    $('li').addClass('selected');
    $('.select').addClass('selected');
  }
  else {
    $('li').removeClass('selected');
    $('.select').removeClass('selected');
  }
  counter();
});

 */




// number of selected items
function counter() {
    if ($('li.selected').length > 0)
        $('.send').addClass('selected');
    else
        $('.send').removeClass('selected');
    $('.send').attr('data-counter',$('li.selected').length);
}
