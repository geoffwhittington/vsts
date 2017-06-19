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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LifetimeSdk);
  }
}(this, function(expect, LifetimeSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LifetimeSdk.V1Api();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1Api', function() {
    describe('applicationsGet', function() {
      it('should call applicationsGet successfully', function(done) {
        //uncomment below and update the code to test applicationsGet
        //instance.applicationsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('applicationsList', function() {
      it('should call applicationsList successfully', function(done) {
        //uncomment below and update the code to test applicationsList
        //instance.applicationsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('applicationsVersionsGet', function() {
      it('should call applicationsVersionsGet successfully', function(done) {
        //uncomment below and update the code to test applicationsVersionsGet
        //instance.applicationsVersionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('applicationsVersionsList', function() {
      it('should call applicationsVersionsList successfully', function(done) {
        //uncomment below and update the code to test applicationsVersionsList
        //instance.applicationsVersionsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deploymentsCreate', function() {
      it('should call deploymentsCreate successfully', function(done) {
        //uncomment below and update the code to test deploymentsCreate
        //instance.deploymentsCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deploymentsDelete', function() {
      it('should call deploymentsDelete successfully', function(done) {
        //uncomment below and update the code to test deploymentsDelete
        //instance.deploymentsDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deploymentsExecuteCommand', function() {
      it('should call deploymentsExecuteCommand successfully', function(done) {
        //uncomment below and update the code to test deploymentsExecuteCommand
        //instance.deploymentsExecuteCommand(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deploymentsGet', function() {
      it('should call deploymentsGet successfully', function(done) {
        //uncomment below and update the code to test deploymentsGet
        //instance.deploymentsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deploymentsGetStatus', function() {
      it('should call deploymentsGetStatus successfully', function(done) {
        //uncomment below and update the code to test deploymentsGetStatus
        //instance.deploymentsGetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deploymentsList', function() {
      it('should call deploymentsList successfully', function(done) {
        //uncomment below and update the code to test deploymentsList
        //instance.deploymentsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deploymentsUpdate', function() {
      it('should call deploymentsUpdate successfully', function(done) {
        //uncomment below and update the code to test deploymentsUpdate
        //instance.deploymentsUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloads', function() {
      it('should call downloads successfully', function(done) {
        //uncomment below and update the code to test downloads
        //instance.downloads(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('environmentsApplicationsVersionsCreate', function() {
      it('should call environmentsApplicationsVersionsCreate successfully', function(done) {
        //uncomment below and update the code to test environmentsApplicationsVersionsCreate
        //instance.environmentsApplicationsVersionsCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('environmentsDownloadRunningApp', function() {
      it('should call environmentsDownloadRunningApp successfully', function(done) {
        //uncomment below and update the code to test environmentsDownloadRunningApp
        //instance.environmentsDownloadRunningApp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('environmentsGet', function() {
      it('should call environmentsGet successfully', function(done) {
        //uncomment below and update the code to test environmentsGet
        //instance.environmentsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('environmentsGetRunningApp', function() {
      it('should call environmentsGetRunningApp successfully', function(done) {
        //uncomment below and update the code to test environmentsGetRunningApp
        //instance.environmentsGetRunningApp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('environmentsGetRunningApps', function() {
      it('should call environmentsGetRunningApps successfully', function(done) {
        //uncomment below and update the code to test environmentsGetRunningApps
        //instance.environmentsGetRunningApps(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('environmentsList', function() {
      it('should call environmentsList successfully', function(done) {
        //uncomment below and update the code to test environmentsList
        //instance.environmentsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('moduleVersionGet', function() {
      it('should call moduleVersionGet successfully', function(done) {
        //uncomment below and update the code to test moduleVersionGet
        //instance.moduleVersionGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('moduleVersionsList', function() {
      it('should call moduleVersionsList successfully', function(done) {
        //uncomment below and update the code to test moduleVersionsList
        //instance.moduleVersionsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modulesGet', function() {
      it('should call modulesGet successfully', function(done) {
        //uncomment below and update the code to test modulesGet
        //instance.modulesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modulesList', function() {
      it('should call modulesList successfully', function(done) {
        //uncomment below and update the code to test modulesList
        //instance.modulesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));