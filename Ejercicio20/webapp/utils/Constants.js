sap.ui.define([
	],	
	function (Controller) {
		"use strict";
        return{
           names:{
                MODELS:{
                    modelOrders: "modelOrders",
                    modelSeleccionado: "modelSeleccionado",
                    modelOrder : "modelOrder"
                }
            },
          
            routes:{
               ENTITYS:{
                   order_details: "/V3/Northwind/Northwind.svc/Order_Details" ,
                   order : "/V3/Northwind/Northwind.svc/Orders" 

                                   }
            }

        }
		
	},true);