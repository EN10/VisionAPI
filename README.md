Vision API
-

Based On:   
https://github.com/EN10/CanvasToPNG 

Front End UI:  
https://github.com/EN10/App-Engine-Hosting/blob/master/vision-123/www/index.html

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
    gcloud auth application-default login

    npm install express

Error: Cannot find module 
'/home/user/node_modules/grpc/src/node/extension_binary/grpc_node.node'

    npm install grpc
    
Run
-
Start VM instance and copy External IP.  

    screen sudo node ~/VisionAPI/detect.js