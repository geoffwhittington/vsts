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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LifetimeSdk) {
      root.LifetimeSdk = {};
    }
    root.LifetimeSdk.NotesSourceEnvironmentKeyTargetEnvironmentKeyApplicationVersionKeysRecord = factory(root.LifetimeSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NotesSourceEnvironmentKeyTargetEnvironmentKeyApplicationVersionKeysRecord model module.
   * @module model/NotesSourceEnvironmentKeyTargetEnvironmentKeyApplicationVersionKeysRecord
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>NotesSourceEnvironmentKeyTargetEnvironmentKeyApplicationVersionKeysRecord</code>.
   * 
   * @alias module:model/NotesSourceEnvironmentKeyTargetEnvironmentKeyApplicationVersionKeysRecord
   * @class
   * @param notes {String} Deployment notes.
   * @param sourceEnvironmentKey {String} Source environment unique identifier.
   * @param targetEnvironmentKey {String} Target environment unique identifier.
   * @param applicationVersionKeys {Array.<String>} List of Application Versions included in the deployment.
   */
  var exports = function(notes, sourceEnvironmentKey, targetEnvironmentKey, applicationVersionKeys) {
    var _this = this;

    _this['Notes'] = notes;
    _this['SourceEnvironmentKey'] = sourceEnvironmentKey;
    _this['TargetEnvironmentKey'] = targetEnvironmentKey;
    _this['ApplicationVersionKeys'] = applicationVersionKeys;
  };

  /**
   * Constructs a <code>NotesSourceEnvironmentKeyTargetEnvironmentKeyApplicationVersionKeysRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotesSourceEnvironmentKeyTargetEnvironmentKeyApplicationVersionKeysRecord} obj Optional instance to populate.
   * @return {module:model/NotesSourceEnvironmentKeyTargetEnvironmentKeyApplicationVersionKeysRecord} The populated <code>NotesSourceEnvironmentKeyTargetEnvironmentKeyApplicationVersionKeysRecord</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], 'String');
      }
      if (data.hasOwnProperty('SourceEnvironmentKey')) {
        obj['SourceEnvironmentKey'] = ApiClient.convertToType(data['SourceEnvironmentKey'], 'String');
      }
      if (data.hasOwnProperty('TargetEnvironmentKey')) {
        obj['TargetEnvironmentKey'] = ApiClient.convertToType(data['TargetEnvironmentKey'], 'String');
      }
      if (data.hasOwnProperty('ApplicationVersionKeys')) {
        obj['ApplicationVersionKeys'] = ApiClient.convertToType(data['ApplicationVersionKeys'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Deployment notes.
   * @member {String} Notes
   * @default ''
   */
  exports.prototype['Notes'] = '';
  /**
   * Source environment unique identifier.
   * @member {String} SourceEnvironmentKey
   * @default ''
   */
  exports.prototype['SourceEnvironmentKey'] = '';
  /**
   * Target environment unique identifier.
   * @member {String} TargetEnvironmentKey
   * @default ''
   */
  exports.prototype['TargetEnvironmentKey'] = '';
  /**
   * List of Application Versions included in the deployment.
   * @member {Array.<String>} ApplicationVersionKeys
   */
  exports.prototype['ApplicationVersionKeys'] = undefined;



  return exports;
}));


