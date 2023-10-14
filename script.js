const libraryUrl = 'https://library.sspcschools.com';
const directUrl = 'https://direct.sspcschools.com';

async function checkStatus(url) {
  try {
    const response = await fetch(url);
    return response.ok ? 'Online' : 'Offline';
  } catch (error) {
    return 'Offline';
  }
}

async function updateStatus() {
  const libraryStatus = await checkStatus(libraryUrl);
  const directStatus = await checkStatus(directUrl);

  document.getElementById('libraryStatus').innerHTML = `<h2>Library Website Status:</h2><p>${libraryStatus}</p>`;
  document.getElementById('directStatus').innerHTML = `<h2>Direct Website Status:</h2><p>${directStatus}</p>`;
}

updateStatus();
