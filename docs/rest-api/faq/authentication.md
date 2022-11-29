---
description: The Companies House API makes use of Basic authentication, which requires putting an API key in a header of each HTTP request.
---
<script setup>
import ApiKeyEncoder from '../../../components/ApiKeyEncoder.vue'
</script>

# Authenticating requests

- [Official guide to authorisation](https://developer-specs.company-information.service.gov.uk/guides/authorisation) 
- [Official authentication docs](https://developer.company-information.service.gov.uk/authentication)

To authenticate requests, Companies House requires an API key to be encoded in a header of every HTTP request.

## Obtaining an API key
API keys can be freely obtained at https://developer.company-information.service.gov.uk/manage-applications by creating an account with Companies House and creating an application with a key.

Different keys are used for the Streaming API and the REST API, and they are not cross-compatible. 
You need to specify the key type when it is created, and it can't be changed after creation. 
This guide focuses on REST API keys.

Keys take the form of a UUID, and look something like this:
```
c891fc18-7cb0-4fbb-8878-7d8e9d708292
```

## Restricting access
You can set some restrictions on each key, such as only allowing it to be used on certain website domains or by certain IP addresses.

It should be noted that the javascript domain restriction only sets the access control headers (for CORS), but the key could still be used by other applications if the requests are made from a server.

## Making requests with a key
Once you've created a key, you can make some authenticated requests.

Companies House uses the Basic authentication method for their public data API. This follows [RFC2617](https://www.rfc-editor.org/rfc/rfc2617).

Each request must have the `Authorization` header set. 
The value of the header must be `Basic {base64key}`, where `{base64key}` is your API key with a colon `:` appended to it, encoded in base64.

For example, for the key `c891fc18-7cb0-4fbb-8878-7d8e9d708292`, with a trailing `:` (colon), encoded in base64 is `Yzg5MWZjMTgtN2NiMC00ZmJiLTg4NzgtN2Q4ZTlkNzA4MjkyOg==`.

You can use the below converter to encode your API key conveniently. Paste in your API key to see what HTTP header to include. 

<ApiKeyEncoder/>


The reason you need to encode the API key followed by a colon, is that Companies House uses the API key as a "username" in the `username:password` format, and leaves password blank.

You can encode an API key in a browser console (`Ctrl + Shift + J`) by calling 
```js
btoa(API_KEY + ':')
``` 

Many request libraries in programming languages offer automatic authentication headers where you simply provide `{username: API_KEY, password: ''}` and it generates the header with the right encoding.

For example cURL has the `-u` option which adds the right header if followed by your API key. For example:
```
curl -u c891fc18-7cb0-4fbb-8878-7d8e9d708292: https://api.company-information.service.gov.uk/company/05296680
```
**Note the trailing colon after the API key**

## Failed authentication
If you send a request with an invalid key, this is the response sent by Companies House:
```
HTTP/1.1 401 Unauthorized
Date: Tue, 29 Nov 2022 22:11:29 GMT
Content-Type: application/json
Content-Length: 53
Connection: keep-alive
Access-Control-Allow-Origin: *
Ch-Authentication-Error: Invalid Authorization
Www-Authenticate: Invalid or no Authorisation header has been provided
Server: CompaniesHouse

{"error":"Invalid Authorization","type":"ch:service"}
```

or if you completely omit the `Authorization` header, this is the response:
```
HTTP/1.1 401 Unauthorized
Date: Tue, 29 Nov 2022 22:11:29 GMT
Content-Type: application/json
Content-Length: 58
Connection: keep-alive
Access-Control-Allow-Origin: *
Ch-Authentication-Error: Empty Authorization header
Www-Authenticate: Invalid or no Authorisation header has been provided
Server: CompaniesHouse

{"error":"Empty Authorization header","type":"ch:service"}
```
