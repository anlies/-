var url = `http://192.168.0.149:8083`
function getHeight() {
    let winWidth = api.winWidth;
    let winHeight = api.winHeight;
    $api.css($api.byId('container'), 'Height:' + winHeight + 'px;width:' + winWidth + 'px;');
}

function back() {
    api.closeWin();
}
