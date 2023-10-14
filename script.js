const urls = [
  { name: 'Library', url: 'https://library.sspcschools.com' },
  { name: 'Direct', url: 'https://direct.sspcschools.com' },
  { name: 'SSPC Schools', url: 'https://sspcschools.com' },
  { name: 'Johnson Elementary', url: 'https://johnsones.sspcschools.com' },
  { name: 'Monroe Middle', url: 'https://monroems.sspcschools.com' }
];

async function checkStatus(url) {
  try {
    const response = await fetch(url.url);
    console.log(`[${url.name}] Response status:`, response.status);
    return response.ok ? 'Online' : 'Offline';
  } catch (error) {
    console.error(`[${url.name}] Error:`, error);
    return 'Offline';
  }
}

async function updateStatus() {
  for (const url of urls) {
    const status = await checkStatus(url);
    document.getElementById('status').innerHTML += `<div id="${url.name}Status">
                                                      <h2>${url.name} Website Status:</h2>
                                                      <p>${status}</p>
                                                    </div>`;
  }
}

updateStatus();
