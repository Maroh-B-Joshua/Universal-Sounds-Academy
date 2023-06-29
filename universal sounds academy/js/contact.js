$(document).ready( function(){
$('.submit').click(function(event){

console.log('click')

var email = $('.email').val()
var first_name = $('.first_name').val()
var last_name = $('.last_name').val()
var message = $('.message').val()
var phone = $('.phone').val()
var statusElm = $('.status').val()
statusElm.empty()

if(email.length > 5 && email.includes('@') && email.includes('.')){
  statusElm.append('<div>Email is valid</div>')

} else{
  event.preventDefault()
  statusElm.append('<div>Email is not valid</div>')
}

if(first_name.length >= 15){
  statusElm.append('<div>name is valid</div>')
} else{
  event.preventDefault()
  statusElm.append('<div>name is not valid</div>')
}

if(last_name.length >= 15) {
  statusElm.append('<div>name is valid</div>')
} else {
  event.preventDefault()
  statusElm.append('<div>name is not valid</div>')
}

if(phone.length >=14){
  statusElm.append('<div>Phone Number is valid</div>')
} else if (phone.includes('a-z')){
  event.preventDefault()
  statusElm.append('<div>Phone Number is not valid</div>')
} else {
  event.preventDefault()
  statusElm.append('<div>Phone Number is not valid</div>')
}

if(message.length >= 20){
  statusElm.append('<div>message is valid</div>')
} else{
  event.preventDefault()
  statusElm.append('<div>name is not valid</div>')
}


})
})