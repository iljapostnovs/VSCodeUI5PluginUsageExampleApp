sap.ui.define([
	"com/test/controller/BaseController",
	"sap/m/Table"
], function (
	BaseController,
	Table
) {
	"use strict";

	return BaseController.extend("com.test.controller.Master", {
		onInit: function () {
			this._oTable = new Table();
			var oButton = this.getView().byId("idButtonFooter");

			this._test();

			oButton.setText("text");
			this._oButton = oButton;
		},

		_test: function() {
			BaseController.prototype._test.apply(this, arguments);
			this._oButton.attachPress();
			this.getModel();

			this._oTable.addColumn();
		}
	});
});