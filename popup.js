

function authenticate() {
  var clientId = '1563153502149.1563168407077';
  var redirectURL = chrome.identity.getRedirectURL('slacktrollers');
  var scopes = 'users:read';
  var authURL = "https://slack.com/oauth/authorize?client_id=" + clientId + "&redirect_uri=" + redirectURL +"&scope="+scopes + "&response_type=token";
  chrome.identity.launchWebAuthFlow({url: authURL, interactive: true}, function(redirectURL) {
    console.log(redirectURL);
  });
}

var connectButton = document.getElementById('connectButton');
connectButton.addEventListener('click', authenticate);