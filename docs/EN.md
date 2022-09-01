# Trawsgrifiwr Ar-lein

<!-- ABOUT THE PROJECT -->
## About The Project
<span id="about"></span>
This repository is the open-source code behind https://trawsgrifiwr.techiaith.cymru, 
the project wraps the [Uned Technolegau Iaith](http://techiaith.cymru)'s speech recognition service into a simple UI
for creating Welsh language subtitles.



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

* [docker](https://docker.com)
* [docker-compose](https://docs.docker.com/compose/install/)

Docker-compose is now shipped with DockerDesktop, however if the `docker compose` plugin is not available in your installation then follow the install instructions.

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/techiaith/trawsgrifiwr-arlein.git
   ```
2. Build docker image

   ```sh
   make
   ```   
3. Before we can visit the local site we need to initialize the database tables, we do this by first setting the server
running and then calling the init script. It is important that the database gets a chance to do its initial setup,
therefore you should check the logs for the line: `mysqld: ready for connections.` before calling the init script.

    ```sh
   make run
   make log
   make init
   ```
4. During the initialization phase, [SSL](https://openssl.org) certificates are generated in order to allow the browser 
to make audio recording when the "record" button is selected.  These certificates are unsigned and as such will throw
a 'this website is not secure error' which will need to be trusted in order to use the website. 

### Disclaimer

> This software was written for the express purpose of running within a debian server environment and as
> such no guarantees can be made that building will be successful on other operating systems. Further to this, SSL certs 
> are used which will generate warnings when visiting the app via browser. These warnings are unavoidable unless you 
> intend to run this server on a public domain or are familiar with local SSL enabled web application development.
> 
> ![Warning Screen Shot][warning-screenshot]
> 
> If you do not understand the warnings or the consequences of ignoring said warnings, it is recommended you instead 
> visit https://trawsgrifiwr.techiaith.cymru to try out the software.





<!-- USAGE EXAMPLES -->
## Usage

To view the app visit https://localhost:6543 and try it out!

You can either enter a link to an online video, that you have posted, upload your content or record your voice directly, and 
our service will generate transcripts.

[![Product Name Screen Shot][product-screenshot]](https://trawsgrifiwr.techiaith.cymru)

From these transcripts you can then adjust segment lengths and correct any mistakes or missing punctuation in the text. 
After you have edited the transcripts you can save your work as [SRT](https://srt-subtitles.com) 
or [TextGrid](https://textgrid.de/en/) subtitles

[![Product Name Screen Shot][product-screenshot-2]](https://trawsgrifiwr.techiaith.cymru)

Trawsgrifiwr is not yet capable of recognising the entirety of your speech correctly every time, 
however the following advice can significantly improve the results

* Ensure your microphone is working correctly and captures good quality audio.
* Ensure you speak clearly and try not to mash words together.
* Don't expect English words to be recognised or less formal words such as; rîli, tsips, neith.
* If the Trawsgrifiwr does not recognise your voice well after these steps you can further increase its chances of 
success by contributing your voice to our project via [Mozilla Common Voice](https://commonvoice.mozilla.org/cy)


<!-- ROADMAP -->
## Roadmap

- [ ] Todo: Road map

We are currently planning out new features, please check back soon or add your opinion via the 
[issue](https://github.com/techiaith/trawsgrifiwr-arlein/issues) tracker.

See the [open issues](https://github.com/techiaith/trawsgrifiwr-arlein/issues) for a full list of proposed features 
(and known issues).





<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. 
Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. 
You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request





<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.





<!-- CONTACT -->
## Contact

Techiaith - [@techiaith](https://twitter.com/techiaith) - techiaith@bangor.ac.uk - [techiaith.cymru](techiaith.cymru)

Project Link: [https://github.com/techiaith/trawsgrifiwr-arlein](https://github.com/techiaith/trawsgrifiwr-arlein)





<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

<img src="images/llyw_logo.png" alt="Logo" align="left">
<img src="images/BU_logo.png" alt="Logo" align="right">
<br><br><br><br><br>
We thank the Welsh Government for funding this work as part of the Technoleg Cymraeg 2021-22 project.




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screen_shot.png
[product-screenshot-2]: images/screen_shot_2.png
[warning-screenshot]: images/screen_shot_not_secure.png
[repo-logo]: images/repo_logo.png
[llyw-logo]: images/llyw_logo.png
[uni-logo]: images/BU_logo.png
