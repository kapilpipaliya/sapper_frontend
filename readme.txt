
qswz> caub 12:18 <kapilp> `const product_h = await new Promise((resolve, reject) => {resolve(10)})`
6:03 PM <qswz> caub kapilp: Promise.race
6:04 PM <qswz> caub Promise.race([productQuery(), delay(5000).then(()=>{throw new Error('timeout')})])
6:05 PM <stennowork>  oh nifty
6:05 PM didn't think of using race like that

n> delay=util.promisify(setTimeout); let x=Promise.race([delay(80).then(()=>1), delay(100).then(()=>{throw new Error('timeout')})]); x
