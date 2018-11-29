$(function () {
  var currentIndex = 0;
  initContent()
  showNavItem();
  showAnswer();
  function initContent() {
    $('#help-wrap .right-content .content-list').eq(currentIndex).css('display','block').siblings().css('display','none');
  }
  function showNavItem() {
    var navItem = $('#help-wrap .left-nav .directory .nav-list .nav-item');
    navItem.click(function (e) {
      $(this).addClass('active').siblings().removeClass('active');
      currentIndex = $(this).index();
      console.log($(this).index());
      $('#help-wrap .right-content .content-list').eq(currentIndex).css('display','block').siblings().css('display','none');
    })
  }
  function showAnswer() {
    var askList = $('#help-wrap .right-content .content-list .content-item .ask')
    for(var i=0;i<askList.length;i++){
      askList[i].isShowAnswer = true;
      askList[i].onclick = function (e) {
        this.isShowAnswer = !this.isShowAnswer
        console.log(this.isShowAnswer)
        //切换样式
        if(!this.isShowAnswer){
          $(this).find('.icon').addClass('close')
          $(this).siblings().css('display','none')
        }else {
          $(this).find('.icon').removeClass('close')
          $(this).siblings().css('display','block')
        }
      }
    }
  }
})