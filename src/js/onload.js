const keyboardConfig = [
  [
    {keycode: 'Backquote', content: {'EN': {symbol: '`', symbolExt: '~'}, 'RU': {symbol: 'ё', symbolExt: 'Ё'}}},
    {keycode: 'Digit1', content: {'EN': {symbol: '1', symbolExt: '!'}, 'RU': {symbol: '1', symbolExt: '!'}}},
    {keycode: 'Digit2', content: {'EN': {symbol: '2', symbolExt: '@'}, 'RU': {symbol: '2', symbolExt: '"'}}},
    {keycode: 'Digit3', content: {'EN': {symbol: '3', symbolExt: '#'}, 'RU': {symbol: '3', symbolExt: '№'}}},
    {keycode: 'Digit4', content: {'EN': {symbol: '4', symbolExt: '$'}, 'RU': {symbol: '4', symbolExt: ';'}}},
    {keycode: 'Digit5', content: {'EN': {symbol: '5', symbolExt: '%'}, 'RU': {symbol: '5', symbolExt: '%'}}},
    {keycode: 'Digit6', content: {'EN': {symbol: '6', symbolExt: '^'}, 'RU': {symbol: '6', symbolExt: ': '}}},
    {keycode: 'Digit7', content: {'EN': {symbol: '7', symbolExt: '&'}, 'RU': {symbol: '7', symbolExt: '?'}}},
    {keycode: 'Digit8', content: {'EN': {symbol: '8', symbolExt: '*'}, 'RU': {symbol: '8', symbolExt: '*'}}},
    {keycode: 'Digit9', content: {'EN': {symbol: '9', symbolExt: '('}, 'RU': {symbol: '9', symbolExt: '('}}},
    {keycode: 'Digit0', content: {'EN': {symbol: '0', symbolExt: ')'}, 'RU': {symbol: '0', symbolExt: ')'}}},
    {keycode: 'Minus', content: {'EN': {symbol: '-', symbolExt: '_'}, 'RU': {symbol: '-', symbolExt: '_'}}},
    {keycode: 'Equal', content: {'EN': {symbol: '=', symbolExt: '+'}, 'RU': {symbol: '=', symbolExt: '+'}}},
    {keycode: 'Backspace', content: {'EN': {symbol: 'Backspace', symbolExt: 'Backspace'}, 'RU': {symbol: 'Backspace', symbolExt: 'Backspace'}}},
  ], [
    {keycode: 'Tab', content: {'EN': {symbol: 'Tab', symbolExt: 'Tab'}, 'RU': {symbol: 'Tab', symbolExt: 'Tab'}}},
    {keycode: 'KeyQ', content: {'EN': {symbol: 'q', symbolExt: 'Q'}, 'RU': {symbol: 'й', symbolExt: 'Й'}}},
    {keycode: 'KeyW', content: {'EN': {symbol: 'w', symbolExt: 'W'}, 'RU': {symbol: 'ц', symbolExt: 'Ц'}}},
    {keycode: 'KeyE', content: {'EN': {symbol: 'e', symbolExt: 'E'}, 'RU': {symbol: 'у', symbolExt: 'У'}}},
    {keycode: 'KeyR', content: {'EN': {symbol: 'r', symbolExt: 'R'}, 'RU': {symbol: 'к', symbolExt: 'К'}}},
    {keycode: 'KeyT', content: {'EN': {symbol: 't', symbolExt: 'T'}, 'RU': {symbol: 'е', symbolExt: 'Е'}}},
    {keycode: 'KeyY', content: {'EN': {symbol: 'y', symbolExt: 'Y'}, 'RU': {symbol: 'н', symbolExt: 'Н'}}},
    {keycode: 'KeyU', content: {'EN': {symbol: 'u', symbolExt: 'U'}, 'RU': {symbol: 'г', symbolExt: 'Г'}}},
    {keycode: 'KeyI', content: {'EN': {symbol: 'i', symbolExt: 'I'}, 'RU': {symbol: 'ш', symbolExt: 'Ш'}}},
    {keycode: 'KeyO', content: {'EN': {symbol: 'o', symbolExt: 'O'}, 'RU': {symbol: 'щ', symbolExt: 'Щ'}}},
    {keycode: 'KeyP', content: {'EN': {symbol: 'p', symbolExt: 'P'}, 'RU': {symbol: 'з', symbolExt: 'З'}}},
    {keycode: 'BracketLeft', content: {'EN': {symbol: '[', symbolExt: '['}, 'RU': {symbol: 'х', symbolExt: 'Х'}}},
    {keycode: 'BracketRight', content: {'EN': {symbol: ']', symbolExt: ']'}, 'RU': {symbol: 'ъ', symbolExt: 'Ъ'}}},
    {keycode: 'Backslash', content: {'EN': {symbol: '\\', symbolExt: '|'}, 'RU': {symbol: '\\', symbolExt: '/'}}},
  ]
]

let alternateSymbol = false;
let keyboardConfigFlat = keyboardConfig.flat(Infinity);

window.addEventListener('load', drawElements, false);
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);



function onKeyDown(event){
  event.preventDefault();
  let textEditor = document.getElementById("textEditor");
  textEditor.value = event.code;

  if(event.code=="CapsLock"){
    alternateSymbol = !alternateSymbol;
  }

  if( event.shiftKey ){
    alternateSymbol = !alternateSymbol;
  }

  let keyboard = document.querySelectorAll(".keyboard--button");
  keyboard.forEach( function(element){
    updateButtonText(element,'EN',alternateSymbol);
    if(element.id==event.code){
      element.style.cssText += "background-color: blueviolet;";
    }
  });
}

function onKeyUp(event) {
  event.preventDefault();
  let textEditor = document.getElementById("textEditor");
  let keyboard = document.querySelectorAll(".keyboard--button");
  keyboard.forEach( function(element){
    if(element.id==event.code){
      element.style.cssText += "background-color: lightblue;"
    }
  });
}

/*
if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
  alert('Отменить!')
}
*/
function updateButtonText(element, language='EN', alternate=false){
  let keyConfig = keyboardConfigFlat.find( (item) => item['keycode']==element.id );
  if(keyConfig===undefined) {
    return;
  }
  if(!alternate) {
    element.innerText = keyConfig['content'][language]['symbol'];
  } else {
    element.innerText = keyConfig['content'][language]['symbolExt'];
  }
}

function drawElements() {
  let textEditorWrapper = document.createElement("div");
  //textEditorWrapper.innerHTML = `<input type="text">`;
  let textEditor = document.createElement("input");
  textEditor.classList.add("textInput");
  textEditor.id = "textEditor";
  textEditor.type = "text";
  textEditorWrapper.append(textEditor);
  document.body.append(textEditorWrapper);


  let keyboardWrapper = document.createElement("div");
  keyboardWrapper.classList.add("keyboard")
  for (let i=0; i<keyboardConfig.length;i++) {
    let keyStringConfig = keyboardConfig[i];
    let keyString = document.createElement("div");
    keyString.classList.add("keyboard--keystring");
    for (let j=0; j<keyStringConfig.length;j++){
      let keyConfig = keyStringConfig[j];
      let key = document.createElement("div");
      key.id = keyConfig['keycode'];
      key.classList.add("keyboard--button");
      key.innerText = keyConfig['content']['EN']['symbol'];
      key.style.cssText += "background-color: lightblue;"
      keyString.append(key);
    }
    keyboardWrapper.append(keyString);
  }
  document.body.append(keyboardWrapper);
}
