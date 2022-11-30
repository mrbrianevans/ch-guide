# Streams

Companies House offers a Streaming API which streams events in real time, such as updates to company profiles or accounts filings. 
This can be used to keep a database in sync with Companies House and always have the latest data, without waiting for the monthly bulk file of company profiles to be produced.

There are currently seven streams (each with their own endpoint):
 - [`companies`](companies.md)
 - [`filings`](filings.md)
 - [`officers`](officers.md)
 - [`persons-with-significant-control`](persons-with-significant-control.md)
 - [`charges`](charges.md)
 - [`insolvency-cases`](insolvency-cases.md)
 - [`disqualified-officers`](disqualified-officers.md)

The base URL for all of them is:
```
https://stream.companieshouse.gov.uk
```

[companies.stream](https://companies.stream) can be used to see the status of the individual streams. It shows a green status indicator if the stream is online, and a red status indicator if the stream is offline.

The streams do go down (offline or errors) quite frequently as shown by the many forum posts about error response codes on the stream endpoints.

Companies House disconnects all streams every night (usually around 2-3AM), so you need to make your application reconnect if disconnected.

[About the HTTP streams pattern](./http-streams.md)

## FAQs
 - [authentication](./faq/authentication.md)
 - [gateway errors](./faq/gateway-errors.md)
