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
    define(['ApiClient', 'model/ModuleElement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModuleElement'));
  } else {
    // Browser globals (root is window)
    if (!root.LifetimeSdk) {
      root.LifetimeSdk = {};
    }
    root.LifetimeSdk.ModuleVersion = factory(root.LifetimeSdk.ApiClient, root.LifetimeSdk.ModuleElement);
  }
}(this, function(ApiClient, ModuleElement) {
  'use strict';




  /**
   * The ModuleVersion model module.
   * @module model/ModuleVersion
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ModuleVersion</code>.
   * A module version and its information.
   * @alias module:model/ModuleVersion
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>ModuleVersion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModuleVersion} obj Optional instance to populate.
   * @return {module:model/ModuleVersion} The populated <code>ModuleVersion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Key')) {
        obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
      }
      if (data.hasOwnProperty('ModuleKey')) {
        obj['ModuleKey'] = ApiClient.convertToType(data['ModuleKey'], 'String');
      }
      if (data.hasOwnProperty('CreatedOn')) {
        obj['CreatedOn'] = ApiClient.convertToType(data['CreatedOn'], 'Date');
      }
      if (data.hasOwnProperty('CreatedBy')) {
        obj['CreatedBy'] = ApiClient.convertToType(data['CreatedBy'], 'String');
      }
      if (data.hasOwnProperty('CreatedByUsername')) {
        obj['CreatedByUsername'] = ApiClient.convertToType(data['CreatedByUsername'], 'String');
      }
      if (data.hasOwnProperty('GeneralHash')) {
        obj['GeneralHash'] = ApiClient.convertToType(data['GeneralHash'], 'String');
      }
      if (data.hasOwnProperty('DirectUpgradeFromHash')) {
        obj['DirectUpgradeFromHash'] = ApiClient.convertToType(data['DirectUpgradeFromHash'], 'String');
      }
      if (data.hasOwnProperty('PublicElements')) {
        obj['PublicElements'] = ApiClient.convertToType(data['PublicElements'], [ModuleElement]);
      }
      if (data.hasOwnProperty('ConsumedElements')) {
        obj['ConsumedElements'] = ApiClient.convertToType(data['ConsumedElements'], [ModuleElement]);
      }
    }
    return obj;
  }

  /**
   * Module version unique identifier.
   * @member {String} Key
   * @default ''
   */
  exports.prototype['Key'] = '';
  /**
   * Module unique identifier.
   * @member {String} ModuleKey
   * @default ''
   */
  exports.prototype['ModuleKey'] = '';
  /**
   * Date and time of the module version creation.
   * @member {Date} CreatedOn
   */
  exports.prototype['CreatedOn'] = undefined;
  /**
   * Name of the user that created the version.
   * @member {String} CreatedBy
   * @default ''
   */
  exports.prototype['CreatedBy'] = '';
  /**
   * Username of the user that created the version.
   * @member {String} CreatedByUsername
   * @default ''
   */
  exports.prototype['CreatedByUsername'] = '';
  /**
   * Non-unique hash of the module version. Can be used to validate if two module versions have semantic differences.
   * @member {String} GeneralHash
   * @default ''
   */
  exports.prototype['GeneralHash'] = '';
  /**
   * If this module version is the result of a direct upgrade of another version, then this field contains the key of that version
   * @member {String} DirectUpgradeFromHash
   * @default ''
   */
  exports.prototype['DirectUpgradeFromHash'] = '';
  /**
   * List of module elements exposed by module version.
   * @member {Array.<module:model/ModuleElement>} PublicElements
   */
  exports.prototype['PublicElements'] = undefined;
  /**
   * List of module elements consumed by module version.
   * @member {Array.<module:model/ModuleElement>} ConsumedElements
   */
  exports.prototype['ConsumedElements'] = undefined;



  return exports;
}));


