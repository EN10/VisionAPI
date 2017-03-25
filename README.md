Vision API
-

Based On:   
https://github.com/EN10/CanvasToPNG 

Open Image FileReader:  
https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL

AJAX    reader.readAsDataURL:   
https://www.w3schools.com/xml/tryit.asp?filename=tryajax_first

Google Cloud Vision API:    
https://cloud.google.com/vision/docs/reference/libraries#client-libraries-install-nodejs

Install
-
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    sudo apt-get install -y nodejs
    
    sudo apt install npm
    npm install --save @google-cloud/vision

Error: Cannot find module 
'/home/user/node_modules/grpc/src/node/extension_binary/grpc_node.node'

    npm install grpc