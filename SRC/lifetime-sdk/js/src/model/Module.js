/**
 * v1
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModuleStatusInEnv'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModuleStatusInEnv'));
  } else {
    // Browser globals (root is window)
    if (!root.LifetimeSdk) {
      root.LifetimeSdk = {};
    }
    root.LifetimeSdk.Module = factory(root.LifetimeSdk.ApiClient, root.LifetimeSdk.ModuleStatusInEnv);
  }
}(this, function(ApiClient, ModuleStatusInEnv) {
  'use strict';




  /**
   * The Module model module.
   * @module model/Module
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Module</code>.
   * Module information and the status in the environments where the modules are running.
   * @alias module:model/Module
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Module</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Module} obj Optional instance to populate.
   * @return {module:model/Module} The populated <code>Module</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Key')) {
        obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('Kind')) {
        obj['Kind'] = ApiClient.convertToType(data['Kind'], 'String');
      }
      if (data.hasOwnProperty('ModuleStatusInEnv')) {
        obj['ModuleStatusInEnv'] = ApiClient.convertToType(data['ModuleStatusInEnv'], [ModuleStatusInEnv]);
      }
    }
    return obj;
  }

  /**
   * Module unique identifier.
   * @member {String} Key
   * @default ''
   */
  exports.prototype['Key'] = '';
  /**
   * Name of the module.
   * @member {String} Name
   * @default ''
   */
  exports.prototype['Name'] = '';
  /**
   * Description of the module.
   * @member {String} Description
   * @default ''
   */
  exports.prototype['Description'] = '';
  /**
   * Module type (eSpace or Extension).
   * @member {String} Kind
   * @default ''
   */
  exports.prototype['Kind'] = '';
  /**
   * Status of the module in environments
   * @member {Array.<module:model/ModuleStatusInEnv>} ModuleStatusInEnv
   */
  exports.prototype['ModuleStatusInEnv'] = undefined;



  return exports;
}));

