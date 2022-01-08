#!/bin/bash
#
# @file normalize.sh 
#
# @requires the perl 'rename' utility
#
################################################################################

# force to lowercase
find . -iregex ".+\.\(avi\)" | rename 'y/A-Z/a-z/'

# replace evil whitespace with dash
find . -iregex ".+\.\(avi\)"| rename 's/ /-/g'

# remove other non-useful, possbily illegal chars
find . -iregex ".+\.\(avi\)" -printf "%P\n" | rename 's/[^-_\.\+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]//g'
