const xml2js = require('xml2js');
const fs = require('fs').promises;
const superagent = require('superagent');
const { exec } = require('child_process');
const markdowntable = require('markdown-table');

const feed = process.env.FEED;
const message = process.env.MESSAGE;
const username = process.env.USERNAME;
const email = process.env.EMAIL;
const locator = process.env.LOCATOR;
const token = process.env.TOKEN;
const repo = process.env.GITHUB_REPOSITORY;

let commit = () => {
    exec(`git config --global user.email "${email}"`);
    exec(`git config --global user.name "${username}"`);
    exec(`git remote set-url origin https://${token}@github.com/${repo}.git`);
    exec('git add README.md');
    exec(`git commit -m "${message}"`);
    exec('git push');
};

let formatDate = string => {
    let date = new Date(string);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    return `${month}-${day}-${year}`;
};

let getFeed = async () => {
    return await superagent.get(feed)
        .catch(error => console.log(error));
};

let xmlConvert = async xml => {
    let parser = new xml2js.Parser({ explicitArray: false });
    return await parser.parseStringPromise(xml)
        .catch(error => console.log(error));
};

let createTable = posts => {
    let data = [['Name', 'Date']];
    posts.forEach(p => {
        data.push([
            `[${p.title}](${p.link})`,
            formatDate(p.pubDate)
        ])
    })
    return markdowntable(data);
};

let editReadme = async (table, data) => {
    let markdown = data.replace(locator, table);
    await fs.writeFile('test.md', markdown, 'utf8')
        .catch(error => console.log(error));
};

let process = async data => {
    let res = await getFeed();
    let xml = Buffer.from(res.body).toString();
    let json = await xmlConvert(xml);
    let posts = json.rss.channel.item;
    let table = createTable(posts);
    await editReadme(table, data);
    commit();
};

fs.readFile('README.md', 'utf8')
    .then(data => process(data))
    .catch(error => console.log(error));