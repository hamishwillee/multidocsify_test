FROM pandoc/latex:latest

RUN apk --update --no-cache add \
    ttf-freefont \
    ttf-dejavu \
    ttf-droid \
    ttf-liberation \
    texlive \
    fontconfig

RUN tlmgr install tcolorbox \
    environ
    
