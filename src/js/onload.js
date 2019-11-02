const keyboardConfig = [
  [
    {id: '0', keycode: 'Backquote', content: {'EN': {symbol: '`', symbolExt: '~'}, 'RU': {symbol: 'ё', symbolExt: 'Ё'}}},
    {id: '1', keycode: 'Digit1', content: {'EN': {symbol: '1', symbolExt: '!'}, 'RU': {symbol: '1', symbolExt: '!'}}},
    {id: '2', keycode: 'Digit2', content: {'EN': {symbol: '2', symbolExt: '@'}, 'RU': {symbol: '2', symbolExt: '"'}}},
    {id: '3', keycode: 'Digit3', content: {'EN': {symbol: '3', symbolExt: '#'}, 'RU': {symbol: '3', symbolExt: '№'}}},
    {id: '4', keycode: 'Digit4', content: {'EN': {symbol: '4', symbolExt: '$'}, 'RU': {symbol: '4', symbolExt: ';'}}},
    {id: '5', keycode: 'Digit5', content: {'EN': {symbol: '5', symbolExt: '%'}, 'RU': {symbol: '5', symbolExt: '%'}}},
    {id: '6', keycode: 'Digit6', content: {'EN': {symbol: '6', symbolExt: '^'}, 'RU': {symbol: '6', symbolExt: ': '}}},
    {id: '7', keycode: 'Digit7', content: {'EN': {symbol: '7', symbolExt: '&'}, 'RU': {symbol: '7', symbolExt: '?'}}},
    {id: '8', keycode: 'Digit8', content: {'EN': {symbol: '8', symbolExt: '*'}, 'RU': {symbol: '8', symbolExt: '*'}}},
    {id: '9', keycode: 'Digit9', content: {'EN': {symbol: '9', symbolExt: '('}, 'RU': {symbol: '9', symbolExt: '('}}},
    {id: '10', keycode: 'Digit0', content: {'EN': {symbol: '0', symbolExt: ')'}, 'RU': {symbol: '0', symbolExt: ')'}}},
    {id: '11', keycode: 'Minus', content: {'EN': {symbol: '-', symbolExt: '_'}, 'RU': {symbol: '-', symbolExt: '_'}}},
    {id: '12', keycode: 'Equal', content: {'EN': {symbol: '=', symbolExt: '+'}, 'RU': {symbol: '=', symbolExt: '+'}}},
    {id: '13', keycode: 'Backspace', content: {'EN': {symbol: 'Backspace', symbolExt: ''}, 'RU': {symbol: 'Backspace', symbolExt: ''}}},
  ], [
    {id: '14', keycode: 'Tab', content: {'EN': {symbol: 'Tab', symbolExt: ''}, 'RU': {symbol: 'Tab', symbolExt: ''}}},
    {id: '15', keycode: 'KeyQ', content: {'EN': {symbol: 'q', symbolExt: 'Q'}, 'RU': {symbol: 'й', symbolExt: 'Й'}}},
    {id: '16', keycode: 'KeyW', content: {'EN': {symbol: 'w', symbolExt: 'W'}, 'RU': {symbol: 'ц', symbolExt: 'Ц'}}},
    {id: '17', keycode: 'KeyE', content: {'EN': {symbol: 'e', symbolExt: 'E'}, 'RU': {symbol: 'у', symbolExt: 'У'}}},
    {id: '18', keycode: 'KeyR', content: {'EN': {symbol: 'r', symbolExt: 'R'}, 'RU': {symbol: 'к', symbolExt: 'К'}}},
    {id: '19', keycode: 'KeyT', content: {'EN': {symbol: 't', symbolExt: 'T'}, 'RU': {symbol: 'е', symbolExt: 'Е'}}},
    {id: '20', keycode: 'KeyY', content: {'EN': {symbol: 'y', symbolExt: 'Y'}, 'RU': {symbol: 'н', symbolExt: 'Н'}}},
    {id: '21', keycode: 'KeyU', content: {'EN': {symbol: 'u', symbolExt: 'U'}, 'RU': {symbol: 'г', symbolExt: 'Г'}}},
    {id: '22', keycode: 'KeyI', content: {'EN': {symbol: 'i', symbolExt: 'I'}, 'RU': {symbol: 'ш', symbolExt: 'Ш'}}},
    {id: '23', keycode: 'KeyO', content: {'EN': {symbol: 'o', symbolExt: 'O'}, 'RU': {symbol: 'щ', symbolExt: 'Щ'}}},
    {id: '24', keycode: 'KeyP', content: {'EN': {symbol: 'p', symbolExt: 'P'}, 'RU': {symbol: 'з', symbolExt: 'З'}}},
    {id: '25', keycode: 'BracketLeft', content: {'EN': {symbol: '[', symbolExt: '['}, 'RU': {symbol: 'х', symbolExt: 'Х'}}},
    {id: '26', keycode: 'BracketRight', content: {'EN': {symbol: ']', symbolExt: ']'}, 'RU': {symbol: 'ъ', symbolExt: 'Ъ'}}},
    {id: '27', keycode: 'Backslash', content: {'EN': {symbol: '\\', symbolExt: '|'}, 'RU': {symbol: '\\', symbolExt: '/'}}},
  ]
]


window.addEventListener('load', drawElements, false);
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);


function onKeyDown(event){
  event.preventDefault();
  let textEditor = document.getElementById("textEditor");
  //textEditor.value += event.code;
  let keyboard = document.querySelectorAll(".keyboard--button");
  keyboard.forEach( function(element){
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
