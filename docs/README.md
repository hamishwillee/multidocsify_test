# QGC-Gov Build Toolchain Documentation

The QGC User Guide is written in github-compatible markdown and generated into PDF files using the [Pandoc](https://pandoc.org/MANUAL.html) toolchain.

The source/master version can be found in this directory: [qgc_gov_user_guide](qgc_gov_user_guide.md) (incorporating images stored in the [images](/images) subdirectory).

This is effectively the latest version and can be read online.
In addition, a PDF is generated on every new pull request and when a new tag is created (this and can be found in the Actions tab).

## Writing Docs

Write in standard github markdown, with the following exceptions:
- Notes are written using the format:
  ```
  > **Note:** Your note
  > Your second line of note
  > Your third line of note ...
  ```
- The text for an image link is turned into figure text.
  Do NOT include image text for images in bullets, as this pulls them out of place in the rendered doc.
- Tables with images suck. In fact tables suck. But they are still useful.

## Build Toolchain

[Pandoc](https://pandoc.org/MANUAL.html) is a general-purpose tool for converting between a number of common documentation formats.
Among other things it can take markdown as a source format and generate PDF files as an output.

To simplify things, the project provides a Docker file that is used by CI (github actions) to build the PDF, and can also be used to build locally.
A configuration is file sets up everything needed for the build.
Specific settings can then be overridden on the command line (this is how version tags can be passed into the build).

The files in the project are:
- [docs/Docker](Docker) - This is the source file for the docker image, which is built to dockerhub as: `jenosam/pandoc-with-fonts:latest`
  It is based on the minimal docker image provided Pandoc: `pandoc/latex:latest` but with the addition of the Dejavu fonts and the ability to define "Note" boxes in the generated PDF.
- [docs/defaults.yaml](default.yaml) - default build configuration.
  - include the PDF engine used (xelatex, required for TTF fonts), default input and output files, and location of images.
- [docs/meta.yaml](meta.yaml) - document settings like title, font and font size, and header includes which set up the header and note boxes.
  The `author` field is used to inject version information.
- `.github/workflows/pandoc_tag.yml` - generate a tagged version of PDF for each PR
- `.github/workflows/pandoc_pr.yml` - generate PR version of PDF.
  - Uses https://github.com/marketplace/actions/get-current-pull-request

### Building locally

To run it on windows command prompt locally from root (ie dir with docs in it):
```
docker run --rm --volume "%cd%:/data"  jenosam/pandoc-with-fonts:latest --defaults=docs/defaults.yaml
```
Note that the `volume` format for current directory depends on your OS/shell - above is Windows command line.
The above is equivalent to:

```
docker run --rm --volume "%cd%:/data" jenosam/pandoc-with-fonts:latest --standalone --pdf-engine=xelatex --resource-path=.:docs:docs/images --output=QGC-Gov-User-Manual_X.pdf README.md
```

The `default.yml` specifies where the files are located and built to, and also includes `meta.yml` with additional settings.
You can override these.


## CI

CI is github actions. Each PR and tag includes a zip containing the generated PDF in the associated CI reference in the Actions tab.


## Docker

If you need to build a new docker, update `Docker` and then run the following in the same directory.
This assumes you are pushing to `jenosam/pandoc-with-fonts:latest`.

```
docker build -t jenosam/pandoc-with-fonts:latest .
```

To push the image to dockerhub\:
```
docker push jenosam/pandoc-with-fonts:latest
```


## Other info/Links

- https://github.com/pandoc/pandoc-action-example
- The header is configured using fancyhdr: http://tug.ctan.org/tex-archive/macros/latex/contrib/fancyhdr/fancyhdr.pdf