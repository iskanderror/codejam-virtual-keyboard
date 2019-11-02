const keyboardConfig = [
  [
    {id: '0', keycode: '192', content: {'EN': {symbol: '`', symbolExt: '~'}, 'RU': {symbol: 'ё', symbolExt: 'Ё'}}},
    {id: '1', keycode: '49', content: {'EN': {symbol: '1', symbolExt: '!'}, 'RU': {symbol: '1', symbolExt: '!'}}},
    {id: '2', keycode: '50', content: {'EN': {symbol: '2', symbolExt: '@'}, 'RU': {symbol: '2', symbolExt: '"'}}},
    {id: '3', keycode: '51', content: {'EN': {symbol: '3', symbolExt: '#'}, 'RU': {symbol: '3', symbolExt: '№'}}},
    {id: '4', keycode: '52', content: {'EN': {symbol: '4', symbolExt: '$'}, 'RU': {symbol: '4', symbolExt: ';'}}},
    {id: '5', keycode: '53', content: {'EN': {symbol: '5', symbolExt: '%'}, 'RU': {symbol: '5', symbolExt: '%'}}},
    {id: '6', keycode: '54', content: {'EN': {symbol: '6', symbolExt: '^'}, 'RU': {symbol: '6', symbolExt: ': '}}},
    {id: '7', keycode: '55', content: {'EN': {symbol: '7', symbolExt: '&'}, 'RU': {symbol: '7', symbolExt: '?'}}},
    {id: '8', keycode: '56', content: {'EN': {symbol: '8', symbolExt: '*'}, 'RU': {symbol: '8', symbolExt: '*'}}},
    {id: '9', keycode: '57', content: {'EN': {symbol: '9', symbolExt: '('}, 'RU': {symbol: '9', symbolExt: '('}}},
    {id: '10', keycode: '48', content: {'EN': {symbol: '0', symbolExt: ')'}, 'RU': {symbol: '0', symbolExt: ')'}}},
    {id: '11', keycode: '189', content: {'EN': {symbol: '-', symbolExt: '_'}, 'RU': {symbol: '-', symbolExt: '_'}}},
    {id: '12', keycode: '187', content: {'EN': {symbol: '=', symbolExt: '+'}, 'RU': {symbol: '=', symbolExt: '+'}}},
    {id: '13', keycode: '8', content: {'EN': {symbol: 'Backspace', symbolExt: ''}, 'RU': {symbol: 'Backspace', symbolExt: ''}}},
  ], [
    {id: '14', keycode: '9', content: {'EN': {symbol: 'Tab', symbolExt: ''}, 'RU': {symbol: 'Tab', symbolExt: ''}}},
    {id: '15', keycode: '81', content: {'EN': {symbol: 'q', symbolExt: 'Q'}, 'RU': {symbol: 'й', symbolExt: 'Й'}}},
    {id: '16', keycode: '87', content: {'EN': {symbol: 'w', symbolExt: 'W'}, 'RU': {symbol: 'ц', symbolExt: 'Ц'}}},
    {id: '17', keycode: '69', content: {'EN': {symbol: 'e', symbolExt: 'E'}, 'RU': {symbol: 'у', symbolExt: 'У'}}},
    {id: '18', keycode: '82', content: {'EN': {symbol: 'r', symbolExt: 'R'}, 'RU': {symbol: 'к', symbolExt: 'К'}}},
    {id: '19', keycode: '84', content: {'EN': {symbol: 't', symbolExt: 'T'}, 'RU': {symbol: 'е', symbolExt: 'Е'}}},
    {id: '20', keycode: '89', content: {'EN': {symbol: 'y', symbolExt: 'Y'}, 'RU': {symbol: 'н', symbolExt: 'Н'}}},
    {id: '21', keycode: '85', content: {'EN': {symbol: 'u', symbolExt: 'U'}, 'RU': {symbol: 'г', symbolExt: 'Г'}}},
    {id: '22', keycode: '73', content: {'EN': {symbol: 'i', symbolExt: 'I'}, 'RU': {symbol: 'ш', symbolExt: 'Ш'}}},
    {id: '23', keycode: '79', content: {'EN': {symbol: 'o', symbolExt: 'O'}, 'RU': {symbol: 'щ', symbolExt: 'Щ'}}},
    {id: '24', keycode: '80', content: {'EN': {symbol: 'p', symbolExt: 'P'}, 'RU': {symbol: 'з', symbolExt: 'З'}}},
    {id: '25', keycode: '219', content: {'EN': {symbol: '[', symbolExt: '['}, 'RU': {symbol: 'х', symbolExt: 'Х'}}},
    {id: '26', keycode: '221', content: {'EN': {symbol: ']', symbolExt: ']'}, 'RU': {symbol: 'ъ', symbolExt: 'Ъ'}}},
    {id: '27', keycode: '220', content: {'EN': {symbol: '\\', symbolExt: '|'}, 'RU': {symbol: '\\', symbolExt: '/'}}},
  ]
]

window.addEventListener('load', drawElements, false);

function drawElements() {
  let textEditorWrapper = document.createElement("div");
  textEditorWrapper.innerHTML = `<input class="textInput" type="text">`;
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
      key.classList.add("keyboard--button");
      key.innerText = keyConfig['content']['EN']['symbol'];
      keyString.append(key);
    }
    keyboardWrapper.append(keyString);
  }
  document.body.append(keyboardWrapper);

}
