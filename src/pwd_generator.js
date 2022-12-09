/* Password Generator App that generate a password from length, difficulty and encoding options */
var passwordGenerator = document.createElement('div');
passwordGenerator.innerHTML = '<h1>Password Generator</h1>' +
  '<p>Length: <input type="number" id="length" value="8" min="1" max="100"></p>' +
  '<p>Difficulty: <select id="difficulty">' +
  '<option value="easy">Easy</option>' +
  '<option value="medium">Medium</option>' +
  '<option value="hard">Hard</option>' +
  '</select></p>' +
  '<p>Encoding: <select id="encoding">' +
  '<option value="hex">Hex</option>' +
  '<option value="base64">Base64</option>' +
  '<option value="utf8">UTF-8</option>' +
  '</select></p>' +
  '<p><button id="generate">Generate</button></p>' +
  '<p id="password"></p>';
document.body.appendChild(passwordGenerator);
var generate = document.getElementById('generate');
generate.addEventListener('click', function() {
  var length = document.getElementById('length').value;
  var difficulty = document.getElementById('difficulty').value;
  var encoding = document.getElementById('encoding').value;
  var password = generatePassword(length, difficulty, encoding);
  document.getElementById('password').innerHTML = password;
});
function generatePassword(length, difficulty, encoding) {
  var password = '';
  var chars = '';
  if (difficulty == 'easy') {
    chars = 'abcdefghijklmnopqrstuvwxyz';
  } else if (difficulty == 'medium') {
    chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  } else if (difficulty == 'hard') {
    chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  }
  for (var i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  if (encoding == 'hex') {
    password = hexEncode(password);
  } else if (encoding == 'base64') {
    password = base64Encode(password);
  } else if (encoding == 'utf8') {
    password = utf8Encode(password);
  }
  return password;
}
function hexEncode(str) {
  var hex, i;
  var result = "";
  for (i = 0; i < str.length; i++) {
    hex = str.charCodeAt(i).toString(16);
    result += ("000" + hex).slice(-4);
  }
  return result;
}
function base64Encode(str) {
  return btoa(str);
}
function utf8Encode(str) {
  return unescape(encodeURIComponent(str));
}