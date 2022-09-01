# Trawsgrifiwr Ar-lein

<!-- ABOUT THE PROJECT -->
## Ynglŷn â'r Project
<span id="about"></span>
Y cod ffynhonnell agored sydd y tu ôl i https://trawsgrifiwr.techiaith.cymru yw cynnwys y storfa (repo) hon. Mae'r project yn lapio gwasanaeth adnabod lleferydd yr [Uned Technolegau Iaith](http://techiaith.cymru) mewn rhyngwyneb syml ar gyfer creu isdeitlau Cymraeg.


<!-- GETTING STARTED -->
## Cychwyn Arni

I gael copi lleol ar waith dilynwch y camau hyn.

### Rhagofynion

* [docker](https://docker.com)
* [docker-compose](https://docs.docker.com/compose/install/)

Mae docker-compose bellach yn cael ei osod gyda DockerDesktop. Fodd bynnag os nad yw'r ategyn `docker compose` ar gael yn eich gosodiad yna dilynwch y cyfarwyddiadau gosod gan Docker.

### Gosod

1. Cloniwch y storfa

   ```sh
   git clone https://github.com/techiaith/trawsgrifiwr-arlein.git
   ```
2. Adeiladwch delwedd docker

   ```sh
   make
   ```   
3. Cyn y gallwn ymweld â'r wefan leol mae angen i ni gychwyn cronfa ddata. Rydym yn gwneud hyn trwy redeg y gweinydd cyn galw'r sgript init. 

    ```sh
   make run
   make log
   ```
Mae'n bwysig bod y gronfa ddata yn cael cyfle i weithredu ei broses gosod cychwynnol. Felly dylech wirio'r logiau am linell sy'n cynnwys: `mysqld: ready for connections.` cyn galw’r sgript init.

   ```
   make init
   ```

4. Yn ystod y cyfnod ymgychwyn, mae tystysgrifau [SSL](https://openssl.org) yn cael eu cynhyrchu er mwyn caniatáu i'r porwr recordio sain pan fo'r defnyddiwr yn dewis y botwm "Record".   Nid yw'r tystysgrifau hyn wedi'u llofnodi ac felly bydd gwall 'Nid yw'r wefan hon yn ddiogel' yn ymddangos ar eich porwr. Bydd angen ymddiried yn y wefan er mwyn parhau. 

### Ymwadiad

> Ysgrifennwyd y feddalwedd hon yn benodol at redeg o fewn amgylchedd gweinydd debian. Ni ellir, felly, gwarantu y bydd y feddalwedd yn adeiladu'n llwyddiannus ar systemau gweithredu eraill. Yn ogystal â hyn, defnyddir tystysgrifau SSL. Bydd y rhain yn cynhyrchu rhybuddion wrth ymweld â'r ap > trwy borwr. Mae'r rhybuddion hyn yn anochel oni bai eich bod yn bwriadu rhedeg y gweinydd hwn ar barth cyhoeddus neu eich bod yn gyfarwydd â datblygu rhaglenni gwe lleol sydd a SSL wedi'u galluogi.
> 
> ![Warning Screen Shot][warning-screenshot]
> 
> Os nad ydych yn deall y rhybuddion, neu ganlyniadau anwybyddu'r rhybuddion hyn, fe'ch cynghorir i ymweld â https://trawsgrifiwr.techiaith.cymru i roi cynnig ar y meddalwedd yn hytrach na defnyddio Trawsgrifiwr yn lleol.





<!-- USAGE EXAMPLES -->
## Defnydd

I weld yr ap ar waith ewch i https://localhost:6543 a rhowch gynnig arni!

Bydd ein gwasanaeth yn cynhyrchu trawsgrifiad ar ôl i chi naill ai ddarparu dolen i fideo rydych chi wedi'i bostio ar-lein, uwchlwytho cynnwys oddi ar eich cyfrifiadur, neu recordio chi'ch hun yn uniongyrchol trwy’r rhyngwyneb.

[![Product Name Screen Shot][product-screenshot]](https://trawsgrifiwr.techiaith.cymru)

O'r trawsgrifiadau hyn gallwch wedyn addasu hyd segmentau a chywiro unrhyw gamgymeriadau neu atalnodi coll yn y testun. Ar ôl addasu a chywiro’r trawsgrifiadau cewch gadw’r gwaith ar ffurf [SRT](https://srt-subtitles.com/) neu [TextGrid](https://textgrid.de/en/).

[![Product Name Screen Shot][product-screenshot-2]](https://trawsgrifiwr.techiaith.cymru)

Dydi Trawsgrifiwr ddim eto yn adnabod eich geiriau yn iawn bob amser. Mewn arbrofion syml mae'r fersiwn cychwynnol hwn yn camddeall tua 30% o eiriau mewn brawddeg. Os ydych chi'n cael canlyniadau gwaeth na hyn, gall y canlynol fod o help:

- gofalwch fod eich microffon yn gweithio'n foddhaol.
- gofalwch eich bod yn siarad yn glir, heb fod yn rhy gyflym.
- peidiwch â disgwyl iddo adnabod geiriau Saesneg neu eiriau mwy llafar (fel rîli, tsips, neith).
- os nad ydi'r Trawsgrifiwr i weld yn adnabod eich llais yn dda, mae'n bosib fod eich acen neu'ch llais yn anghyfarwydd i'r peiriant. Un ffordd o wneud yn siŵr y bydd fersiwn diweddarach o'r Trawsgrifiwr yn adnabod eich llais yn well yw recordio rhai brawddegau ar wefan Gymraeg Mozilla Common Voice. https://commonvoice.mozilla.org/cy

<!-- ROADMAP -->
## Map ffordd

- [ ] I'w wneud: Map ffordd

Ar hyn o bryd rydym yn cynllunio nodweddion newydd, dewch yn ôl yn fuan i gael cipolwg arnynt neu ychwanegwch eich barn trwy'r issue tracker.

Gweler yr [issues agored ](https://github.com/techiaith/trawsgrifiwr-arlein/issues) am restr lawn o nodweddion arfaethedig (a materion hysbys). 

<!-- CONTRIBUTING -->
## Cyfrannu

Cyfraniadau yw'r hyn sy'n gwneud y gymuned cod agored yn lle mor anhygoel i ddysgu, ysbrydoli a chreu. Bydd unrhyw gyfraniadau a wnewch yn cael eu **gwerthfawrogi'n fawr**.


Os oes gennych awgrym a fyddai'n gwneud yr adnodd hwn yn well, fforchiwch y storfa a chrëwch pull request.
Gallwch hefyd agor problem gyda'r tag "enhancement".
Peidiwch ag anghofio rhoi seren i'r project! Diolch eto!


1. Creu fforch
1. Creu eich Cangen Nodweddion (Feature Branch)
1. Cyflwyno (Commit) eich Newidiadau
1. Gwthio (Push) i’r gangen
1. Agor Pull Request







<!-- LICENSE -->
## Trwydded

Wedi'i ddosbarthu dan Drwydded MIT. Gweler `LICENSE.txt` am ragor o wybodaeth.




<!-- CONTACT -->
## Cysylltu

Techiaith - [@techiaith](https://twitter.com/techiaith) - techiaith@bangor.ac.uk - [techiaith.cymru](techiaith.cymru)

Project Link: [https://github.com/techiaith/trawsgrifiwr-arlein](https://github.com/techiaith/trawsgrifiwr-arlein)





<!-- ACKNOWLEDGMENTS -->
## Diolchiadau

<img src="images/llyw_logo.png" alt="Logo" align="left">
<img src="images/BU_logo.png" alt="Logo" align="right">
<br><br><br><br><br>
Diolchwn i Lywodraeth Cymru am ariannu’r gwaith hwn fel rhan o brosiect Technoleg Cymraeg 2021-22.




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screen_shot.png
[product-screenshot-2]: images/screen_shot_2.png
[warning-screenshot]: images/screen_shot_not_secure.png
[repo-logo]: images/repo_logo.png
[llyw-logo]: images/llyw_logo.png
[uni-logo]: images/BU_logo.png
