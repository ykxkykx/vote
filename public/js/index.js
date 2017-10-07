$(document).ready(function () {
  // 阴影出现
  $("#open,#fb").click(function () {
    $("#mask").css({
      height: $(document).height(),
      width: $(document).width()
    })
    $("#mask").show();
  });
  // 投票居中
  $("#open").click(function () {
    var top = ($(window).height() - $("vote").height()) / 2;
    var left = ($(window).width() - $("vote").width()) / 2;
    var scrollTop = $(document).scrollTop();
    var scrollLeft = $(document).scrollLeft();
    $("#vote").css({
      position: 'absolute',
      top: top + scrollTop,
      left: left + scrollLeft
    }).show();
  });
  // 评论居中
  $("#fb").click(function () {
    var top = ($(window).height() - $("#wtcomment").height()) / 2;
    var left = ($(window).width() - $("#wtcomment").width()) / 2;
    var scrollTop = $(document).scrollTop();
    var scrollLeft = $(document).scrollLeft();
    $("#wtcomment").css({
      position: 'absolute',
      top: top + scrollTop,
      left: left + scrollLeft
    }).show();
  });
  // 关闭弹窗
  $("#close,#close_2").click(function () {
    $("#vote,#mask,#wtcomment").hide();
  });
  // 检测勾选框的个数
  $("input[type=checkbox]").click(function () {
    $("input[name='test']").attr("disabled", true);
    if ($("input[name='test']:checked").length >= 10) {
      $("input[name='test']:checked").attr("disabled", false);
    } else {
      $("input[name='test']").attr("disabled", false);
    }
  });
  // 投票获取验证码
  $("#getVeri").click(function () {
    if ($("input[name='test']:checked").length == 0) {
      $("#tip").text("※请至少勾选一位参赛者！");
      return false;
    } else if (!isEmail($("#ipt_email").val())) {
      $("#tip").text("※邮箱有误，请重新输入邮箱！");
      return false;
    } else {
      $("#tip").text("获取验证码成功！请登录邮箱查看！");
      $("#ipt_email").attr("readonly", "readonly");
      $("#getVeri").attr("class", "btn btn-primary disabled");
      return true;
    }
  });
  // 投票提交
  $("#submitVotes").click(function () {
    if ($("#ipt_verify").val().length != 4) {
      $("#tip").text("※验证码有误，请重新输入验证码！");
      return false;
    } else {
      if ($("#ipt_verify").val() == "") {
        $("#tip").text("※邮箱不能为空！");
        return false;
      }
      return true;
    }
  });
  // ajax刷新验证码
  $("#veri_code").click(function() {
    $.ajax({
      type: "GET",
      url: "http://localhost:28848/vcode",
    });
  });
});

function isEmail(str) {
  var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
  return reg.test(str);
}