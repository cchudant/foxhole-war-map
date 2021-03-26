# Fork of Foxhole War Map

This fork changes the endpoint used to gather data, so that it follows the [public schema foxhole provides](https://github.com/clapfoot/warapi).

Please do **not** put the public foxhole api url as FOXHOLE_URL env var!
You should setup a caching reverse-proxy instead, so that the foxhole public api does not get overloaded with requests.


Original readme follows

---

Foxhole War Map
===============

http://foxholeglobal.com/map

![Foxhole War Map](https://i.imgur.com/g3QaBO2.png)

### Overview
The Foxhole War Map, also known as the Foxhole Interactive Map, is a community project developed for the game [Foxhole](https://store.steampowered.com/app/505460/Foxhole/). The War Map displays information about the state of the war. This project is developed using the [LeafletJS library](https://leafletjs.com/).

Foxhole is a cooperative sandbox massively-multiplayer action-strategy video game being developed and published by Canadian video game company Clapfoot. The data is taken from the official Foxhole WarAPI, which can be found at https://github.com/clapfoot/warapi.

### Instructions
Download the repository and run `npm install` in the root directory to install node dependencies, and then `npm start` to run the app.

### Special Thanks
The Foxhole War Map Project would not be a reality without the help of various people:
- Kastow
- BladeRikWir
- TauZeph
- Mulon

As well as the Foxhole game developers for their invaluable help and assistance:
- KrazyFlyinChicken
- Casey
- Nooba

### Contact
Discord server - https://discord.gg/DJuAkTk
