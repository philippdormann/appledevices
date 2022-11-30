import got from 'got';
import fs from 'fs';

got.get('https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt').text().then((res) => {
    res = res.replaceAll("\n\n", "\n");
    const devices = res.split("\n");
    const array = [];
    devices.forEach(d => {
        const info = d.split(" : ");
        array.push({ id: info[0], device: info[1] })
    });
    let filecontent = fs.readFileSync("./index.js", { encoding: "utf8" });
    filecontent = filecontent.replace("export const devices = [];", `export const devices = ${JSON.stringify(array)};`)
    fs.writeFileSync("./index.js", filecontent);
})