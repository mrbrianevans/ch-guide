---
description: How to authenticate requests to Companies House streaming API using an API key.
---

# Obtaining a key
To obtain a new API key for the streaming API visit the [Manage Applications](https://developer.company-information.service.gov.uk/manage-applications) page of the Companies House Developer Hub. This requires creating an account if its your first time using the service. Here you can see existing API keys issued to you, and create new ones.

The link to create a new one is https://developer.company-information.service.gov.uk/manage-applications/add. 

# Using the key
Once you have obtained an API key, you can send it with each request to connect to a stream. This is done by setting the `Authorization` header of the HTTP request. You set it to the base64 encoded `API_KEY + ':'` (API key with a colon appended to the end). 

For example, this is how to authorise a request in NodeJS:
```javascript
import { request } from "https";
request({
  hostname: 'stream.companieshouse.gov.uk',
  port: 443,
  path: '/' + path,
  auth: streamingApiKey + ':' // <-- API key goes here 
})
```
# Invalid key
If the key is incorrect, you will get a 401 Unauthorised response code with this JSON object as the response body:
```
401 Unauthorized
```
```json
{ "error": "Invalid Authorization", "type": "ch:service" }
```

