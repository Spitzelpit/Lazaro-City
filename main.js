function createRandomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function changecontent(target) {
  const newcontent = createRandomString(target.innerHTML.length);
  target.innerHTML = newcontent;
}

function shuffle_text(event, BidContent) {
  const target = event.target;

  const interval = setInterval(function() {
    changecontent(target);
  }, 30);

  setTimeout(function() {
    clearInterval(interval);
    target.innerHTML = BidContent;
  }, 300);
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

