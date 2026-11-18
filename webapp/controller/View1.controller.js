sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("fragmentpractice.controller.View1", {
        onInit() {
        },

    // Open the Employee Dialog
    async onOpenDialog() {

        // Load the fargment only once
        this.oEmployeeDialog ??= await this.loadFragment({
            name: "fragmentpractice.view.EmployeeDialog"
        });

        // Displays the Dialog
        this.oEmployeeDialog.open();
    },

    // Close the Employee Dialog
    onCloseDialog() {
        this.byId("employeeDialog")?.close();
    }

    });
});