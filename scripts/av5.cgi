#!/bin/bash
echo "Content-type: text/html"
echo ""

# import correct dir
. path.sh
cd $IR_CODE_DIR

commandir_send -e1 yamaha_av5

