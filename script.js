function procrastiner() {
    alert("Bravo ! En cliquant ici, vous avez repoussé l'action à demain. Mission accomplie.");
}

function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    // La bannière s'affiche après 3 secondes (flemme d'apparaître de suite)
    setTimeout(() => {
        document.getElementById('cookie-banner').style.display = 'block';
    }, 3000);
});
