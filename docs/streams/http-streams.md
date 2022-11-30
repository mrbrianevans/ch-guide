# HTTP streams
Companies House Streaming API uses HTTP to send events in JSON format.

## How the streams work
To "connect" to a stream, make a request to the URL of the stream you wish to receive events from.
For example `https://stream.companieshouse.gov.uk/filings` for the filings stream 
(see the [streaming homepage](./index.md) for possible URLs).

The response to this request will be sent chunk by chunk, as events are created.

For example, the chunks might be something like this:
```
{"resource_kind":"individual-beneficial-owner","resource_uri":"/company/OE003609/persons-with-significant-control/individual-beneficial-owner/H1BcG4XjlH2lUlB4SCJqOoaSwUY","resource_id":"H1BcG4XjlH2lUlB4SCJqOoaSwUY","data":{"address":{"address_line_1":"345 Park Avenue","country":"United States","locality":"New York","postal_code":"10154","premises":"Blackstone Inc.","region":"New York"},"date_of_birth":{"month":2,"year":1947},"etag":"019707c2a446d35ae2e96aae48cc278035c60925","kind":"individual-beneficial-owner","links":{"self":"/comp
```
```
any/OE003609/persons-with-significant-control/individual-beneficial-owner/H1BcG4XjlH2lUlB4SCJqOoaSwUY"},"name":"Mr Stephen Allen Schwarzman","name_elements":{"forename":"Stephen","surname":"Schwarzman","title":"Mr"},"nationality":"United States","natures_of_control":["ownership-of-shares-more-than-25-percent-registered-overseas-entity","voting-rights-more-than-25-percent-registered-overseas-entity","right-to-appoint-and-remove-directors-registered-overseas-entity"],"notified_on":"2022-06-01"},"event":{"timepoint":5774978,"published_at":"2022-11-30T14:49:08","type":"changed"}}
\n
```
When combined the chunks result in new line deliminated JSON ([NDJSON](http://ndjson.org/)). 
Extra newlines may be sent as "heatbeats" to signal that the stream is still alive.
When a newline follows some JSON, the previous JSON object is complete and can be parsed.

The connection will stay alive for up to 24 hours, 
after which Companies House servers end the connection, and it needs to be re-established.

