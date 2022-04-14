(() => {
    document.addEventListener('fullscreenchange', () => {
        let player = document.querySelector('.btm-media-client-element');
        if ((window.screen.width/window.screen.height) > 2 && !!document.fullscreenElement) {
            player.style.objectFit = 'cover';
        } else {
            player.style.removeProperty('object-fit');
        }
    });
})();