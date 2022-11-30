---
description: Commonly occurring gateway errors in the Companies House Streaming API.
---

# Gateway errors in Streaming API - occasional internal errors
Companies House seems to have an issue with their Streaming API that causes it to occasionally reject requests due to an internal error.

## 504 Gateway Time-out
Sometimes a good request is rejected with this response (usually after about 40 seconds):
```
504 Gateway Time-out
```
```html
<html><body><h1>504 Gateway Time-out</h1>
The server didn't respond in time.
</body></html>
```
## 502 Bad Gateway
Other times it responds like this (usually after between 5 and 30 seconds):

```
502 Bad Gateway
```
```html
<html><body><h1>502 Bad Gateway</h1>
The server returned an invalid or incomplete response.
</body></html>
```

## 503 Service Unavailable
Another possible error response (usually immediately):
```
503 Service Unavailable
```
```html
<html><body><h1>503 Service Unavailable</h1>
No server is available to handle this request.
</body></html>

```

This doesn't appear to depend at all on the client or the request.

# User reports
These are some posts on the developer forum from developers who have experienced this error:
- https://forum.aws.chdev.org/t/504-gateway-time-out-error-on-streaming-api
- https://forum.aws.chdev.org/t/504-gateway-timeout-error-connecting-to-stream
- https://forum.aws.chdev.org/t/504-gateway-time-out-on-streaming-api
- https://forum.aws.chdev.org/t/504-error-connecting-to-stream-api


