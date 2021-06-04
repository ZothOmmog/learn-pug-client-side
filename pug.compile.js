const pug = require('pug');
var fs = require('fs');

compileComponent('loader');
compileComponent('chat');
compileComponent('chatsList');

function compileComponent(name, options = {}) {
    const { path = 'components', optionsPug = {} } = options;

    let component;
    let isUiForled = true;

    try {
        console.log(`${path}/${name}/ui/${name}.pug`);
        component = pug.compileFileClient(`${path}/${name}/ui/${name}.pug`, { name, ...optionsPug });
    } catch(e) {
        const isNotFile = e.message.includes('ENOENT: no such file or directory, open');
        if (isNotFile) {
            isUiForled = false;
            component = pug.compileFileClient(`${path}/${name}/${name}.pug`, { name, ...optionsPug });
        }
        else {
            throw e;
        }
    }

    const componentFnRegExp = new RegExp(`function ${name}(.*?)`);
    const componentWithExport = component.replace(componentFnRegExp, 'export $&');

    if (isUiForled) {
        fs.writeFileSync(`${path}/${name}/ui/index.js`, componentWithExport);
        return;
    }
    fs.writeFileSync(`${path}/${name}/index.js`, componentWithExport);
}
