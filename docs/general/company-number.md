---
description: Every company registered in the UK has a unique company number, which can be used to identify the company. This page describes the format of company numbers and explains how to normalise them. Depending on which region of the UK a company was registered in, it will have a different prefix to its company number.
---
# Company numbers

Every company registered in the UK has a unique company number, which can be used to identify the company. 
This will remain the same regardless of changes to the details of the company such as company name.

## Format

Company numbers are 8 character alphanumeric strings. The majority (~92%) of company numbers are purely numeric.


I've tested the below regex on a database of 13.6 million real company numbers, and they all match. It was sourced from a combination of looking at various documentation and also trial-and-error testing on the database of company numbers.
```js
/^((AC|ZC|FC|GE|LP|OC|SE|SA|SZ|SF|GS|SL|SO|SC|ES|NA|NZ|NF|GN|NL|NC|R0|NI|EN|\d{2}|SG|FE)\d{5}(\d|C|R))|((RS|SO)\d{3}(\d{3}|\d{2}[WSRCZF]|\d(FI|RS|SA|IP|US|EN|AS)|CUS))|((NI|SL)\d{5}[\dA])|(OC(([\dP]{5}[CWERTB])|([\dP]{4}(OC|CU))))$/
```

This is made up of "normal" companies, which end in 6 numeric digits:
```js
/(AC|ZC|FC|GE|LP|OC|SE|SA|SZ|SF|GS|SL|SO|SC|ES|NA|NZ|NF|GN|NL|NC|R0|NI|EN|\d{2}|SG|FE)\d{5}(\d|C|R)/
```
Registered societies which are prefixed with RS and end in 0,1,2 or 3 alphabet letters:
```js
/(RS|SO)\d{3}(\d{3}|\d{2}[WSRCZF]|\d(FI|RS|SA|IP|US|EN|AS)|CUS)/
```
And scottish limited partnerships and northern ireland companies which are prefixed with SL or NI and can optionally end in an A:
```js
/(NI|SL)\d{5}[\dA]/
```

And england or wales LLPs which are prefixed with OC and can end in various alphabet letters:
```js
/OC(([\dP]{5}[CWERTB])|([\dP]{4}(OC|CU)))/
```

## Normalise

Sometimes leading zeros are omitted, so `00644831` is sometimes referred to as `644831`. 
To normalise this shorthand, pad the start of a company number with zeros until its 8 characters long.

As some company numbers contain alphabet letters, these should be upper case.
