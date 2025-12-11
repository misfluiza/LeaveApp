sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        /**
         * Generated event handler.
         *
         * @param oContext the context of the page on which the event was fired. `undefined` for list report page.
         * @param aSelectedContexts the selected contexts of the table rows.
         */
        approveRequest: async function(oContext, aSelectedContexts) {
            try {
                // --- oContext is already the binding context of the current object ---
                // Update the field directly via context
                await oContext.setProperty("Status", "Approved");

                // --- Submit changes to backend ---
                await oContext.getModel().submitBatch("default"); // default batch group

                MessageToast.show("Request approved.");
            } catch (err) {
                console.error(err);
                MessageToast.show("Update failed: " + err.message);
            }
        },
        rejectRequest: async function(oContext, aSelectedContexts) {
                      try {
                // --- oContext is already the binding context of the current object ---
                // Update the field directly via context
                await oContext.setProperty("Status", "Rejected");

                // --- Submit changes to backend ---
                await oContext.getModel().submitBatch("default"); // default batch group

                MessageToast.show("Request rejected.");
            } catch (err) {
                console.error(err);
                MessageToast.show("Update failed: " + err.message);
            }

        }
    };
});
