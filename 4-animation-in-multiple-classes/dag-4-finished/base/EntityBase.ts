/// <reference path="../helpers/KeyboardHelper.ts"/>

namespace Asteroids {

    /**
     * Base Class that is generic for all entity classes
     */
    export abstract class EntityBase {

        protected readonly d_canvasHelper: CanvasHelper = CanvasHelper.Instance();
        protected readonly d_keyboardHelper : KeyboardHelper = KeyboardHelper.Instance();

        protected d_Xposition : number = -1;
        protected d_Yposition : number = -1;

        /**
         * Constructor
         * Creates the object and initializes the members
         */
        protected constructor() {
        }

        /**
         * Update
         * @AccessModifier {Public}
         * Handles the update of entities in general
         */
        public Update(): void {
            this.UpdateEntity();
        }

        // ------------------------------------------------------------------------------------
        // ------------------------------------------------------------------------------------
        // -------- Method declarations to be implemented in the derived class ----------------
        // ------------------------------------------------------------------------------------
        /**
         * UpdateEntity
         * @AccessModifier {Protected}
         * Handles the internal redirection of the click event.
         */
        protected abstract UpdateEntity(): void;
    }
}