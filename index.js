const fs = require('fs');

const members = JSON.parse(fs.readFileSync('members.json', 'utf-8'));

const memberList = members.map(member => {
  return `<td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
<a href="${member.html_url}">
<img src="${member.avatar_url}" width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt="${member.login}"/>
<br />
<sub style="font-size:14px"><b>${member.login}</b></sub>
</a>
</td>`;
}).join('\n');

const newReadmeContent = fs.readFileSync('README.md', 'utf-8')
  .replace(/<!-- members -->[\s\S]*<!-- endmembers -->/, `<!-- members -->\n<table><tr>\n${memberList}\n</tr></table>\n<!-- endmembers -->`);

fs.writeFileSync('README.md', newReadmeContent);
