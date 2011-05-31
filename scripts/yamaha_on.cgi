#!/bin/bash
echo "Content-type: text/html"
echo ""

# import correct dir
. path.sh
cd $IR_CODE_DIR

commandir_send -e1 yamaha_fake_on
#sleep 0.2
#commandir_send -e1 yamaha_hdmi2