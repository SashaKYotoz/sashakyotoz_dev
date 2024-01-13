function openModal() {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function openTelegramModal() {
  document.getElementById('modalTelegram').style.display = 'block';
  document.getElementById('overlayTelegram').style.display = 'block';
}

function openTwitterModal() {
  document.getElementById('modalTwitter').style.display = 'block';
  document.getElementById('overlayTwitter').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('modalTwitter').style.display = 'none';
  document.getElementById('modalTelegram').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('overlayTelegram').style.display = 'none';
  document.getElementById('overlayTwitter').style.display = 'none';
}

document.getElementById('openDiscordModal').addEventListener('click', openModal);
document.getElementById('openTelegramModal').addEventListener('click', openTelegramModal);
document.getElementById('openTwitterModal').addEventListener('click', openTwitterModal);