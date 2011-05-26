#!/bin/bash
echo "Content-type: text/html"
echo ""
cd /home/martin/commandir/ir_codes

commandir_send -e1 yamaha_fake_on
#sleep 0.2
#commandir_send -e1 yamaha_hdmi2