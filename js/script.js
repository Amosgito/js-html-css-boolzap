
$("#button").click(function() {

  var txt = $("#txtinput").val();
  var template = $("#template-chat-1").clone();

  template.children(".template-chat-txt").text(txt); //...
  // template.appendTo(".chat");
  $(".chat").append(template);

  setTimeout(risposta, 1000);

  function risposta() {

    var pctxt = "ok";
    var pcTemplate = $("#template-chat-2").clone();
    pcTemplate.children(".template-chat-txt-pc").text(pctxt);
    $(".chat").append(pcTemplate);
  }

})

var contactsrc = $("#contactsrc").val();
var res = string.search(contactsrc);
if (res == 1) {

}
