const keyboardConfig = [
  [
    {scale:'1', keycode: 'Backquote', content: {'EN': {symbol: '`', alternate: '~'}, 'RU': {symbol: 'ё', alternate: 'Ё'}}},
    {scale:'1', keycode: 'Digit1', content: {'EN': {symbol: '1', alternate: '!'}, 'RU': {symbol: '1', alternate: '!'}}},
    {scale:'1', keycode: 'Digit2', content: {'EN': {symbol: '2', alternate: '@'}, 'RU': {symbol: '2', alternate: '"'}}},
    {scale:'1', keycode: 'Digit3', content: {'EN': {symbol: '3', alternate: '#'}, 'RU': {symbol: '3', alternate: '№'}}},
    {scale:'1', keycode: 'Digit4', content: {'EN': {symbol: '4', alternate: '$'}, 'RU': {symbol: '4', alternate: ';'}}},
    {scale:'1', keycode: 'Digit5', content: {'EN': {symbol: '5', alternate: '%'}, 'RU': {symbol: '5', alternate: '%'}}},
    {scale:'1', keycode: 'Digit6', content: {'EN': {symbol: '6', alternate: '^'}, 'RU': {symbol: '6', alternate: ': '}}},
    {scale:'1', keycode: 'Digit7', content: {'EN': {symbol: '7', alternate: '&'}, 'RU': {symbol: '7', alternate: '?'}}},
    {scale:'1', keycode: 'Digit8', content: {'EN': {symbol: '8', alternate: '*'}, 'RU': {symbol: '8', alternate: '*'}}},
    {scale:'1', keycode: 'Digit9', content: {'EN': {symbol: '9', alternate: '('}, 'RU': {symbol: '9', alternate: '('}}},
    {scale:'1', keycode: 'Digit0', content: {'EN': {symbol: '0', alternate: ')'}, 'RU': {symbol: '0', alternate: ')'}}},
    {scale:'1', keycode: 'Minus', content: {'EN': {symbol: '-', alternate: '_'}, 'RU': {symbol: '-', alternate: '_'}}},
    {scale:'1', keycode: 'Equal', content: {'EN': {symbol: '=', alternate: '+'}, 'RU': {symbol: '=', alternate: '+'}}},
    {scale:'1.5', keycode: 'Backspace', content: {'EN': {symbol: 'Backspace', alternate: 'Backspace'}, 'RU': {symbol: 'Backspace', alternate: 'Backspace'}}},
  ], [
    {scale: '1.5', keycode: 'Tab', content: {'EN': {symbol: 'Tab', alternate: 'Tab'}, 'RU': {symbol: 'Tab', alternate: 'Tab'}}},
    {scale: '1', keycode: 'KeyQ', content: {'EN': {symbol: 'q', alternate: 'Q'}, 'RU': {symbol: 'й', alternate: 'Й'}}},
    {scale: '1', keycode: 'KeyW', content: {'EN': {symbol: 'w', alternate: 'W'}, 'RU': {symbol: 'ц', alternate: 'Ц'}}},
    {scale: '1', keycode: 'KeyE', content: {'EN': {symbol: 'e', alternate: 'E'}, 'RU': {symbol: 'у', alternate: 'У'}}},
    {scale: '1', keycode: 'KeyR', content: {'EN': {symbol: 'r', alternate: 'R'}, 'RU': {symbol: 'к', alternate: 'К'}}},
    {scale: '1', keycode: 'KeyT', content: {'EN': {symbol: 't', alternate: 'T'}, 'RU': {symbol: 'е', alternate: 'Е'}}},
    {scale: '1', keycode: 'KeyY', content: {'EN': {symbol: 'y', alternate: 'Y'}, 'RU': {symbol: 'н', alternate: 'Н'}}},
    {scale: '1', keycode: 'KeyU', content: {'EN': {symbol: 'u', alternate: 'U'}, 'RU': {symbol: 'г', alternate: 'Г'}}},
    {scale: '1', keycode: 'KeyI', content: {'EN': {symbol: 'i', alternate: 'I'}, 'RU': {symbol: 'ш', alternate: 'Ш'}}},
    {scale: '1', keycode: 'KeyO', content: {'EN': {symbol: 'o', alternate: 'O'}, 'RU': {symbol: 'щ', alternate: 'Щ'}}},
    {scale: '1', keycode: 'KeyP', content: {'EN': {symbol: 'p', alternate: 'P'}, 'RU': {symbol: 'з', alternate: 'З'}}},
    {scale: '1', keycode: 'BracketLeft', content: {'EN': {symbol: '[', alternate: '['}, 'RU': {symbol: 'х', alternate: 'Х'}}},
    {scale: '1', keycode: 'BracketRight', content: {'EN': {symbol: ']', alternate: ']'}, 'RU': {symbol: 'ъ', alternate: 'Ъ'}}},
    {scale: '1', keycode: 'Backslash', content: {'EN': {symbol: '\\', alternate: '|'}, 'RU': {symbol: '\\', alternate: '/'}}},
  ], [
    {scale: '1.8', keycode: 'CapsLock', content: {'EN': {symbol: 'CapsLock', alternate: 'CapsLock'}, 'RU': {symbol: 'CapsLock', alternate: 'CapsLock'}}},
    {scale: '1', keycode: 'KeyA', content: {'EN': {symbol: 'a', alternate: 'A'}, 'RU': {symbol: 'ф', alternate: 'Ф'}}},
    {scale: '1', keycode: 'KeyS', content: {'EN': {symbol: 's', alternate: 'S'}, 'RU': {symbol: 'ы', alternate: 'Ы'}}},
    {scale: '1', keycode: 'KeyD', content: {'EN': {symbol: 'd', alternate: 'D'}, 'RU': {symbol: 'в', alternate: 'В'}}},
    {scale: '1', keycode: 'KeyF', content: {'EN': {symbol: 'f', alternate: 'F'}, 'RU': {symbol: 'а', alternate: 'А'}}},
    {scale: '1', keycode: 'KeyG', content: {'EN': {symbol: 'g', alternate: 'G'}, 'RU': {symbol: 'п', alternate: 'П'}}},
    {scale: '1', keycode: 'KeyH', content: {'EN': {symbol: 'h', alternate: 'H'}, 'RU': {symbol: 'р', alternate: 'Р'}}},
    {scale: '1', keycode: 'KeyJ', content: {'EN': {symbol: 'j', alternate: 'J'}, 'RU': {symbol: 'о', alternate: 'О'}}},
    {scale: '1', keycode: 'KeyK', content: {'EN': {symbol: 'k', alternate: 'K'}, 'RU': {symbol: 'л', alternate: 'Л'}}},
    {scale: '1', keycode: 'KeyL', content: {'EN': {symbol: 'l', alternate: 'L'}, 'RU': {symbol: 'д', alternate: 'Д'}}},
    {scale: '1', keycode: 'Semicolon', content: {'EN': {symbol: ';', alternate: ':'}, 'RU': {symbol: 'ж', alternate: 'Ж'}}},
    {scale: '1', keycode: 'Quote', content: {'EN': {symbol: '\'', alternate: '\"'}, 'RU': {symbol: 'э', alternate: 'Э'}}},
    {scale: '2', keycode: 'Enter', content: {'EN': {symbol: 'Enter', alternate: 'Enter'}, 'RU': {symbol: 'Enter', alternate: 'Enter'}}},
  ], [
    {scale: '2', keycode: 'ShiftLeft', content: {'EN': {symbol: 'Shift', alternate: 'Shift'}, 'RU': {symbol: 'Shift', alternate: 'Shift'}}},
    {scale: '1', keycode: 'KeyZ', content: {'EN': {symbol: 'z', alternate: 'Z'}, 'RU': {symbol: 'я', alternate: 'Я'}}},
    {scale: '1', keycode: 'KeyX', content: {'EN': {symbol: 'x', alternate: 'X'}, 'RU': {symbol: 'ч', alternate: 'Ч'}}},
    {scale: '1', keycode: 'KeyC', content: {'EN': {symbol: 'c', alternate: 'C'}, 'RU': {symbol: 'с', alternate: 'С'}}},
    {scale: '1', keycode: 'KeyV', content: {'EN': {symbol: 'v', alternate: 'V'}, 'RU': {symbol: 'м', alternate: 'М'}}},
    {scale: '1', keycode: 'KeyB', content: {'EN': {symbol: 'b', alternate: 'B'}, 'RU': {symbol: 'и', alternate: 'И'}}},
    {scale: '1', keycode: 'KeyN', content: {'EN': {symbol: 'n', alternate: 'N'}, 'RU': {symbol: 'т', alternate: 'Т'}}},
    {scale: '1', keycode: 'KeyM', content: {'EN': {symbol: 'm', alternate: 'M'}, 'RU': {symbol: 'ь', alternate: 'Ь'}}},
    {scale: '1', keycode: 'Comma', content: {'EN': {symbol: ',', alternate: '<'}, 'RU': {symbol: 'б', alternate: 'Б'}}},
    {scale: '1', keycode: 'Period', content: {'EN': {symbol: '.', alternate: '>'}, 'RU': {symbol: 'ю', alternate: 'Ю'}}},
    {scale: '1', keycode: 'Slash', content: {'EN': {symbol: '/', alternate: '?'}, 'RU': {symbol: '.', alternate: ','}}},
    {scale: '1', keycode: 'ArrowUp', content: {'EN': {symbol: 'Up', alternate: 'Up'}, 'RU': {symbol: 'Up', alternate: 'Up'}}},
    {scale: '1', keycode: 'ShiftRight', content: {'EN': {symbol: 'Shift', alternate: 'Shift'}, 'RU': {symbol: 'Shift', alternate: 'Shift'}}},
  ], [
    {scale: '1', keycode: 'ControlLeft', content: {'EN': {symbol: 'Ctrl', alternate: 'Ctrl'}, 'RU': {symbol: 'Ctrl', alternate: 'Ctrl'}}},
    {scale: '1', keycode: 'MetaLeft', content: {'EN': {symbol: 'Win', alternate: 'Win'}, 'RU': {symbol: 'Win', alternate: 'Win'}}},
    {scale: '1', keycode: 'AltLeft', content: {'EN': {symbol: 'Alt', alternate: 'Alt'}, 'RU': {symbol: 'Alt', alternate: 'Alt'}}},
    {scale: '6.5', keycode: 'Space', content: {'EN': {symbol: ' ', alternate: ' '}, 'RU': {symbol: ' ', alternate: ' '}}},
    {scale: '1', keycode: 'AltRight', content: {'EN': {symbol: 'Alt', alternate: 'Alt'}, 'RU': {symbol: 'Alt', alternate: 'Alt'}}},
    {scale: '1', keycode: 'ControlRight', content: {'EN': {symbol: 'Ctrl', alternate: 'Ctrl'}, 'RU': {symbol: 'Ctrl', alternate: 'Ctrl'}}},
    {scale: '1', keycode: 'ArrowLeft', content: {'EN': {symbol: 'Left', alternate: 'Left'}, 'RU': {symbol: 'Left', alternate: 'Left'}}},
    {scale: '1', keycode: 'ArrowDown', content: {'EN': {symbol: 'Down', alternate: 'Down'}, 'RU': {symbol: 'Down', alternate: 'Down'}}},
    {scale: '1', keycode: 'ArrowRight', content: {'EN': {symbol: 'Right', alternate: 'Right'}, 'RU': {symbol: 'Right', alternate: 'Right'}}},
  ]
]
const keyboardConfigFlat = keyboardConfig.flat(Infinity);

const DEFAULT_LANGUAGE = 'EN';
const ALTERNATE_LANGUAGE = 'RU';
const DEFAULT_OPTIONS = {'currentLanguage': DEFAULT_LANGUAGE, 'isAlternate':false, 'isShiftKey': false};

let keyboardUpdateEvent = document.createEvent('Event');
keyboardUpdateEvent.initEvent('keyboardUpdate',true,true);

window.addEventListener('load', onLoad, false);

function onLoad(){
  setOptions();
  drawElements();

  document.addEventListener('keyboardUpdate',updateKeyboard,false);
  document.dispatchEvent(keyboardUpdateEvent);

  document.addEventListener('keydown', onKeyDown, false);
  document.addEventListener('keyup', onKeyUp, false);
}

function onKeyUp(event) {
  event.preventDefault();
  let parameters = {'shiftKey': event.shiftKey};
  handleButtonReleased(event.code,parameters);
  setColorReleased(event.code);
}

function onKeyDown(event){
  event.preventDefault();
  setColorPressed(event.code);

  let textEditor = document.getElementById("textEditor");
  textEditor.focus();
  let parameters = {'repeat': event.repeat};
  handleButtonPressed(textEditor, event.code, parameters);
}

function onButtonClick()
{
  let code = this.id;

  setColorPressed(code);
  let textEditor = document.getElementById("textEditor");
  textEditor.focus();
  handleButtonPressed(textEditor, code);
  
  setTimeout(function(){
    setColorReleased(code);
  }, 250);
  
}

// ---------------------------------------------------------------------------------------
// text functions
function handleButtonPressed(textEditor, code, parameters={}){
  let currentSymbol;
  let {repeat=false} = parameters;
  let {isAlternate, currentLanguage, isShiftKey} = getOptions();
  switch (code){
    case 'ShiftLeft':
    case 'ShiftRight':
      if(!repeat) {
        isShiftKey = true;
        setOptions({isShiftKey});
      }
      break;
    case 'MetaLeft':
      break;

    case 'CapsLock':
      if(!repeat) {
        isAlternate = !isAlternate;
        setOptions({isAlternate});
        document.dispatchEvent(keyboardUpdateEvent);
      }
      break;

    case 'ControlLeft':
    case 'ControlRight':
    case 'AltLeft':
    case 'AltRight':
      currentLanguage = (currentLanguage == DEFAULT_LANGUAGE) ? ALTERNATE_LANGUAGE : DEFAULT_LANGUAGE;
      setOptions({currentLanguage});
      document.dispatchEvent(keyboardUpdateEvent);
      break;

    case 'ArrowLeft':
      moveCursorLeft(textEditor, isShiftKey);
      break;

    case 'ArrowRight':
      moveCursorRight(textEditor, isShiftKey);
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
      let buttonSymbol = getButtonSymbol(code, currentLanguage);
      if (buttonSymbol !== undefined) {
        currentSymbol = (isAlternate == isShiftKey) ? buttonSymbol['symbol'] : buttonSymbol['alternate'];
      }
      break;
  }

  if (currentSymbol !== undefined){
    insertText(textEditor,currentSymbol);
  }
}

function handleButtonReleased(code, parameters={}){
  let {shiftKey=false} = parameters;
  let {isShiftKey} = getOptions();
  switch (code){
    case 'ShiftLeft':
    case 'ShiftRight':
      isShiftKey = shiftKey;
      setOptions({isShiftKey});
      break;
  }
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

function getButtonSymbol(keycode, language=DEFAULT_LANGUAGE){
  let keyConfig = keyboardConfigFlat.find( (item) => item['keycode'] == keycode );
  if(keyConfig===undefined) {
    return;
  }
  return keyConfig['content'][language];
}

// end of text functions
// ---------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------
// keyboard view functions

function setColorPressed (code){
  let keyboard = document.querySelectorAll(".keyboard_button");
  keyboard.forEach( function(element){
    if(element.id==code){
      element.classList.toggle('keyboard_button-pressed',true);
    }
  });
}

function setColorReleased(code){
  let {isAlternate, isShiftKey} = getOptions();
  let keyboard = document.querySelectorAll(".keyboard_button");
  keyboard.forEach( function(element){
    if(element.id==code){
      switch (code){
        case 'CapsLock':
          element.classList.toggle('keyboard_button-pressed',isAlternate);
          break;
        default:
          element.classList.toggle('keyboard_button-pressed',false);
          break;
      }
    }
  });
  //fix: when two Shift button pressed, only one keyUp event will be raised
  if( (code == 'ShiftLeft' || code == 'ShiftRight') && !isShiftKey ){
    let shiftLeft = document.getElementById("ShiftLeft");
    shiftLeft.classList.toggle('keyboard_button-pressed',false);
    let shiftRight = document.getElementById("ShiftRight");
    shiftRight.classList.toggle('keyboard_button-pressed',false);
  }
}

function updateKeyboard(){
  let {isAlternate, currentLanguage} = getOptions();
  let keyboard = document.querySelectorAll(".keyboard_button");
  keyboard.forEach( function(element){
    let symbol = document.getElementById(element.id+'_symbol');
    let alternate = document.getElementById(element.id+'_alternate');
    let buttonSymbol = getButtonSymbol(element.id, currentLanguage);
    if(buttonSymbol!==undefined){
      let {symbol: sText, alternate: aText} = buttonSymbol;
      if (isAlternate) {
        [sText,aText] = [sText,aText].reverse();
      }
      if(sText==aText) {
        aText = '';
      }
      [symbol.innerText,alternate.innerText] = [sText,aText];
    }
  });
}

// end of keyboard view functions
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// initial functions

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
    keyString.classList.add("keyboard_keystring");
    for (let j=0; j<keyStringConfig.length;j++){
      let keyConfig = keyStringConfig[j];
      
      let key = document.createElement("div");
      key.id = keyConfig['keycode'];
      key.classList.add("keyboard_button");
      let keyWidth = 80*Number(keyConfig['scale']);
      if(keyWidth !== undefined){
        key.style.cssText += "width: " + keyWidth + "px;"
      }
      key.addEventListener('click',onButtonClick,false);

      let keySymbol = document.createElement("p");
      keySymbol.id = key.id + '_symbol';
      keySymbol.classList.add("keyboard_button--symbol");

      let keyAlternate = document.createElement("p");
      keyAlternate.id = key.id + '_alternate';
      keyAlternate.classList.add("keyboard_button--alternate");

      key.append(keySymbol);
      key.append(keyAlternate);
      keyString.append(key);
    }
    keyboardWrapper.append(keyString);
  }
  document.body.append(keyboardWrapper);
}

function initOptions(){
  let storedOptions = sessionStorage.getItem('options');
  if(storedOptions === null) {
    let options = DEFAULT_OPTIONS;
    sessionStorage.setItem('options', JSON.stringify(options));
  } 
}

// end of initial functions
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// options functions
function getOptions(){
  let options = JSON.parse(sessionStorage.getItem('options'));
  if (options!==null){
    return options;
  }
  return DEFAULT_OPTIONS;
}

function setOptions(options = {}){
  let storedOptions = getOptions();
  let newOptions = Object.assign(storedOptions,options);
  sessionStorage.setItem('options',JSON.stringify(newOptions))
}

// end of options functions
// ---------------------------------------------------------------------------------------
