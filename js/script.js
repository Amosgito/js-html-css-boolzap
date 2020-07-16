
function addSendListener() {

  var target = $("#txtinput");
  target.keyup(sendKeyup);
}

function sendKeyup(event) {

  var key = event.which;

  if (key === 13) {

      var input = $(this);
      var txt = input.val();

      input.val("");

      sendMessage(txt);
  }
}

function sendMessage(txt) {

  var template = $("#template-message-sent > div").clone();
  var target = $("#chat");

  template.find("#message-text").text(txt);
  template.find("#message-time").text(getActualHour());


  target.append(template);
}

function getActualHour() {

  var date = new Date();
  return date.getHours() + ":" + date.getMinutes();
}


function init() {
  addSendListener();
}

$(document).ready(init)



















// $("#button").click(function() {
//
//   var txt = $("#txtinput").val();
//   var template = $("#template-chat-1").clone();
//
//   template.children(".template-chat-txt").text(txt); //...
//   // template.appendTo(".chat");
//   $(".chat").append(template);
//
//   setTimeout(function() {risposta()}, 1000);
//
//   function risposta() {
//
//     var pctxt = "ok";
//     var pcTemplate = $("#template-chat-2").clone();
//     pcTemplate.children(".template-chat-txt-pc").text(pctxt);
//     $(".chat").append(pcTemplate);
//   }
//
// })
//
// var contactsrc = $("#contactsrc").val();
// var res = string.search(contactsrc);
// if (res == 1) {
//
// }
