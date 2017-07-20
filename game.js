/** A namespace for the Space Invaders game. */
var SpaceInvaders = SpaceInvaders || {};

/** ***************************************************************************
 * The root game structure for the Space Invaders game.
 *
 * This object module contains the necessary structure to glue the game objects
 * as a working game. It acts as the main entry point for the application which
 * is used to start the game and to provide a support for the scene system.
 *
 * The application can be created and started with the following way:
 *
 * var game = new SpaceInvaders();
 * game.start();
 *
 * After being constructed and called with the previously mentioned way, the
 * application starts running and will run until the browser window is being
 * closed or whether an application execption is raised.
 */
SpaceInvaders.Game = function () {
  /** A constant id of the canvas to be used as the rendering target. */
  var CANVAS_ID = "game-canvas";

  /** A definition whether the game is initialized or not. */
  var initialized = false;
  /** A reference to the HTML5 canvas used as the rendering target. */
  var canvas = undefined;
  /** A reference to the 2D drawing context from the HTML5 canvas. */
  var ctx = undefined;
  /** A reference to the currently active scene. */
  var scene = undefined;

  /** ***********************************************************************
    * Get the definition whether the game is initialized.
    *
    * This function provides a simple way to externally check whether the game
    * has been inited successfully and is ready to run (or already running).
    *
    * @return {boolean} A definition whether the game is inited.
    */
  this.isInitialized = function () {
    return initialized;
  };

  /** ***********************************************************************
   * Initialize the game.
   *
   * Initialization will ensure that the game will get a reference to the 2D
   * drawing context from the game canvas element. It also provides a way to
   * define a game wide initializations for game scenes etc.
   *
   * @return {boolean} A definition whether the initialization succeeded.
   */
  this.init = function () {
    // a sanity check to prevent re-initialization.
    if (initialized == true) {
      console.error("Unable to re-initialize the game.")
      return false;
    }

    // get a reference to the target <canvas> element.
    if (!(canvas = document.getElementById(CANVAS_ID))) {
      console.error("Unable to find the required canvas element.");
      return false;
    }

    // get a reference to the 2D drawing context.
    if (!(ctx = canvas.getContext("2d"))) {
      console.error("Unable to get a reference to 2D draw context.");
      return false;
    }

    // when the code reaches this point, the initialization succeeded.
    initialized = true;
    return true;
  };

  /** ***********************************************************************
   * Run the game.
   *
   * Running the game means that the game will execute an infinite loop that
   * runs the game logic updates and draw operations until the user closes
   * the browser tab or the JavaScript catches and exception from the code.
   *
   * It's quite important to note that the requestAnimationFrame provides the
   * tickTime automatically when it uses the function as a callback.
   *
   * @param {double} tickTime A timestamp when the function is called.
   */
  this.run = function (tickTime) {
    // TODO ...
    requestAnimationFrame(this.run.bind(this));
  };

  /** ***********************************************************************
   * Start the game.
   *
   * Game will be first initialized and the started. Game will be using an
   * infinite loop (via requestAnimationFrame) as the main loop, so the game
   * will not stop running until the user closes the browser tab or if an
   * error is detected by the browser JavaScript engine.
   */
  this.start = function () {
    if (this.init()) {
      this.run(0);
    }
  };
};
