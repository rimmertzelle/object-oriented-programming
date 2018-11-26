/// <reference path="../helpers/CanvasHelper.ts"/>

namespace Asteroids {

    /**
     * Base Class that is generic for all screen classes
     */
    export abstract class ViewBase {

        protected readonly d_canvasHelper: CanvasHelper;

        /**
         * Constructor
         * Creates the object and initializes the members
         */
        protected constructor() {

            // get access to the helper class
            this.d_canvasHelper = CanvasHelper.Instance();
        }

        /**
         * Render
         * @AccessModifier {Public}
         * Handles the drawing of screens in general
         */
        public Render(): void {
            this.d_canvasHelper.Clear();
            this.RenderScreen();
        }

        /**
         * BeforeExit
         * @AccessModifier {Public}
         * Handles the cleanup
         */
        public BeforeExit(): void {
            // Clear any lingering events.
            this.Cleanup();
        }


        // ------------------------------------------------------------------------------------
        // ------------------------------------------------------------------------------------
        // -------- Method declarations to be implemented in the derived class ----------------
        // ------------------------------------------------------------------------------------
        /**
         * RenderScreen
         * @AccessModifier {Protected}
         * Handles the internal redirection of the click event.
         * @param {MouseEvent} Event - the class containing information for the event
         */
        protected abstract RenderScreen(): void;

        /**
         * Cleanup
         * @AccessModifier {Protected}
         * Handles all the actions before the class goes out of scope
         */
        protected abstract Cleanup(): void;
    }
}