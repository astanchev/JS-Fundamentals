function browserHistory(browserObj, actions) {

    for (const action of actions) {

        let website = action.split(' ').slice(1).join(' ');

        if (action.includes('Clear History and Cache')) {
            browserObj['Open Tabs'] = [];
            browserObj['Recently Closed'] = [];
            browserObj['Browser Logs'] = [];

        } else if (action.includes('Open')) {
            browserObj['Open Tabs'].push(website);
            browserObj['Browser Logs'].push(action);

        } else if (action.includes('Close') && browserObj['Open Tabs'].includes(website)) {
            let index = browserObj['Open Tabs'].indexOf(website);
            browserObj['Open Tabs'].splice(index, 1);
            browserObj['Recently Closed'].push(website);
            browserObj['Browser Logs'].push(action);
        }
    }

    console.log(browserObj['Browser Name']);
    console.log(`Open Tabs: ${browserObj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browserObj['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browserObj['Browser Logs'].join(', ')}`);
}

browserHistory({
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },

    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);

    browserHistory(
        {"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
        "Recently Closed":["Yahoo","Gmail"],
        "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},

        ["Close Facebook", "Open StackOverFlow", "Open Google"]);