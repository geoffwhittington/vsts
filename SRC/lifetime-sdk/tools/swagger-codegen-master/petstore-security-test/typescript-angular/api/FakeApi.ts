/**
 * Swagger Petstore *_/ ' \" =end -- \\r\\n \\n \\r
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\  *_/ ' \" =end --       
 *
 * OpenAPI spec version: 1.0.0 *_/ ' \" =end -- \\r\\n \\n \\r
 * Contact: apiteam@swagger.io *_/ ' \" =end -- \\r\\n \\n \\r
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class FakeApi {
    protected basePath = 'https://petstore.swagger.io *_/ ' \" =end -- \\r\\n \\n \\r/v2 *_/ ' \" =end -- \\r\\n \\n \\r';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * To test code injection *_/ &#39; \&quot; &#x3D;end -- \\r\\n \\n \\r
        * 
        * @param test code inject * &#39; &quot; &#x3D;end  rn n r To test code injection *_/ &#39; \&quot; &#x3D;end -- \\r\\n \\n \\r
        */
    public testCodeInjectEndRnNR (test code inject * &#39; &quot; &#x3D;end  rn n r?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/fake';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};

        headerParams['Content-Type'] = 'application/x-www-form-urlencoded';

        formParams['test code inject */ &#39; &quot; &#x3D;end -- \r\n \n \r'] = test code inject * &#39; &quot; &#x3D;end  rn n r;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
                        data: this.$httpParamSerializer(formParams),
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}