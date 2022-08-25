# multidocsify_test
Test repo for docsify

`docsify serve` from root.

This version attempts to construct MAVLINk library and versions dynamically

This might be broken now,  broken now but could be fixed by https://github.com/docsifyjs/docsify/issues/1684

Easier case because we only need /en and translation path, not versions as well. SO we could use this for mavlink, maybe.


https://docsify.js.org/#/configuration


Ineresting ideas
https://evilmartians.com/chronicles/easy-multi-language-multi-version-documentation-with-docsify-git-and-github-actions


Some useful previous testing I did

https://github.com/hamishwillee/multidocsify_test/blob/qgc_standard_setup/docs/index.html


Can fix up the internal links to mavlink items and pehaps make whole table to markdown.
But link from externals will not be same format - unless perhaps we can process the incoming and relink.

We might be able to provide a redirect for all the existing ones maybe. A bit ugly though.

Bugs for pages too: https://github.com/docsifyjs/docsify/issues/1870
