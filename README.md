# Bonga Kawewe
A short project that seeks to display the text-to-speech engine for a specific language, Swahili.

The idea is to open this up to Swahili-speaking developers and find ways to improve the text-to-speech engine so that it speaks more like 
real human, with additional vocabulary and possibly a proper accent. (This is actually a separate project with the help of open-source tools, such as Espeak)

It works simply by typing any Swahili text/sentence that someone is familiar with into the text-box, then download the file for the words to be converted 
to actual Swahili speech. It will be downloaded as an mp3 file on whichever browser your device will be connected to. For listening, one has to locate the file
in the downloads folder and then use the default media player on the device to listen.

### Prerequisites
make sure you have node installed in your local machine

### Insatallation
clone the repository
```
git clone https://github.com/ipaullly/bonga-kawewe-v1.git
``` 
cd into the pet-store-ui directory and run the command to install all requirements from package.json
```
cd bonga-kawewe-v1 && npm install
```
run the backend server on a local port by running
```
node server.js
```
display the React app on local browser by running
```
npm run start
```
