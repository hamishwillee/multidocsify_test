# multidocsify_test
Test repo for docsify

- https://github.com/pandoc/pandoc-action-example
- https://github.com/marketplace/actions/get-current-pull-request
- Don't add figure comments when images are in lists/bullets - they get pulled out of context

To run it on windoes command prompt locally
docker run --rm --volume "%cd%:/data"  pandoc-with-fonts:latest --standalone --pdf-engine=xelatex --resource-path=.:images --output=QGC-Gov-User-Manual_X.pdf README.md
