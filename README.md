## BestOffer Demo

I JUST CHANGED THIS BEFORE A RESTORE
BestOffer.com is working to bring to market a brokerage solution to unite buyers and sellers, eliminating 
the “middle man”, reducing costs, increasing transparency etc.
The business process flow is as follows…..
A registered seller logs in via the browser or mobile app, defines an item which is then persisted into 
Ensemble/IDP via a REST service call. The REST code then passes the item for sale request to a Business 
Service, then of course to a Business Process, which in turn identifies potential registered buyers and 
notifies them via email that they have an item that they can bid on, and places an item on their worklist. 
From there the buyer can bid or reject the item for sale, and if bidding, places a Workflow item on the seller’s 
worklist.  In turn the seller can accept the buyer’s bid or counterbid (placing an item back on the buyer’s worklist 
etc.). Email notifications are sent at each step in the workflow

A representative user interface is provided for demo purposes.  This is supported by a RESTful API.
This can be accessed at {server}/bestofferui.  To Demo: 
1. On the Seller tab select 'Michael
2. use 'Add Item' to create an item to bid on
3. Go to the Seller tab and select 'Scott'.  The other seller is not fully setup intentionally to show and error
in the message trace
4. The seller can put in a bid or respond to a counter bid by selecting the Bidding Task
5. Buyer can respond to bids from the Bidding Tasks on the Seller tab

The prototype is functional, however the real impact was the relative complexity of the BPL and it’s integration with 
our Workflow framework, as well as the speed at which we (myself and the prospect) put this together over a series of 
one and two hour Webexes.

## Prerequisites
This needs to have git and docker installed.

## =====================
## Installation 

Clone/git pull the repo into any local directory

```
$ git clone https://github.com/your-repository.git
```

## EMAIL
*************
Before doing docker-compose update the parameters for email access in BestOffer.Util.Utils.cls
*************

## Configure Production
Configure the Email adapter setting in the production and the email credentials under interoperability
to allow the email notifications to be processed.

Before starting the container you may need to update the config.json file that is under the project
folder bestoffer/assets.  This JSON structure supplies the IP address and Port to use for the REST
calls made by the bestofferui web application.  THIS IS ONLY NECESSARY IF YOU CHANGE THE NETWORKING
CONFIGURATION IN THE docker-compose.yml FILE OR IF USING DOCKER FOR MAC.  see the docker networking
section below.

## DOCKER NETWORK
The docker-compose.yml defines the network to be used by the container.  Care needs to be taken that 
this does not conflict with anything in your network environment (including any VPNs you may routinely
join).  The current setting for Subnet is 192.168.250.0/16 and the IP address of the container,
ipv4_address, is 192.169.250.2, adjust as needed settings.

If the IP address is changes also change the configuration file for the Web-based User interface. This
can be found at bestofferui/assets/config.json within the project folder.

### EXCEPTION FOR MAC
Docker for MAC does not provide any ability to bridge to the Docker network.  Therefore the ONLY way to
access the container Web interfaces (SMP, REST, demo application) if via mapped ports and the localhost
server reference.  A mapped port of 4949 has been created for this purpose.  For example use
http://localhost:4949/bestofferui/ to access the demo application

## run the container
Open the terminal in this directory and run or open VSCode in this directory,
right click on the docker-compose.yml file and select 'Compose Up':
$ docker-compose up -d --build

## ====================
## How to Work With it
## Visual Studio Code Setup
If the port number mapped in the docker-compose.yml is changed you will need to change the setting.json file.
Find the property 'objectscript.conn.port' and update this.  You will find this under the .vscode folder. If
you don't see this you can go to File->Prefrences->Settings. Click on the Workspace tab then search for
InterSystems. Configure all the setting here to connect VSCode to the instance running in the container.

## How to start coding
This repository is ready to code in VSCode with ObjectScript plugin.
Install [VSCode](https://code.visualstudio.com/) and [ObjectScript](https://marketplace.visualstudio.com/items?itemName=daimor.vscode-objectscript) plugin and open the folder in VSCode.

The script in Installer.cls will import everything you place under /src into IRIS.

## What's insde the repo

# Dockerfile

The simplest dockerfile to start IRIS and load ObjectScript from /src/cls folder
Use the related docker-compose.yml to easily setup additional parametes like port number and where you map keys and host folders.

## WebTerminal
WebTerminal version 4.9.0 is part of this repository.  Check for the latest version at
https://openexchange.intersystems.com/package/WebTerminal?tab=details before building 
the image.

To access the WebTerminal type "localhost:62773/terminal/  in a browser window (last slash '/' is required).  

If you changed ports in the docker-compose.yml file reference your port in the URL

# .vscode/settings.json

Settings file to let you immediatly code in VSCode with [VSCode ObjectScript plugin](https://marketplace.visualstudio.com/items?itemName=daimor.vscode-objectscript))

# .vscode/launch.json
Config file if you want to debug with VSCode ObjectScript
