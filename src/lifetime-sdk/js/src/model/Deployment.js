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
    root.LifetimeSdk.Deployment = factory(root.LifetimeSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Deployment model module.
   * @module model/Deployment
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Deployment</code>.
   * Deployment information with the operations executed.
   * @alias module:model/Deployment
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>Deployment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Deployment} obj Optional instance to populate.
   * @return {module:model/Deployment} The populated <code>Deployment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Key')) {
        obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
      }
      if (data.hasOwnProperty('SourceEnvironmentKey')) {
        obj['SourceEnvironmentKey'] = ApiClient.convertToType(data['SourceEnvironmentKey'], 'String');
      }
      if (data.hasOwnProperty('TargetEnvironmentKey')) {
        obj['TargetEnvironmentKey'] = ApiClient.convertToType(data['TargetEnvironmentKey'], 'String');
      }
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], 'String');
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
      if (data.hasOwnProperty('SavedOn')) {
        obj['SavedOn'] = ApiClient.convertToType(data['SavedOn'], 'Date');
      }
      if (data.hasOwnProperty('SavedBy')) {
        obj['SavedBy'] = ApiClient.convertToType(data['SavedBy'], 'String');
      }
      if (data.hasOwnProperty('SavedByUsername')) {
        obj['SavedByUsername'] = ApiClient.convertToType(data['SavedByUsername'], 'String');
      }
      if (data.hasOwnProperty('StartedOn')) {
        obj['StartedOn'] = ApiClient.convertToType(data['StartedOn'], 'Date');
      }
      if (data.hasOwnProperty('StartedBy')) {
        obj['StartedBy'] = ApiClient.convertToType(data['StartedBy'], 'String');
      }
      if (data.hasOwnProperty('StartedByUsername')) {
        obj['StartedByUsername'] = ApiClient.convertToType(data['StartedByUsername'], 'String');
      }
      if (data.hasOwnProperty('AbortedOn')) {
        obj['AbortedOn'] = ApiClient.convertToType(data['AbortedOn'], 'Date');
      }
      if (data.hasOwnProperty('AbortedBy')) {
        obj['AbortedBy'] = ApiClient.convertToType(data['AbortedBy'], 'String');
      }
      if (data.hasOwnProperty('AbortedByUsername')) {
        obj['AbortedByUsername'] = ApiClient.convertToType(data['AbortedByUsername'], 'String');
      }
      if (data.hasOwnProperty('ApplicationsVersionKeys')) {
        obj['ApplicationsVersionKeys'] = ApiClient.convertToType(data['ApplicationsVersionKeys'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Deployment unique identifier.
   * @member {String} Key
   * @default ''
   */
  exports.prototype['Key'] = '';
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
   * Deployment notes.
   * @member {String} Notes
   * @default ''
   */
  exports.prototype['Notes'] = '';
  /**
   * Date and time when the deployment plan was created.
   * @member {Date} CreatedOn
   */
  exports.prototype['CreatedOn'] = undefined;
  /**
   * Name of the user who created the deployment plan.
   * @member {String} CreatedBy
   * @default ''
   */
  exports.prototype['CreatedBy'] = '';
  /**
   * Username of the user who created the deployment plan.
   * @member {String} CreatedByUsername
   * @default ''
   */
  exports.prototype['CreatedByUsername'] = '';
  /**
   * The date and time when the deployment plan was saved.
   * @member {Date} SavedOn
   */
  exports.prototype['SavedOn'] = undefined;
  /**
   * Name of the user who last saved the deployment plan.
   * @member {String} SavedBy
   * @default ''
   */
  exports.prototype['SavedBy'] = '';
  /**
   * Username of the user who last saved the deployment plan.
   * @member {String} SavedByUsername
   * @default ''
   */
  exports.prototype['SavedByUsername'] = '';
  /**
   * The date and time when the deployment started.
   * @member {Date} StartedOn
   */
  exports.prototype['StartedOn'] = undefined;
  /**
   * Name of the user who started the deployment.
   * @member {String} StartedBy
   * @default ''
   */
  exports.prototype['StartedBy'] = '';
  /**
   * Username of the user who started the deployment.
   * @member {String} StartedByUsername
   * @default ''
   */
  exports.prototype['StartedByUsername'] = '';
  /**
   * The date and time when the deployment was aborted.
   * @member {Date} AbortedOn
   */
  exports.prototype['AbortedOn'] = undefined;
  /**
   * Name of the user who aborted the deployment.
   * @member {String} AbortedBy
   * @default ''
   */
  exports.prototype['AbortedBy'] = '';
  /**
   * Username of the user who aborted the deployment.
   * @member {String} AbortedByUsername
   * @default ''
   */
  exports.prototype['AbortedByUsername'] = '';
  /**
   * List of Application Versions included in the deployment.
   * @member {Array.<String>} ApplicationsVersionKeys
   */
  exports.prototype['ApplicationsVersionKeys'] = undefined;



  return exports;
}));


