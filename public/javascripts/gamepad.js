/*

most-recent example i've dug up:
http://www.html5rocks.com/en/tutorials/doodles/gamepad/gamepad-tester/tester.html

button numbers:
http://david.blob.core.windows.net/babylonjs/gamepad/index.html

L1: Right mouse click
R1: Left mouse click
L2: CTRL+SHIFT+TAB (move to previous tab)
R2: CTRL+TAB (move to next tab)
D-pad Up: scroll up
D-pad Down: scroll down
D-pad left: ALT+LEFT (back)
D-pad right: ALT+RIGHT (forward)
Select: ALT+TAB
Start: HOME (home directory)
PS: WIN+G (Open Chrome)
Triangle: CTRL+W (close tab)
Square: CTRL+= (zoom in)
Cross: CTRL+- (zoom out)
Circle: CTRL+SHIFT+T (restore tab)
Left Analog stick: Slow mouse (15%, for accuracy)
Right Analog stick: Fast Mouse (100% for dropping the cursor in the right general area)
Left stick click: F5 (refresh)
Right stick click: middle mouse click (scroll)
*/

var gamepad = gamepad || {};

gamepad.BUTTONS = {
  FACE_1: 0, // Face (main) buttons
  FACE_2: 1,
  FACE_3: 2,
  FACE_4: 3,
  LEFT_SHOULDER: 4, // Top shoulder buttons
  RIGHT_SHOULDER: 5,
  LEFT_SHOULDER_BOTTOM: 6, // Bottom shoulder buttons
  RIGHT_SHOULDER_BOTTOM: 7,
  SELECT: 8,
  START: 9,
  LEFT_ANALOGUE_STICK: 10, // Analogue sticks (if depressible)
  RIGHT_ANALOGUE_STICK: 11,
  PAD_TOP: 12, // Directional (discrete) pad
  PAD_BOTTOM: 13,
  PAD_LEFT: 14,
  PAD_RIGHT: 15
};

gamepad.AXES = {
  LEFT_ANALOGUE_HOR: 0,
  LEFT_ANALOGUE_VERT: 1,
  RIGHT_ANALOGUE_HOR: 2,
  RIGHT_ANALOGUE_VERT: 3
};
