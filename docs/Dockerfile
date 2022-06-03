FROM pandoc/latex:latest

RUN apk --update --no-cache add \
    ttf-dejavu \
    ttf-droid \
    texlive \
    fontconfig

RUN tlmgr install tcolorbox \
    environ \
    enumitem

