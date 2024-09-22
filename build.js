import got from 'got';
import fs from 'fs';

got.get('https://gist.githubusercontent.com/adamawolf/3048717/raw/bd838e3254565a8da730873667e5d39902fffe6e/Apple_mobile_device_types.txt').text().then((res) => {
    res = res.replaceAll("\n\n", "\n");
    const devices = res.split("\n");
    const array = [];
    devices.forEach(d => {
        const info = d.split(" : ");
        array.push({ id: info[0], device: info[1] })
    });
    let filecontent = fs.readFileSync("./packages/lib/index.js", { encoding: "utf8" });
    filecontent = filecontent.replace("export const devices = [];", `export const devices = ${JSON.stringify(array)};`)
    fs.writeFileSync("./packages/lib/index.js", filecontent);
})