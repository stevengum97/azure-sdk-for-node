// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'southcentralus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3d1cd7a8-b035-4563-9288-dbe706cd672e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup2919/providers/Microsoft.PowerBI/workspaceCollections/azureNodeSdkTestWorkspaceCollection8031?api-version=2016-01-29')
  .reply(200, "{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup2919/providers/Microsoft.PowerBI/workspaceCollections/azureNodeSdkTestWorkspaceCollection8031\",\"name\":\"azureNodeSdkTestWorkspaceCollection8031\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-19T16:47:15.2\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}}", { 'cache-control': 'no-store, must-revalidate, no-cache',
  'content-length': '503',
  'content-type': 'application/json; charset=utf-8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-frame-options': 'deny',
  'x-content-type-options': 'nosniff',
  requestid: '3c77448a-8224-421a-895e-a11a094bab4f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14935',
  'x-ms-request-id': '892b4c07-a5aa-4c79-af72-cadb16058044',
  'x-ms-correlation-request-id': '892b4c07-a5aa-4c79-af72-cadb16058044',
  'x-ms-routing-request-id': 'WESTUS:20160519T164719Z:892b4c07-a5aa-4c79-af72-cadb16058044',
  date: 'Thu, 19 May 2016 16:47:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup2919/providers/Microsoft.PowerBI/workspaceCollections/azureNodeSdkTestWorkspaceCollection8031?api-version=2016-01-29')
  .reply(200, "{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup2919/providers/Microsoft.PowerBI/workspaceCollections/azureNodeSdkTestWorkspaceCollection8031\",\"name\":\"azureNodeSdkTestWorkspaceCollection8031\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-19T16:47:15.2\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}}", { 'cache-control': 'no-store, must-revalidate, no-cache',
  'content-length': '503',
  'content-type': 'application/json; charset=utf-8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-frame-options': 'deny',
  'x-content-type-options': 'nosniff',
  requestid: '3c77448a-8224-421a-895e-a11a094bab4f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14935',
  'x-ms-request-id': '892b4c07-a5aa-4c79-af72-cadb16058044',
  'x-ms-correlation-request-id': '892b4c07-a5aa-4c79-af72-cadb16058044',
  'x-ms-routing-request-id': 'WESTUS:20160519T164719Z:892b4c07-a5aa-4c79-af72-cadb16058044',
  date: 'Thu, 19 May 2016 16:47:18 GMT',
  connection: 'close' });
 return result; }]];