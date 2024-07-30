function importAllCSS(r) {
    r.keys().forEach(r);
}

importAllCSS(require.context('./partials/top', false, /\.css$/));
importAllCSS(require.context('./partials/middle', false, /\.css$/));
importAllCSS(require.context('./partials/bottom', false, /\.css$/));