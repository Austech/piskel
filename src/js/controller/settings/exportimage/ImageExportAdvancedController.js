(function () {
  var ns = $.namespace('pskl.controller.settings.exportimage');

  ns.ImageExportAdvancedController = function (piskelController) {
    this.piskelController = piskelController;
    this.cExportController = new ns.CExportController(piskelController);
  };

  pskl.utils.inherit(ns.ImageExportAdvancedController, pskl.controller.settings.AbstractSettingController);

  ns.ImageExportAdvancedController.prototype.init = function () {
    this.cExportController.init();
  };

  ns.ImageExportAdvancedController.prototype.destroy = function () {
    this.cExportController.destroy();
    this.superclass.destroy.call(this);
  };
})();
