//scrtip for the contact form

function _(id){return document.getElementById(id);}

function submitForm(){
_("subbtn").disable= true;
_("status").innerHTML = 'please wait....';
var formdata = new FormData();
formdata.append ("datepicker", _("datepicker").value);
formdata.append ("name", _("name").value);
formdata.append ("email", _("email").value);
formdata.append ("message", _("message").value);
var ajax = new XMLHttpRequest();
ajax.open("POST", "../php/contactForm.php");
ajax.onreadystatechange = function(){
if(ajax.readyState == 4 && ajax.status == 200){
if(ajax.responseText == "success"){
_("my_form").innerHTML = '<h4> Thank you ' + _("name").value + ', your message has been sent!</h4>';
}else{
_("status").innerHTML= ajax.responseText;
_("subbtn").disable = false;
}
}
}
ajax.send( formdata );
}
