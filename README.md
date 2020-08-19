# Swahili-Language-TTS-using-gTTS-libraries-Node.js-Express

A short project that seeks to display the text-to-speech engine for a specific language, Swahili.

The idea is to open this up to Swahili-speaking developers and find ways to improve the text-to-speech engine so that it speaks more like 
real human, with additional vocabulary and possibly a proper accent. (This is actually a separate project with the help of open-source tools, such as Espeak)

It works simply by typing any Swahili text/sentence that someone is familiar with into the text-box, then download the file for the words to be converted 
to actual Swahili speech. It will be downloaded as an mp3 file on whichever browser your device will be connected to. For listening, one has to locate the file
in the downloads folder and then use the default media player on the device to listen.

It is a landing page that we plan to use as visual or source of information to any interested person.


It is very simple to test the code and see if it works.

First, install Node Package Manager (npm) on to your machine. 

Then, we need to install the dependancies for this application to work. 

npm install express, for enabling the server

npm install body-parser, to assist with creating a middleware instance

npm install gtts.js, to enable the text-to-speech sysnthesis to run on our application, for Swahili language, it is encoded as: lang = 'sw'

npm install ejs, for the file to be visible on the web, it is necessary to have a 'views' folder in the index.ejs file to be displayed and a 'public' folder to display images

To display the web page: create a 'views' folder and an index.ejs file in that folder

The index.ejs file is quite similar to a html file. So, you can create a form with method="POST" and action="/" In the form have a textarea with input type="submit"
value="Download as mp3"

To show images for any case: create a 'public' folder and add the images to be displayed on this folder. In my case I used the images for logo display and additional styling

Now, this should be working and someone is able to have this app run on your personal PC. I hope this helps
