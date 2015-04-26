#!/bin/bash

pdflatex MADDoc.tex
pdflatex MADDoc.tex
bibtex MADDoc.aux
pdflatex MADDoc.tex
