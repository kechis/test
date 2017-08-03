

var user_email = document.getElementsByClassName('username')[0].getElementsByClassName('email')[0].innerHTML;

document.addEventListener("DOMNodeInserted", function(e) {
  arr = document.querySelectorAll('tr + tr')
  arr.forEach(function(item){
      var td = item.getElementsByTagName('td');
        if(td[0].innerHTML.indexOf(user_email) != -1 && td.length <4)
            item.append('<td>✓✓</td>');
        
  })
  
}, false);