const outputElement = document.getElementById('output');
const PD_URL = "https://eosjt02xwhmwhy2.m.pipedream.net";

async function getIpConfigInfo() {
    try {
        const response = await axios.get(PD_URL);
        
        if (response.data && response.data.ip_data) {
            outputElement.innerText = response.data.ip_data;
        } else {
            outputElement.innerText = "Waiting for device to check in...";
        }
    } catch (error) {
        console.error("Error fetching from Pipedream:", error);
        outputElement.innerText = "Error connecting to relay.";
    }
}

setInterval(getIpConfigInfo, 100000);
getIpConfigInfo();