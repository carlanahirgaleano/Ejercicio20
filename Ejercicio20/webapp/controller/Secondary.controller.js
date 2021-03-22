sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "Ejercicio20/Ejercicio20/utils/Formatter"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, Formatter) {
		"use strict";

		return Controller.extend("Ejercicio20.Ejercicio20.controller.Secondary", {
            Format: Formatter,
			onInit: function () {
                
            },
            onBack: function (){
         this.getOwnerComponent().getRouter().navTo("RouteMain");
            }
            
		});
	});