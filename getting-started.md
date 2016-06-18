# Getting Started

#### How to start

```sh
# Install OC
[sudo] npm i -g oc

# Create a folder of components
mkdir components && cd components

# Create your first component
oc init my-component [jade]

# Run the OC dev registry
oc dev . 3030

# Now you can make changes and observe the result
# http://localhost:3030
# http://localhost:3030/my-component

```

#### Can I use ES6?

Yes, but you need to babelify it:

```sh
# Ensure you got the Babel CLI installed
[sudo] npm i -g babel-cli

# In your components' folder:
[sudo] npm i babel-preset-es2015

# You create a folder with your components' ES6 source
mkdir your-component/src
mv your-component/server.js your-component/src/server.js

# Now you run babel to babelify your ES6 file with a watcher
babel -w --presets "es2015" -d my-component/ my-component/src/

# Now you run your oc dev watcher in a separate window
oc dev . 3030
```