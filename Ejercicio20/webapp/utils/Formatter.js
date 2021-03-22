  
jQuery.sap.require("sap.ui.core.format.DateFormat");

sap.ui.define([
      
   
],
    function () {
        "use strict";

        return {
            formatDate: function (sDate) {
                if (!sDate) {
                    return;
                }
                var date = new Date(sDate);
                var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                    pattern: "dd/MM/yyyy"
                });
                return dateFormat.format(date);
            },
            formatDesc : function (nDesc){
                if(!nDesc){
                    return;
                }
                var descuento =nDesc * 100 ;
                return descuento;
                }
            }           
        



        
    }, true);