npm run deploy

source contract/neardev/dev-account.env 
ACCOUNT_NAME=sotcsa2.testnet

near call $CONTRACT_NAME set_message '{ "message": "Working..." }' --accountId $ACCOUNT_NAME
near view $CONTRACT_NAME get_message '{ "accountId": "'$ACCOUNT_NAME'" }' 
 