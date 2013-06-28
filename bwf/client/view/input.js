goog.provide('bwf.input');

// Mousedown
goog.events.listen(document, goog.events.EventType.MOUSEDOWN, function(event) {
  switch (event.event_.which) {
    case 1: // Left-click
      alert('Left-click');
      break;
    case 3: // Right-click
      alert('Right-click');
      break;
  }
});

// Drag
goog.events.listen(document, goog.events.EventType.DRAG, function(event) {
  // Will be needed for inventory item re-arranging
});

// Mouse-move
goog.events.listen(document, goog.events.EventType.MOUSEMOVE, function(event) {
  // Update the game's knowledge of the mouse cursor
  bwf.mouseX = event.clientX
  bwf.mouseY = event.clientY
});

// Right-click
goog.events.listen(document, goog.events.EventType.CONTEXTMENU, function(event) {
  event.preventDefault(); // Kill the context menu
});

// Text selection
goog.events.listen(document, goog.events.EventType.SELECTSTART, function(event) {
  event.preventDefault(); // Kill the i-beam cursor
});