
qswz> caub 12:18 <kapilp> `const product_h = await new Promise((resolve, reject) => {resolve(10)})`
6:03 PM <qswz> caub kapilp: Promise.race
6:04 PM <qswz> caub Promise.race([productQuery(), delay(5000).then(()=>{throw new Error('timeout')})])
6:05 PM <stennowork>  oh nifty
6:05 PM didn't think of using race like that

n> delay=util.promisify(setTimeout); let x=Promise.race([delay(80).then(()=>1), delay(100).then(()=>{throw new Error('timeout')})]); x

rollup-plugin-scss is added to compile scss files in static/scss folder.

https://pugjs.org/language/attributes.html
https://github.com/kaisermann/svelte-preprocess#pug
https://github.com/kaisermann/svelte-preprocess#preprocessors-support



https://alternativeto.net/software/todoist/?license=opensource
https://github.com/kamhix/todoist-linux/tree/master/scripts
https://alternativeto.net/software/openproject/
https://www.openproject.org/
https://github.com/opf/openproject
https://www.openproject.org/development/setting-up-development-environment/
https://alternativeto.net/software/todolist/
http://abstractspoon.com
https://github.com/abstractspoon/ToDoList_7.0
https://fluxday.io/
https://www.taskcoach.org/devinfo.html
https://sourceforge.net/p/taskcoach/repo/ci/default/tree/taskcoach/






https://github.com/kaisermann/svelte-i18n

php based project management
http://qdpm.net/

Top 7 Web Open Source Project Management Tools
https://project-management.com/top-7-web-open-source-project-management-tools/

wikipedia project management list
https://en.wikipedia.org/wiki/Comparison_of_project_management_software

https://www.projeqtor.org/en/product-en/downloads
https://sourceforge.net/projects/projectorria/
