//send funcs
function addSendListener() {

  var target = $("#txtinput");
  target.keyup(sendKeyup);
}

function sendKeyup(event) {

  var key = event.which;

  if (key === 13 && txt) {

      var input = $(this);
      var txt = input.val();

      input.val("");

      sendMessage(txt, "sent");

      setTimout(function() { sendMessage(txt, "recieved"); }, 1000);
  }
}

function sendClick() {

  var input = $("#txtinput");
  var txt = input.val();

  if (txt) {

    input.val("");
    sendMessage(txt, "sent");

    setTimout(function() { sendMessage(txt, "recieved"); }, 1000);
  }
}

function sendMessage(txt, type) {

  var template = $("#template-message > div").clone();
  var target = $("#chat");

  template.addClass(type);
  template.find("#message-text").text(txt);
  template.find("#message-time").text(getActualHour());


  target.append(template);
}

//search funcs
function addSearchListener() {

  var target = $("#contactsrc");
  target.keyup(searchKeyup);
}

function searchKeyup() {

  var input = $(this);
  var txt = input.val();
  var contacts = $(".contacts")
  contacts.each(function() {

    var contact = $(this);
    var name = contact.find(".contacts .contact > h4").text();

    // name.indexOf(txt)
    if (name.toLowerCase().includes(txt.toLowerCase())) {

      contact.show();
    } else {

      contact.hide();
    }
  });
}

//general funcs
function getActualHour() {

  var date = new Date();
  return date.getHours() + ":" + date.getMinutes();
}

//init funcs
function init() {
  addSendListener();
  addSearchListener()
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
