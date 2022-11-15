---
description: The charges stream sends events when a charge is registered or satisfied, for example a fixed charge, registered charge or debenture. It provides information about the charge such as the persons entitled and the related filing transactions.
---

## Charges stream

Debentures and fixed charges.


Sample event:
```json
{
  "resource_kind": "company-charges",
  "resource_uri": "/company/03743582/charges/lU2iXRw6YRxJKZilva3Y-id6NfY",
  "resource_id": "lU2iXRw6YRxJKZilva3Y-id6NfY",
  "data": {
    "charge_number": 4,
    "classification": {
      "description": "Mortgage deed",
      "type": "charge-description"
    },
    "created_on": "1999-06-10",
    "delivered_on": "1999-06-11",
    "etag": "e4d3de37c345f252da191f082c6340113c391502",
    "links": {
      "self": "/company/03743582/charges/lU2iXRw6YRxJKZilva3Y-id6NfY"
    },
    "particulars": {
      "description": "F/Hold - 6 fearon green,norton,stoke on trent,staffs; SF263128. Together with all buildings and fixtures (including trade fixtures) fixed plant and machinery by way of fixed charge all present and future book and other debts floating charge over all moveable plant machinery implements utensils furniture and equipment by way of assignment the goodwill of the business (if any) the full benefit of all licences and all guarantees.",
      "type": "short-particulars"
    },
    "persons_entitled": [
      {
        "name": "Lloyds Bank PLC"
      }
    ],
    "satisfied_on": "2022-11-15",
    "secured_details": {
      "description": "All monies due or to become due from the company to the chargee on any account whatsoever",
      "type": "amount-secured"
    },
    "status": "fully-satisfied",
    "transactions": [
      {
        "delivered_on": "1999-06-11",
        "filing_type": "create-charge-pre-2006-companies-act"
      },
      {
        "delivered_on": "2022-11-15",
        "filing_type": "charge-satisfaction",
        "links": {
          "filing": "/company/03743582/filing-history/MzM1ODU3Nzk4M2FkaXF6a2N4"
        }
      }
    ]
  },
  "event": {
    "timepoint": 1660556,
    "published_at": "2022-11-15T18:59:02.333257Z",
    "type": "changed"
  }
}
```