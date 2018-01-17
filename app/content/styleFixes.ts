export const getStyleFix = (url: string, height: number) => {
    const styles = styleFixes(height);
    return Object.keys(styles).reduce((res, k) => {
        if (res) return res;
        if (url.includes(k)) return styles[k];
        return '';
    }, '') + `
        body {
            margin-top: 0;
            padding-top: 0;
        }
    `;
};

// Some pages requires unique fixes,
// usually because they use a sticky or static menu bar
const styleFixes = height => ({
    'stackexchange': `
    .top-bar {
        top: ${height}px !important;
    }
    `,
    'stackoverflow': `
    .top-bar {
        top: ${height}px !important;
    }
    `,
    'w3schools': `
    .topnav {
        top: ${height}px !important;        
    }
    `
});