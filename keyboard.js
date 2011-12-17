/**
*keyboard class
*will trigger events when keys are pressed
**/
(function(window) {
  var KeyboardListener = function(doc, keyUpFunction, keyDownFunction){
    this.initialize(doc, keyUpFunction, keyDownFunction);
  }
  var p = KeyboardListener.prototype;
  p.functions = {};
  p.functions.up = {};
  p.functions.down = {};
  
  p.enums = {};   
  p.enums.map = {};
  p.enums.map.keys = [
        "BACKSPACE",
        "TAB",
        "ENTER",
        "SHIFT",
        "CTRL",
        "ALT",
        "PAUSE",
        "CAPS_LOCK",
        "ESCAPE",
        "PAGE_UP",
        "PAGE_DOWN",
        "END",
        "HOME",
        "LEFT_ARROW",
        "UP_ARROW",
        "RIGHT_ARROW",
        "DOWN_ARROW",
        "INSERT",
        "DELETE",
        "KEY_0",
        "KEY_1",
        "KEY_2",
        "KEY_3",
        "KEY_4",
        "KEY_5",
        "KEY_6",
        "KEY_7",
        "KEY_8",
        "KEY_9",
        "KEY_A",
        "KEY_B",
        "KEY_C",
        "KEY_D",
        "KEY_E",
        "KEY_F",
        "KEY_G",
        "KEY_H",
        "KEY_I",
        "KEY_J",
        "KEY_K",
        'KEY_L',
        "KEY_M",
        "KEY_N",
        "KEY_O",
        "KEY_P",
        "KEY_Q",
        "KEY_R",
        "KEY_S",
        "KEY_T",
        "KEY_U",
        "KEY_V",
        "KEY_W",
        "KEY_X",
        "KEY_Y",
        "KEY_Z",
        "LEFT_META",
        "RIGHT_META",
        "SELECT",
        "NUMPAD_0",
        "NUMPAD_1",
        "NUMPAD_2",
        "NUMPAD_3",
        "NUMPAD_4",
        "NUMPAD_5",
        "NUMPAD_6",
        "NUMPAD_7",
        "NUMPAD_8",
        "NUMPAD_9",
        "MULTIPLY",
        "ADD",
        "SUBTRACT",
        "DECIMAL",
        "DIVIDE",
        "F1",
        "F2",
        "F3",
        "F4",
        "F5",
        "F6",
        "F7",
        "F8",
        "F9",
        "F10",
        "F11",
        "F12",
        "NUM_LOCK",
        "SCROLL_LOCK",
        "SEMICOLON",
        "EQUALS",
        "COMMA",
        "DASH",
        "PERIOD",
        "FORWARD_SLASH",
        "GRAVE_ACCENT",
        "OPEN_BRACKET",
        "BACK_SLASH",
        "CLOSE_BRACKET",
        "SINGLE_QUOTE",
        "SPACE_BAR"
      ];
  p.enums.map.keyCodes = [
            8,
            9,
            13,
            16,
            17,
            18,
            19,
            20,
            27,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            45,
            46,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            96,
            97,
            98,
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            109,
            110,
            111,
            112,
            113,
            114,
            115,
            116,
            117,
            118,
            119,
            120,
            121,
            122,
            123,
            144,
            145,
            186,
            187,
            188,
            189,
            190,
            191,
            192,
            219,
            220,
            221,
            222,
            32
          ];
  p.enums.enumerateKeyPress = function(keyCode){
  
    for(var i =0; i < this.map.keyCodes.length; i++){
      if(keyCode == this.map.keyCodes[i]){
        return this.map.keys[i];
      }
    }
  
  }
  
  /**
   * sets the document from which to listen for keyboard events
   * @method initialize
   * @param {document} doc The javascript Document
   **/
  p.initialize = function(doc, keyUpFunction, keyDownFunction){
    doc.onkeyup = this.catchKeyUp;
    doc.onkeydown = this.catchKeyDown;
    p.functions.up = keyUpFunction;
    p.functions.down = keyDownFunction;
  }
  
  /**
   * listens for key presses (onkeydown) on the set document and calls the set callback
   * @method initialize
   * @param {document} doc The javascript Document
   **/
  p.catchKeyDown = function(event){
    if(typeof p.functions.down == 'function') p.functions.down(p.enums.enumerateKeyPress(event.keyCode));
  }
  
  /**
   * listens for key presses (onkeyup) on the set document and calls the set callback
   * @method catchKeyUp
   * @param {document} doc The javascript Document
   **/
  p.catchKeyUp = function(event){
   if(typeof p.functions.up == 'function') p.functions.up(p.enums.enumerateKeyPress(event.keyCode));
  }
  
  //make the class available
  window.KeyboardListener = KeyboardListener;
  
}(window));