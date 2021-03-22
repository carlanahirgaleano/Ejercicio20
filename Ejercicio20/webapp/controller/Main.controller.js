sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "Ejercicio20/Ejercicio20/utils/Services",
        "Ejercicio20/Ejercicio20/utils/Constants",
        "sap/ui/model/json/JSONModel",
        "Ejercicio20/Ejercicio20/utils/Formatter"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, Services, Constants, JSONModel, Formatter) {
		"use strict";

		return Controller.extend("Ejercicio20.Ejercicio20.controller.Main", {
             Format: Formatter,
			onInit: function () {
                this.loadModel();

            },
            loadModel: async function(){
                let oResponse = await Services.getOrderDetails();
                const oData = oResponse[0]
                 var oModel= new JSONModel();
                      
                oModel.setData(oData);
                this.getView().setModel(oModel, Constants.names.MODELS.modelOrders)
            },
            pressItem: function(oEvent){              
                var oItem= oEvent.getSource();
                var oBindingContext= oItem.getBindingContext(Constants.names.MODELS.modelOrders)
                var oModel = this.getView().getModel(Constants.names.MODELS.modelOrders);
                var oItemSeleccionado = oModel.getProperty(oBindingContext.getPath());

                var oItemID= oItemSeleccionado.OrderID;

                this.loadModelOrder(oItemID);


                // var oModelItem= new JSONModel(oItemSeleccionado);
                // this.getOwnerComponent().setModel(oModelItem , Constants.names.MODELS.modelSeleccionado)

                this.getOwnerComponent().getRouter().navTo("RouteSecondary");
            },
            loadModelOrder : async function (orderID){
                let oResponse = await Services.getOrder(orderID);
                const oData = oResponse[0]
                var oModel= new JSONModel();
                      
                oModel.setData(oData);
                this.getOwnerComponent().setModel(oModel, Constants.names.MODELS.modelOrder)

            } 
           

		});
	});