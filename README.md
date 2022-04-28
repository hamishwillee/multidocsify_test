# multidocsify_test
Test repo for docsify

- https://github.com/pandoc/pandoc-action-example
- https://github.com/marketplace/actions/get-current-pull-request
- Don't add figure comments when images are in lists/bullets - they get pulled out of context
- fancyhdr: http://tug.ctan.org/tex-archive/macros/latex/contrib/fancyhdr/fancyhdr.pdf

To build it from docs dir in Windows
```
docker build -t jenosam/pandoc-with-fonts:latest .
```
To push it:
```
docker push jenosam/pandoc-with-fonts:latest
```
To run it on windows command prompt locally from root (ie dir with docs in it)
```
docker run --rm --volume "%cd%:/data" jenosam/pandoc-with-fonts:latest --defaults=docs/defaults.yaml
```
