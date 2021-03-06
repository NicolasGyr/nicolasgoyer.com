console.clear();

//TAB
var leeweisweeTAB = ['images/LeeWeiSwee/LeeWeiSwee-website.mp4']
var leeweisweeTXT = ['Lee Wei Swee.', "Website for the photograph Lee Wei Swee <br> <span class='learnmore'> Click to learn more... </span>", "I created a personal website for the talented <a href='https://www.instagram.com/sweeriouslee/' target='_blank'  class='link-text'>Lee Wei Swee↗︎</a>, photographer who worked for Vogue, Versace, many famous magazines and celebrities. <br> <br> The challenge of this site was to show all Lee’s photos while maintaining the “magazine” aspect because he mostly works and shoots for magazines. All his photos are displayed on the homepage, grouped by shoots/collections, showing step by step, like you are reading a magazine. (website isn't online).<br><span class='text-span'>Date: December 2021 // Languages: Html, Css, Javascript</span>"]
var leeweisweeCAT = ['UI / UX', 'Website']

var nofutureTAB = ['images/No-Future/No-Future-1.jpg', 'images/No-Future/No-Future-2.jpg', 'images/No-Future/No-Future-3.jpg', 'images/No-Future/No-Future-4.jpg', 'images/No-Future/No-Future-5.jpg', 'images/No-Future/No-Future-6.jpg', 'images/No-Future/No-Future-7.jpg', 'images/No-Future/No-Future-8.jpg', 'images/No-Future/No-Future-9.jpg', 'images/No-Future/No-Future-10.jpg', 'images/No-Future/No-Future-11.jpg', 'images/No-Future/No-Future-12.jpg',]
var nofutureTXT = ['No Future, visual identity.', "Visual identity of Wit's album, custom logotype, front & back cover, editorial book <br> <span class='learnmore'> Click to learn more... </span>", "“No future” is a french hip-hop album created by <a href='https://music.apple.com/fr/artist/wit/1412648514' target='_blank'  class='link-text'> Wit↗︎</a>. My goal here was to recreate the entire visual identity passing by the front & back cover, a custom logotype and a little editorial book presenting Wit’s world. The challenge here was to align with the album universe, dark and twisted. <br><br> Firstly came the logotype with hard lines and smooth curves. Following it, the front cover arrived highlighting it. The editorial book presents Wit’s photoshoots and some album informations, like tracklist, lyrics, some details and facts. <br><span class='text-span'>Date: August 2021 // Softwares: Photoshop, Illustrator, Fontlab 5</span>"]
var nofutureCAT = ['Typography', 'Editorial', 'Front & back cover']

var cloudfilesTAB = ['images/CloudFiles/CloudFiles.mp4',]
var cloudfilesTXT = ['CloudFiles.', "User interface & experience for a cloud application <br> <span class='learnmore'> Click to learn more... </span>", "The goal of this class project was to create a full UI & UX for an application. I've chosen a sharing and storing online files service. <br><br> The goal of this UI was to be the cleanest and simple as possible to create this secured and safe atmosphere. <br><span class='text-span'>Date: July 2021 // Software: Figma</span>"]
var cloudfilesCAT = ['Application', 'UI / UX']

var torikarasanTAB = ['images/TorikaraSan/Torikarasan-1.mp4']
var torikarasanTXT = ['Torikara San.', "Website for a japanese fast-foods restaurant <br> <span class='learnmore'> Click to learn more... </span>", "In group of two we were ordered to fully create a website for a japanese fast-foods in Dijon. The challenge here was that we only got 5 days to design & develop the website. <br><br>In this project I was mainly focused on the UI & UX of the website. The client here was pretty cool, gave us carte blanche but requested few things like having a google map iframe, picture of every meals etc. <br><span class='text-span'>Date: March 2021 // Software: Figma, Html, Css</span>"]
var torikarasanCAT = ['UI / UX', 'Website']

var cceTAB = ['images/ConseilConfortEnergie/CCE.mp4']
var cceTXT = ['Conseil Confort Energie.', "Website for Conseil Confort Energie <br> <span class='learnmore'> Click to learn more... </span>", "My mate Thomas Palheiro and I created from scratch Conseil Confort Energie’s website. During the first appointment with the client we understood that he wanted something big, impacting. Therefore we created a 3D house animation, showcasing its most popular products. The design process completed we decided to develop on Webflow.<br><br>We learned a lot creating this website, both the technical (3D, lottie, Webflow …) and human (client relationship, organization, administrative ...) aspects.<br><br>Website: <a href='https://cce-0c92fc.webflow.io/' target='_blank'  class='link-text'>CCE↗︎</a> (not 100% finished, waiting for the client approval & contents)<br><span class='text-span'>Date: June 2022 // Techno: Figma & Webflow </span>"]
var cceCAT = ['UI / UX', 'Website']

var sodigitalTAB = ['images/Sodigital/Sodigital-1.jpg', 'images/Sodigital/Sodigital-2.jpg', 'images/Sodigital/Sodigital-3.jpg', 'images/Sodigital/Sodigital-4.jpg', 'images/Sodigital/Sodigital-5.jpg', 'images/Sodigital/Sodigital-6.jpg', 'images/Sodigital/Sodigital-7.jpg']
var sodigitalTXT = ['Sodigital.', "Logotype for Sodigital <br> <span class='learnmore'> Click to learn more... </span>", "Sodigital is an enterprise that connects talents and companies. It is divided into 4 sections: Consulting, Projects, Design and Technique. I made a custom logotype and created 4 icons which each highlight one aspect.<br><span class='text-span'>Date: May 2022 // Techno: Illustrator<br>(proposal declined)</span>"]
var sodigitalCAT = ['Typography']

var chanvreTAB = ['images/Chanvre/Chanvre.mp4']
var chanvreTXT = ['La Ferme du Bois.', "Website for La Ferme du Bois <br> <span class='learnmore'> Click to learn more... </span>", "The purpose of this website was to highlight these hemp cookies (don't worry it's legal lol). For this project we were in group and I was charged to create the artistic direction both of the product itself and the website (UI).<br><span class='text-span'>Date: February 2022 // Techno: Illustrator & Figma </span>"]
var chanvreCAT = ['Website', 'Visual identity']

//VAR
var classImg = document.querySelectorAll(".img")
var classContainerImg = document.querySelector('.containerimg')
var classCategorieContainer = document.querySelector('.categorie-container')
var imgOrMov = 0
var playingOrPaused = 0

var hovering = (event) => {
  hoveringElementId = event.target.id
  getTab()
}
for (var i = 0; i < classImg.length; i++) { classImg[i].addEventListener('mouseover', hovering) }

function getTab() {
  if (hoveringElementId == 'leeweiswee') {
    arrayHover = leeweisweeTAB
    arrayHoverTxt = leeweisweeTXT
    arrayHoverCat = leeweisweeCAT
    imgOrMov = 1
  }
  else if (hoveringElementId == 'nofuture') {
    arrayHover = nofutureTAB
    arrayHoverTxt = nofutureTXT
    arrayHoverCat = nofutureCAT
    imgOrMov = 0
  }
  else if (hoveringElementId == 'cloudfiles') {
    arrayHover = cloudfilesTAB
    arrayHoverTxt = cloudfilesTXT
    arrayHoverCat = cloudfilesCAT
    imgOrMov = 1
  }
  else if (hoveringElementId == 'torikarasan') {
    arrayHover = torikarasanTAB
    arrayHoverTxt = torikarasanTXT
    arrayHoverCat = torikarasanCAT
    imgOrMov = 1
  }
  else if (hoveringElementId == 'cce') {
    arrayHover = cceTAB
    arrayHoverTxt = cceTXT
    arrayHoverCat = cceCAT
    imgOrMov = 1
  }
  else if (hoveringElementId == 'sodigital') {
    arrayHover = sodigitalTAB
    arrayHoverTxt = sodigitalTXT
    arrayHoverCat = sodigitalCAT
    imgOrMov = 0
  }
  else if (hoveringElementId == 'chanvre') {
    arrayHover = chanvreTAB
    arrayHoverTxt = chanvreTXT
    arrayHoverCat = chanvreCAT
    imgOrMov = 1
  }
}

//DELAY
function delay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1);
  });
}

//FADES
async function fadeIn(param, time) {
  classParam = document.querySelector('.' + param)
  classParam.style.display = 'block'
  classParam.style.animation = 'fadeIn ' + time + 's'
  document.querySelector('html').style.pointerEvents = 'none'
  await delay(500)
  document.querySelector('html').style.pointerEvents = null
  classParam.style.animation = null
}

async function fadeOut(param, time) {
  classParam = document.querySelector('.' + param)
  classParam.style.animation = 'fadeOut ' + time + 's'
  document.querySelector('html').style.pointerEvents = 'none'
  await delay(500)
  classParam.style.display = 'none'
  document.querySelector('html').style.pointerEvents = null
  classParam.style.animation = null
}

// ------- functions ------- //

  //PREVIEW PROJECT
  for (var i = 0; i < classImg.length; i++) {
    classImg[i].addEventListener('click', previewProject)
  }
  document.querySelectorAll('.pjrt-title-title').forEach(item => {
    item.addEventListener('click', previewProject)
})
  async function previewProject() {
    fadeOut('section-home', '.5')
    await delay(500)
    window.scrollTo(0, 0);
    fadeIn('section-project', '.5')

    document.querySelector('.title-project').innerHTML = arrayHoverTxt[0]
    document.querySelector('.description-project').innerHTML = arrayHoverTxt[2]

    //display btn cat
    for (var i = 0; i < arrayHoverCat.length; i++) {
      var newDivImg = document.createElement("div")
      newDivImg.classList.add('btn-cat2')
      newDivImg.innerHTML = arrayHoverCat[i]
      document.querySelector('.categorie-container').appendChild(newDivImg);
    }

    if (imgOrMov == 0){
      //create imgs
      for (var i = 0; i < arrayHover.length; i++) {
        var newDivImg = document.createElement("img")
        newDivImg.classList.add('tryimg')
        newDivImg.src = arrayHover[i]
        document.querySelector('.containerimg').appendChild(newDivImg);
      }

      //click previw
      document.querySelectorAll('.tryimg').forEach(item => {
        item.addEventListener('click', event => {
          window.open(item.src, '_blank').focus()
          console.log(event)
        })
    })
   }

    if (imgOrMov == 1) {
      //create video
      for (var i = 0; i < arrayHover.length; i++) {
        var newDivImg = document.createElement("video")
        newDivImg.classList.add('trymp4')
        newDivImg.setAttribute('playsinline', 'playsinline')
        newDivImg.setAttribute('loop', 'loop')
        newDivImg.setAttribute('autoplay', 'autoplay')
        newDivImg.setAttribute('muted', 'muted')
        newDivImg.setAttribute('controls', 'controls')
        newDivImg.src = arrayHover[i]
        document.querySelector('.containerimg').appendChild(newDivImg);

        if (arrayHover == 'images/CloudFiles/CloudFiles.mp4'){
          document.querySelector('.trymp4').style.objectPosition="center 2px"
          if (window.matchMedia("(min-width: 769px)").matches) {
            newDivImg.style.width = '20%'
          }
        }
        if(arrayHover == 'images/TorikaraSan/Torikarasan-1.mp4') {
          document.querySelector('.trymp4').style.objectPosition="center 2px"
          document.querySelector('.trymp4').style.backgroundColor="#fcf5e9"
        }
      }

    //PAUSE & PLAY VIDEO
    // document.querySelector('.trymp4').addEventListener('click', playPause)
    // function playPause() {
    //   if (playingOrPaused == 0) {
    //     document.querySelector('.trymp4').pause()
    //     document.querySelector('.trymp4').style.cursor = ' url("images/emoji/play.svg"), auto'
    //     playingOrPaused = 1
    //   } else {
    //     document.querySelector('.trymp4').play()
    //     document.querySelector('.trymp4').style.cursor = ' url("images/emoji/pause.svg"), auto'
    //     playingOrPaused = 0
    //   }
    // }
    }
  }

  //HOVER IMG
  document.querySelectorAll('.prjt').forEach(item => {
    item.addEventListener('mouseover', event => {
      item.querySelector('.pjrt-title-title').style.textDecoration='underline'
      item.querySelector('.pjrt-title-title').style.color='#0636dd'
    })
  })
  
  document.querySelectorAll('.prjt').forEach(item => {
    item.addEventListener('mouseout', event => {
      item.querySelector('.pjrt-title-title').style.textDecoration='none'
      item.querySelector('.pjrt-title-title').style.color='black'
    })
  })

  //BTN BACK
  document.querySelector('.container-back').addEventListener('click', backToHome)
  async function backToHome() {
    fadeOut('section-project', '.5')
    await delay(500)
    window.scrollTo(0, 0);
    fadeIn('section-home', '.5')

    //clear containerimg
    while (classContainerImg.firstChild) {
      classContainerImg.removeChild(classContainerImg.firstChild);
    }

    //cleear container cat
    while (classCategorieContainer.firstChild) {
      classCategorieContainer.removeChild(classCategorieContainer.firstChild);
    }
  }