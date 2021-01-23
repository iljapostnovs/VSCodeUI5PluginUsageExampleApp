sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Dialog"
], function(
	Controller,
	Dialog
) {
	"use strict";

	return Controller.extend("com.test.controller.LinterTest", {

		_onDelete: function(oEvent) {

		},

		onFragmentButtonPress: function(oEvent) {

		},

		onInit: function() {
			const oText = new sap.m.Text();
			const iNumber = 123;
			this._nonExistentMethod();
			this._testMethodParams("123", new sap.m.Text());
			this._testMethodParams("123", oText, ["asd"]);
			this._testMethodParams("123", new sap.m.Text(), [iNumber]);
			this._testMethodParams().wrongMethod();
			this._testMethodParams().wrongField;
			this._testMethodParams().allowTextSelection(true);
			this._testMethodParams().allowTextSelection(true, "asd");
			this._testMethodParams().allowTextSelection(123);
			this._testMethodParams("123");
			this._testMethodParams("123", new sap.m.Dialog());
			oText.setText(123);

			sap.ui.xmlfragment("com.test.view.fragments.SecondFragment");
		},

		/**
		 * @param {string} sFirstParam first string param
		 * @param {sap.m.Text} oSecondParam second param, instance of sap.m.Text
		 * @param {string[]} [aThirdParam] - optional string array param
		 * @returns {sap.m.Dialog} dialog
		 */
		_testMethodParams: function(sFirstParam, oSecondParam, aThirdParam) {

			return new Dialog();
		},

		/**
		 * @param {sap.m.Dialog|sap.m.Text} [vWhatIsThat] multiple type variable
		 */
		_testMultipleTypes: function(vWhatIsThat) {
			this._testMultipleTypes(new Text());
			this._testMultipleTypes(new Dialog());
			this._testMultipleTypes([]);
			this._testMultipleTypes();
			this._testMultipleTypes(vWhatIsThat);
		},

		onSecondFragmentSelectionChange: function(oEvent) {

		}
	});
});