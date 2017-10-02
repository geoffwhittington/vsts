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
    root.LifetimeSdk.DownloadLink = factory(root.LifetimeSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DownloadLink model module.
   * @module model/DownloadLink
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>DownloadLink</code>.
   * The link for the application binary file.
   * @alias module:model/DownloadLink
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DownloadLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DownloadLink} obj Optional instance to populate.
   * @return {module:model/DownloadLink} The populated <code>DownloadLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('expires')) {
        obj['expires'] = ApiClient.convertToType(data['expires'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The link for the application binary file. 
   * @member {String} url
   * @default ''
   */
  exports.prototype['url'] = '';
  /**
   * The expiration date and time of the returned link.
   * @member {Date} expires
   */
  exports.prototype['expires'] = undefined;



  return exports;
}));


