const { clientApplication } = require('./client')

let userClient = new clientApplication()
userClient.submitTxn(
    "producer",
    "energychannel",
    "energy-contract",
    "EnergyTrade",
    "queryTxn",
    "",
    "getEnergy",
    "E-01",
).then(result => {
            // Decode the Uint8Array to a string
            const decodedString = new TextDecoder().decode(result);
    
            // Parse the string as JSON
            const jsonObject = JSON.parse(decodedString);
            
            console.log("Energy Details: ")
            // Log the JSON object
            console.log(jsonObject);
});