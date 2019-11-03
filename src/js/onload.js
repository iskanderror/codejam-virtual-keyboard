const keyboardConfig = [
  [
    {scale:'1', keycode: 'Backquote', content: {'EN': {symbol: '`', symbolExt: '~'}, 'RU': {symbol: 'ё', symbolExt: 'Ё'}}},
    {scale:'1', keycode: 'Digit1', content: {'EN': {symbol: '1', symbolExt: '!'}, 'RU': {symbol: '1', symbolExt: '!'}}},
    {scale:'1', keycode: 'Digit2', content: {'EN': {symbol: '2', symbolExt: '@'}, 'RU': {symbol: '2', symbolExt: '"'}}},
    {scale:'1', keycode: 'Digit3', content: {'EN': {symbol: '3', symbolExt: '#'}, 'RU': {symbol: '3', symbolExt: '№'}}},
    {scale:'1', keycode: 'Digit4', content: {'EN': {symbol: '4', symbolExt: '$'}, 'RU': {symbol: '4', symbolExt: ';'}}},
    {scale:'1', keycode: 'Digit5', content: {'EN': {symbol: '5', symbolExt: '%'}, 'RU': {symbol: '5', symbolExt: '%'}}},
    {scale:'1', keycode: 'Digit6', content: {'EN': {symbol: '6', symbolExt: '^'}, 'RU': {symbol: '6', symbolExt: ': '}}},
    {scale:'1', keycode: 'Digit7', content: {'EN': {symbol: '7', symbolExt: '&'}, 'RU': {symbol: '7', symbolExt: '?'}}},
    {scale:'1', keycode: 'Digit8', content: {'EN': {symbol: '8', symbolExt: '*'}, 'RU': {symbol: '8', symbolExt: '*'}}},
    {scale:'1', keycode: 'Digit9', content: {'EN': {symbol: '9', symbolExt: '('}, 'RU': {symbol: '9', symbolExt: '('}}},
    {scale:'1', keycode: 'Digit0', content: {'EN': {symbol: '0', symbolExt: ')'}, 'RU': {symbol: '0', symbolExt: ')'}}},
    {scale:'1', keycode: 'Minus', content: {'EN': {symbol: '-', symbolExt: '_'}, 'RU': {symbol: '-', symbolExt: '_'}}},
    {scale:'1', keycode: 'Equal', content: {'EN': {symbol: '=', symbolExt: '+'}, 'RU': {symbol: '=', symbolExt: '+'}}},
    {scale:'1.5', keycode: 'Backspace', content: {'EN': {symbol: 'Backspace', symbolExt: 'Backspace'}, 'RU': {symbol: 'Backspace', symbolExt: 'Backspace'}}},
  ], [
    {scale: '1.5', keycode: 'Tab', content: {'EN': {symbol: 'Tab', symbolExt: 'Tab'}, 'RU': {symbol: 'Tab', symbolExt: 'Tab'}}},
    {scale: '1', keycode: 'KeyQ', content: {'EN': {symbol: 'q', symbolExt: 'Q'}, 'RU': {symbol: 'й', symbolExt: 'Й'}}},
    {scale: '1', keycode: 'KeyW', content: {'EN': {symbol: 'w', symbolExt: 'W'}, 'RU': {symbol: 'ц', symbolExt: 'Ц'}}},
    {scale: '1', keycode: 'KeyE', content: {'EN': {symbol: 'e', symbolExt: 'E'}, 'RU': {symbol: 'у', symbolExt: 'У'}}},
    {scale: '1', keycode: 'KeyR', content: {'EN': {symbol: 'r', symbolExt: 'R'}, 'RU': {symbol: 'к', symbolExt: 'К'}}},
    {scale: '1', keycode: 'KeyT', content: {'EN': {symbol: 't', symbolExt: 'T'}, 'RU': {symbol: 'е', symbolExt: 'Е'}}},
    {scale: '1', keycode: 'KeyY', content: {'EN': {symbol: 'y', symbolExt: 'Y'}, 'RU': {symbol: 'н', symbolExt: 'Н'}}},
    {scale: '1', keycode: 'KeyU', content: {'EN': {symbol: 'u', symbolExt: 'U'}, 'RU': {symbol: 'г', symbolExt: 'Г'}}},
    {scale: '1', keycode: 'KeyI', content: {'EN': {symbol: 'i', symbolExt: 'I'}, 'RU': {symbol: 'ш', symbolExt: 'Ш'}}},
    {scale: '1', keycode: 'KeyO', content: {'EN': {symbol: 'o', symbolExt: 'O'}, 'RU': {symbol: 'щ', symbolExt: 'Щ'}}},
    {scale: '1', keycode: 'KeyP', content: {'EN': {symbol: 'p', symbolExt: 'P'}, 'RU': {symbol: 'з', symbolExt: 'З'}}},
    {scale: '1', keycode: 'BracketLeft', content: {'EN': {symbol: '[', symbolExt: '['}, 'RU': {symbol: 'х', symbolExt: 'Х'}}},
    {scale: '1', keycode: 'BracketRight', content: {'EN': {symbol: ']', symbolExt: ']'}, 'RU': {symbol: 'ъ', symbolExt: 'Ъ'}}},
    {scale: '1', keycode: 'Backslash', content: {'EN': {symbol: '\\', symbolExt: '|'}, 'RU': {symbol: '\\', symbolExt: '/'}}},
  ], [
    {scale: '1.8', keycode: 'CapsLock', content: {'EN': {symbol: 'CapsLock', symbolExt: 'CapsLock'}, 'RU': {symbol: 'CapsLock', symbolExt: 'CapsLock'}}},
    {scale: '1', keycode: 'KeyA', content: {'EN': {symbol: 'a', symbolExt: 'A'}, 'RU': {symbol: 'ф', symbolExt: 'Ф'}}},
    {scale: '1', keycode: 'KeyS', content: {'EN': {symbol: 's', symbolExt: 'S'}, 'RU': {symbol: 'ы', symbolExt: 'Ы'}}},
    {scale: '1', keycode: 'KeyD', content: {'EN': {symbol: 'd', symbolExt: 'D'}, 'RU': {symbol: 'в', symbolExt: 'В'}}},
    {scale: '1', keycode: 'KeyF', content: {'EN': {symbol: 'f', symbolExt: 'F'}, 'RU': {symbol: 'а', symbolExt: 'А'}}},
    {scale: '1', keycode: 'KeyG', content: {'EN': {symbol: 'g', symbolExt: 'G'}, 'RU': {symbol: 'п', symbolExt: 'П'}}},
    {scale: '1', keycode: 'KeyH', content: {'EN': {symbol: 'h', symbolExt: 'H'}, 'RU': {symbol: 'р', symbolExt: 'Р'}}},
    {scale: '1', keycode: 'KeyJ', content: {'EN': {symbol: 'j', symbolExt: 'J'}, 'RU': {symbol: 'о', symbolExt: 'О'}}},
    {scale: '1', keycode: 'KeyK', content: {'EN': {symbol: 'k', symbolExt: 'K'}, 'RU': {symbol: 'л', symbolExt: 'Л'}}},
    {scale: '1', keycode: 'KeyL', content: {'EN': {symbol: 'l', symbolExt: 'L'}, 'RU': {symbol: 'д', symbolExt: 'Д'}}},
    {scale: '1', keycode: 'Semicolon', content: {'EN': {symbol: ';', symbolExt: ':'}, 'RU': {symbol: 'ж', symbolExt: 'Ж'}}},
    {scale: '1', keycode: 'Quote', content: {'EN': {symbol: '\'', symbolExt: '\"'}, 'RU': {symbol: 'э', symbolExt: 'Э'}}},
    {scale: '2', keycode: 'Enter', content: {'EN': {symbol: 'Enter', symbolExt: 'Enter'}, 'RU': {symbol: 'Enter', symbolExt: 'Enter'}}},
  ], [
    {scale: '2', keycode: 'ShiftLeft', content: {'EN': {symbol: 'Shift', symbolExt: 'Shift'}, 'RU': {symbol: 'Shift', symbolExt: 'Shift'}}},
    {scale: '1', keycode: 'KeyZ', content: {'EN': {symbol: 'z', symbolExt: 'Z'}, 'RU': {symbol: 'я', symbolExt: 'Я'}}},
    {scale: '1', keycode: 'KeyX', content: {'EN': {symbol: 'x', symbolExt: 'X'}, 'RU': {symbol: 'ч', symbolExt: 'Ч'}}},
    {scale: '1', keycode: 'KeyC', content: {'EN': {symbol: 'c', symbolExt: 'C'}, 'RU': {symbol: 'с', symbolExt: 'С'}}},
    {scale: '1', keycode: 'KeyV', content: {'EN': {symbol: 'v', symbolExt: 'V'}, 'RU': {symbol: 'м', symbolExt: 'М'}}},
    {scale: '1', keycode: 'KeyB', content: {'EN': {symbol: 'b', symbolExt: 'B'}, 'RU': {symbol: 'и', symbolExt: 'И'}}},
    {scale: '1', keycode: 'KeyN', content: {'EN': {symbol: 'n', symbolExt: 'N'}, 'RU': {symbol: 'т', symbolExt: 'Т'}}},
    {scale: '1', keycode: 'KeyM', content: {'EN': {symbol: 'm', symbolExt: 'M'}, 'RU': {symbol: 'ь', symbolExt: 'Ь'}}},
    {scale: '1', keycode: 'Comma', content: {'EN': {symbol: ',', symbolExt: '<'}, 'RU': {symbol: 'б', symbolExt: 'Б'}}},
    {scale: '1', keycode: 'Period', content: {'EN': {symbol: '.', symbolExt: '>'}, 'RU': {symbol: 'ю', symbolExt: 'Ю'}}},
    {scale: '1', keycode: 'Slash', content: {'EN': {symbol: '/', symbolExt: '?'}, 'RU': {symbol: '.', symbolExt: ','}}},
    {scale: '1', keycode: 'ArrowUp', content: {'EN': {symbol: 'Up', symbolExt: 'Up'}, 'RU': {symbol: 'Up', symbolExt: 'Up'}}},
    {scale: '1', keycode: 'ShiftRight', content: {'EN': {symbol: 'Shift', symbolExt: 'Shift'}, 'RU': {symbol: 'Shift', symbolExt: 'Shift'}}},
  ], [
    {scale: '1', keycode: 'ControlLeft', content: {'EN': {symbol: 'Ctrl', symbolExt: 'Ctrl'}, 'RU': {symbol: 'Ctrl', symbolExt: 'Ctrl'}}},
    {scale: '1', keycode: 'MetaLeft', content: {'EN': {symbol: 'Win', symbolExt: 'Win'}, 'RU': {symbol: 'Win', symbolExt: 'Win'}}},
    {scale: '1', keycode: 'AltLeft', content: {'EN': {symbol: 'Alt', symbolExt: 'Alt'}, 'RU': {symbol: 'Alt', symbolExt: 'Alt'}}},
    {scale: '6.5', keycode: 'Space', content: {'EN': {symbol: ' ', symbolExt: ' '}, 'RU': {symbol: ' ', symbolExt: ' '}}},
    {scale: '1', keycode: 'AltRight', content: {'EN': {symbol: 'Alt', symbolExt: 'Alt'}, 'RU': {symbol: 'Alt', symbolExt: 'Alt'}}},
    {scale: '1', keycode: 'ControlRight', content: {'EN': {symbol: 'Ctrl', symbolExt: 'Ctrl'}, 'RU': {symbol: 'Ctrl', symbolExt: 'Ctrl'}}},
    {scale: '1', keycode: 'ArrowLeft', content: {'EN': {symbol: 'Left', symbolExt: 'Left'}, 'RU': {symbol: 'Left', symbolExt: 'Left'}}},
    {scale: '1', keycode: 'ArrowDown', content: {'EN': {symbol: 'Down', symbolExt: 'Down'}, 'RU': {symbol: 'Down', symbolExt: 'Down'}}},
    {scale: '1', keycode: 'ArrowRight', content: {'EN': {symbol: 'Right', symbolExt: 'Right'}, 'RU': {symbol: 'Right', symbolExt: 'Right'}}},
  ]
]

let alternateSymbol = false;
let currentLanguage = 'EN';
let keyboardConfigFlat = keyboardConfig.flat(Infinity);

window.addEventListener('load', drawElements, false);
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

function onKeyDown(event){
  event.preventDefault();
  let textEditor = document.getElementById("textEditor");
  textEditor.focus();

  let keyboard = document.querySelectorAll(".keyboard--button");
  keyboard.forEach( function(element){
    if(element.id==event.code){
      element.style.cssText += "background-color: blueviolet;";
    }
  });

  let currentSymbol;
  switch (event.code){
    case 'ShiftLeft':
    case 'ShiftRight':
    case 'MetaLeft':
      break;

    case 'CapsLock':
      if(!event.repeat) {
        alternateSymbol = !alternateSymbol;
        updateKeyboard();
      }
      break;

    case 'ControlLeft':
    case 'ControlRight':
    case 'AltLeft':
    case 'AltRight':
      if (currentLanguage == 'RU') {
        currentLanguage = 'EN';
      } else {
        currentLanguage = 'RU';
      }
      updateKeyboard();
      break;

    case 'ArrowLeft':
      moveCursorLeft(textEditor, event.shiftKey);
      break;
    case 'ArrowRight':
      moveCursorRight(textEditor, event.shiftKey);
      break;
    case 'ArrowUp':
    case 'ArrowDown':
      break;

    case 'Enter':
      currentSymbol = "\n";
      break;

    case 'Tab':
      currentSymbol = "\t";
      break;
    
    case 'Backspace':
      removeText(textEditor);
      break;
    
    default:
      currentSymbol = getButtonSymbol(event.code, currentLanguage, alternateSymbol != event.shiftKey );
      break;
  }

  if (currentSymbol !== undefined){
    insertText(textEditor,currentSymbol);
  }
}

function updateKeyboard(){
  let keyboard = document.querySelectorAll(".keyboard--button");
  keyboard.forEach( function(element){
    let newSymbol = getButtonSymbol(element.id, currentLanguage, alternateSymbol);
    if(newSymbol!==undefined){
      element.innerText = newSymbol;
    }
  });
}

function insertText(textArea, text){
  let p_start = textArea.selectionStart;
  let p_end = textArea.selectionEnd;
  textArea.value = textArea.value.substring(0,p_start) + text + textArea.value.substring(p_end,textArea.value.length);
  textArea.setSelectionRange(p_start + text.length,p_start + text.length);
}

function removeText(textArea){
  let p_start = textArea.selectionStart;
  let p_end = textArea.selectionEnd;
  if(p_start == p_end){
    if (p_start > 0){
      p_start--;
    } 
  }
  textArea.value = textArea.value.substring(0,p_start) + textArea.value.substring(p_end,textArea.value.length);
  textArea.setSelectionRange(p_start,p_start);
}

function moveCursorLeft(textArea, select=false){
  let p_start = textArea.selectionStart;
  let p_end = textArea.selectionEnd;
  if(select) {
    if (p_start>0) {
      p_start--;
    }
  } else {
    if(p_start==p_end && p_start>0) {
      p_start--;
    }
    p_end = p_start;
  }
  textArea.setSelectionRange(p_start,p_end);
}

function moveCursorRight(textArea, select=false){
  let p_start = textArea.selectionStart;
  let p_end = textArea.selectionEnd;
  if(select){
    if (p_end < textArea.value.length) {
      p_end++;
    }
  } else {
    if(p_start==p_end && p_end < textArea.value.length) {
      p_end++;
    }
    p_start = p_end;
  }
  textArea.setSelectionRange(p_start,p_end);
}

function onKeyUp(event) {
  event.preventDefault();
  let keyboard = document.querySelectorAll(".keyboard--button");
  keyboard.forEach( function(element){
    if(element.id==event.code){
      element.style.cssText += "background-color: lightblue;"
    }
  });

  //fix: when two Shift button pressed, only one keyUp event will be raised
  if( (event.code == 'ShiftLeft' || event.code == 'ShiftRight') && !event.shiftKey ){
    let shiftLeft = document.getElementById("ShiftLeft");
    shiftLeft.style.cssText += "background-color: lightblue;"
    let shiftRight = document.getElementById("ShiftRight");
    shiftRight.style.cssText += "background-color: lightblue;"
  }
}

function getButtonSymbol(keycode, language='EN', alternate=false){
  let keyConfig = keyboardConfigFlat.find( (item) => item['keycode'] == keycode );
  if(keyConfig===undefined) {
    return;
  }
  if(!alternate) {
    return keyConfig['content'][language]['symbol'];
  } else {
    return keyConfig['content'][language]['symbolExt'];
  }
}

function drawElements() {
  let textEditorWrapper = document.createElement("div");
  let textEditor = document.createElement("textarea");
  textEditor.classList.add("textInput");
  textEditor.id = "textEditor";
  textEditor.placeholder = 'Just type and have fun!';
  textEditorWrapper.append(textEditor);
  document.body.append(textEditorWrapper);
  textEditor.autofocus = true;

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
      key.style.cssText += "height:60px; background-color: lightblue;" 
      let keyWidth = 80*Number(keyConfig['scale']);
      if(keyWidth !== undefined){
        key.style.cssText += "width: " + keyWidth + "px;"
      }
      keyString.append(key);
    }
    keyboardWrapper.append(keyString);
  }
  document.body.append(keyboardWrapper);
}
