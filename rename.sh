#!/bin/bash
#
# @requires the perl 'rename' utility
#
################################################################################

find . -iregex ".+\.\(avi\)" | rename 'y/A-Z/a-z/'

find . -iregex ".+\.\(avi\)"| rename 's/ /-/g'

find . -iregex ".+\.\(avi\)" -printf "%P\n" | rename 's/[^-_\.\+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]//g'
