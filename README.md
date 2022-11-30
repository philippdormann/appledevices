# @philippdormann/appledevices
npm package for parsing apple device code names to readable device names

## Data Source
https://gist.github.com/adamawolf/3048717

## Library Usage
```
pnpm i @philippdormann/appledevices
```
```
import { getDeviceNameByIdentifier } from "@philippdormann/appledevices"

console.log(getDeviceNameByIdentifier("iPhone15,3"));
```
## Build (pnpm monorepo)
```
pnpm build
```
