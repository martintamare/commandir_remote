#!/bin/bash
echo "Content-type: text/html"
echo ""

# import correct dir
. path.sh
cd $IR_CODE_DIR

# Trick to always turn on tv
commandir_send -e2 tv_p+
sleep 9
commandir_send -e2 tv_ext
sleep 2
commandir_send -e2 tv_ext
