---
description: Accounts published by Companies House in the bulk products are in the iXBRL format, using the HTML file extension. These contain both human- and machine-readable financial accounts, which can be viewed in a web browser or parsed to extract the list of facts.
---

# iXBRL format

The inline XML business reporting language format is used for most financial accounts published by Companies House.

iXBRL adds special XML tags to HTML which contain the reported information in a machine-readable way.

For example, a piece of information (fact) in the file might look like this:
```xml
<td
        class="Continuous_Section_Values_Text"
        style="min-width:90px;padding-left:19px;padding-right:4px;padding-bottom:0px;"
>
    <p>
        <ix:nonfraction
                name="core:Debtors"
                contextref="FY1.END.segment.bus-GroupCompanyDataDimension.bus-Consolidated"
                unitref="GBP"
                xmlns:core="http://xbrl.frc.org.uk/fr/2019-01-01/core"
                decimals="0"
                format="ixt:numcommadot"
        >3,637,011</ix:nonfraction>
    </p>
</td>
```
It has enough information to display the data as HTML, and also has the special `ix:nonfraction` tag which has machine-readable attributes.

Although these values are machine-readable, it is a very complex format of taxonomies and references and so writing a parser is non-trivial.

[Arelle](https://arelle.org) is an open-source XBRL parser that can convert iXBRL files to CSV or JSON, making the data easier to manipulate in a programming language.

