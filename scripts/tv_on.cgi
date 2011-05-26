#!/bin/bash
echo "Content-type: text/html"
echo ""
cd /home/martin/commandir/ir_codes

commandir_send -e2 tv_p+
sleep 9
commandir_send -e2 tv_ext
sleep 2
commandir_send -e2 tv_ext
