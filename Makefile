#
# Vars
#

BIN = ./node_modules/.bin

#
# Tasks
#

node_modules: package.json
	@npm install

test: node_modules
	@${BIN}/tape test/*

validate: node_modules
	@standard

init:
	@git init
	@git add .
	@git commit -am "FIRST"
	@hub create micro-js/compute-placement -d "Compute the top/left offset of an element to position it near another element"
	@travis enable
	@git push -u origin master

.PHONY: test validate init
