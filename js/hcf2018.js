    const baie1 = document.getElementById("baie1");
    const baie2 = document.getElementById("baie2");
    const baie3 = document.getElementById("baie3");
    const baie11 = document.getElementById("baie11");
    const baie22 = document.getElementById("baie22");
    const baie33 = document.getElementById("baie33");
    const plantbottomright = document.getElementById("plant-bottom-right");
    const plantbottomrightpink = document.getElementById("plant-bottom-right-pink");
    const plantbottomcenter = document.getElementById("plant-bottom-center");
    const plantbottomleft = document.getElementById("plant-bottom-left");
    const woman = document.getElementById("woman");
    const aftermoviePanel = document.getElementById("panel-1");
    var scrollObject = {};
    window.onscroll = getScrollPosition;
    var winHeight = window.innerHeight;


    var isIphone = navigator.userAgent.indexOf("iPhone") != -1 ;
    var isIpod = navigator.userAgent.indexOf("iPod") != -1 ;
    var isIpad = navigator.userAgent.indexOf("iPad") != -1 ;

    // now set one variable for all iOS devices
    var isIos = isIphone || isIpod || isIpad ;

    function getScrollPosition(){
        scrollObject = {
           x: window.pageXOffset,
           y: window.pageYOffset
        }
        if(scrollObject.y > 200) {
            TweenMax.to("body", 3, {backgroundColor:"#e3a826", ease:Expo.easeOut})
            TweenMax.to("#dots", 2, {top:"-100vh", scale:1.5, transformOrigin:"center center", ease:Expo.easeOut})
            TweenMax.to("#title", 1, {scale:0.5, transformOrigin:"top center", ease:Expo.easeOut})
            TweenMax.to(".box__title-inner", 2, {color:"#e3a826", ease:Expo.easeOut})
            TweenMax.to(plantbottomleft, 1.5, {left:-100, bottom:-160, ease:Expo.easeOut})
            TweenMax.to(plantbottomcenter, 1.5, {left:-100, bottom:-260, ease:Expo.easeOut})
            TweenMax.to(plantbottomright, 1.5, {right:-250, bottom:-320, ease:Expo.easeOut})
            TweenMax.to(plantbottomrightpink, 1.5, {right:-200, bottom:-160, ease:Expo.easeOut})
            TweenMax.to(baie1, 1, {left:"6%", top:-100, ease:Power3.easeOut})
            TweenMax.to(baie2, 1, {right:-50, top:"110vh", ease:Power3.easeOut})
            TweenMax.to(baie3, 1, {left:-200, bottom:"2vh", ease:Power3.easeOut})
            TweenMax.to(woman, 1.8, {top:"140%", scale:1.4, transformOrigin:"bottom center", ease:Expo.easeOut})
            TweenMax.to("#date-left", 0.8, {scale:0, transformOrigin:"top center", opacity:0, ease:Expo.easeOut})
            TweenMax.to("#date-right", 0.8, {scale:0, transformOrigin:"top center", opacity:0, ease:Expo.easeOut})
        } else if (scrollObject.y < 200) {
            TweenMax.to("body", 2, {backgroundColor:"#e298b4", ease:Expo.easeOut})
            TweenMax.to("#dots", 2, {top:0, scale:1, transformOrigin:"center center", ease:Expo.easeOut})
            TweenMax.to("#title", 1.2, {scale:1, ease:Expo.easeOut})
            TweenMax.to(plantbottomleft, 1.5, {left:"5%", bottom:-10, ease:Expo.easeOut})
            TweenMax.to(plantbottomcenter, 1.5, {left:"10%", bottom:-40, ease:Expo.easeOut})
            TweenMax.to(plantbottomright, 1.5, {right:"6%", bottom:-130, ease:Expo.easeOut})
            TweenMax.to(plantbottomrightpink, 1.5, {right:"4%", bottom:0, ease:Expo.easeOut})
            TweenMax.to(baie1, 0.8, {left:"23%", top:"15vh", ease:Power3.easeOut})
            TweenMax.to(baie2, 0.8, {right:"21%", top:"70vh", ease:Power3.easeOut})
            TweenMax.to(baie3, 0.8, {left:"15%", bottom:"12vh", ease:Power3.easeOut})
            TweenMax.to(woman, 1.5, {top:"10%", scale:1, transformOrigin:"bottom center", ease:Expo.easeOut})
            TweenMax.to("#date-left", 0.8, {scale:1, transformOrigin:"top center", opacity:1, ease:Expo.easeOut})
            TweenMax.to("#date-right", 0.8, {scale:1, transformOrigin:"top center", opacity:1, ease:Expo.easeOut})
        } 

        $(window).scroll(function() {
           if($(window).scrollTop() + $(window).height() == $(document).height()) {
           }

        });


    }

    function startAnim() {
        TweenMax.set(plantbottomleft, {rotation:6})
        TweenMax.set(plantbottomright, {rotation:14})
        TweenMax.set(plantbottomrightpink, {rotation:-15})
        var tl = new TimelineMax({ repeat: -1 })
          .to(baie1, 0.7, { y: 3, x:-1, rotation:360 })
          .to(baie1, 0.7, { y: 0, x:0 })
        var t2 = new TimelineMax({ repeat: -1 })
          .to(baie2, 0.9, { y: -5, x:1, rotation:360 })
          .to(baie2, 0.9, { y: 0, x:0 })
        var t3 = new TimelineMax({ repeat: -1 })
          .to(baie3, 1.2, { y: -1, x:-5, rotation:360 })
          .to(baie3, 1.2, { y: 0, x:0 })
        //var t4 = new TimelineMax({ repeat: -1 })
        //  .to(plantbottomright, 2.1, { y: -1, x:-8, rotation:10, ease:Back.easeOut })
        //  .to(plantbottomright, 1.9, { y: 0, x:0, rotation:14, ease:Power2.easeInOut })
        //var t4bis = new TimelineMax({ repeat: -1 })
        //  .to(plantbottomrightpink, 2.1, { y: -1, x:-12, rotation:-18, scale:1.05, ease:Power2.easeOut })
        //  .to(plantbottomrightpink, 1.9, { y: 0, x:0, rotation:-15, scale:1, ease:Back.easeInOut })
        //var t5 = new TimelineMax({ repeat: -1 })
        //  .to(plantbottomcenter, 2.1, { y: -1, x:-8, rotation:-3, ease:Power2.easeInOut })
        //  .to(plantbottomcenter, 1.9, { y: 0, x:0, rotation:0, ease:Back.easeInOut })
        //var t5bis = new TimelineMax({ repeat: -1 })
        //  .to(plantbottomleft, 2.1, { y: 5, x:-4, rotation:8, ease:Back.easeInOut })
        //  .to(plantbottomleft, 1.9, { y: 0, x:0, rotation:6, ease:Power4.easeInOut })
    }

{
    const lineEq = (y2, y1, x2, x1, currentVal) => {
        // y = mx + b 
        var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
        return m * currentVal + b;
    };

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

    const setRange = (obj) => {
        for(let k in obj) {
            if( obj[k] == undefined ) {
                obj[k] = [0,0];
            }
            else if( typeof obj[k] === 'number' ) {
                obj[k] = [-1*obj[k],obj[k]];
            }
        }
    };

    // from http://www.quirksmode.org/js/events_properties.html#position
	const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
		if (!e) e = window.event;
		if (e.pageX || e.pageY) 	{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		return { x : posx, y : posy }
	};
    
    class Item {
		constructor(el, options) {
            this.DOM = {el: el};

            this.options = {   
                image: {
                    translation : {x: -10, y: -10, z: 0},
                    rotation : {x: 0, y: 0, z: 0}
                },
                title: {
                    translation : {x: 20, y: 10, z: 0}
                },
                partner: {
                    translation : {x: 20, y: 10, z: 0}
                },
                text: {
                    translation : {x: 20, y: 50, z: 0},
                    rotation : {x: 0, y: 0, z: -20}
                },
                deco: {
                    translation : {x: -20, y: 0, z: 0},
                    rotation : {x: 0, y: 0, z: 3}
                },
                shadow: {
                    translation : {x: 30, y: 20, z: 0},
                    rotation : {x: 0, y: 0, z: -2},
                    reverseAnimation : {duration: 2, ease: 'Back.easeOut'}
                },
                content: {
                    translation : {x: 5, y: 3, z: 0}
                }
            };
            Object.assign(this.options, options);

            this.DOM.animatable = {};
            this.DOM.animatable.image = this.DOM.el.querySelector('.box__img');
            this.DOM.animatable.title = this.DOM.el.querySelector('.box__title');
            this.DOM.animatable.text = this.DOM.el.querySelector('.box__text');
            this.DOM.animatable.deco = this.DOM.el.querySelector('.box__deco');
            this.DOM.animatable.shadow = this.DOM.el.querySelector('.box__shadow');
            this.DOM.animatable.content = this.DOM.el.querySelector('.box__content');
            this.DOM.animatable.partner = this.DOM.el.querySelector('.overlay .box');
            
            this.initEvents();
        }
        initEvents() { 
            let enter = false;
            this.mouseenterFn = () => {
                if ( enter ) {
                    enter = false;
                };
                clearTimeout(this.mousetime);
                this.mousetime = setTimeout(() => enter = true, 40);
            };
            this.mousemoveFn = ev => requestAnimationFrame(() => {
                if ( !enter ) return;
                this.tilt(ev);
            });
            this.mouseleaveFn = (ev) => requestAnimationFrame(() => {
                if ( !enter || !allowTilt ) return;
                enter = false;
                clearTimeout(this.mousetime);

                for (let key in this.DOM.animatable ) {
                    if( this.DOM.animatable[key] == undefined || this.options[key] == undefined ) {continue;}
                    TweenMax.to(this.DOM.animatable[key],
                        this.options[key].reverseAnimation != undefined ? this.options[key].reverseAnimation.duration || 0 : 1.5, {
                        ease: this.options[key].reverseAnimation != undefined ? this.options[key].reverseAnimation.ease || 'Power2.easeOut' : 'Power2.easeOut',
                        x: 0,
                        y: 0,
                        z: 0,
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: 0
                    });
                }
            });
            this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
            this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
            this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
        }
        tilt(ev) {
            if ( !allowTilt ) return;
            const mousepos = getMousePos(ev);
            // Document scrolls.
            const docScrolls = {
                left : document.body.scrollLeft + document.documentElement.scrollLeft, 
                top : document.body.scrollTop + document.documentElement.scrollTop
            };
            const bounds = this.DOM.el.getBoundingClientRect();
            // Mouse position relative to the main element (this.DOM.el).
            const relmousepos = { 
                x : mousepos.x - bounds.left - docScrolls.left, 
                y : mousepos.y - bounds.top - docScrolls.top 
            };
            
            // Movement settings for the animatable elements.
            for (let key in this.DOM.animatable) {
                if ( this.DOM.animatable[key] == undefined || this.options[key] == undefined ) {
                    continue;
                }
                
                let t = this.options[key] != undefined ? this.options[key].translation || {x:0,y:0,z:0} : {x:0,y:0,z:0},
                    r = this.options[key] != undefined ? this.options[key].rotation || {x:0,y:0,z:0} : {x:0,y:0,z:0};

                setRange(t);
                setRange(r);
                
                const transforms = {
                    translation : {
                        x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
                        y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0],
                        z: (t.z[1]-t.z[0])/bounds.height*relmousepos.y + t.z[0],
                    },
                    rotation : {
                        x: (r.x[1]-r.x[0])/bounds.height*relmousepos.y + r.x[0],
                        y: (r.y[1]-r.y[0])/bounds.width*relmousepos.x + r.y[0],
                        z: (r.z[1]-r.z[0])/bounds.width*relmousepos.x + r.z[0]
                    }
                };

                TweenMax.to(this.DOM.animatable[key], 1.5, {
                    ease: 'Power1.easeOut',
                    x: transforms.translation.x,
                    y: transforms.translation.y,
                    z: transforms.translation.z,
                    rotationX: transforms.rotation.x,
                    rotationY: transforms.rotation.y,
                    rotationZ: transforms.rotation.z
                });
            }
        }
    }

    class Overlay {
        constructor() {
            this.DOM = {el: document.querySelector('.overlay')};
            this.DOM.reveal = this.DOM.el.querySelector('.overlay__reveal');
            this.DOM.items = this.DOM.el.querySelectorAll('.overlay__item');
            this.DOM.close = this.DOM.el.querySelector('.overlay__close');
        }
        show(contentItem) {
            this.contentItem = contentItem;
            this.DOM.el.classList.add('overlay--open');
            // show revealer
            TweenMax.to(this.DOM.reveal, .5, {
                ease: 'Power1.easeInOut',
                x: '0%',
                onComplete: () => {
                    // hide scroll
                    document.body.classList.add('panel-open');
                    // show preview
                    this.revealItem(contentItem);
                    // hide revealer
                    TweenMax.to(this.DOM.reveal, .5, {
                        delay: 0.2,
                        ease: 'Power3.easeOut',
                        x: '-100%'
                    });

                    this.DOM.close.style.opacity = 1;
                    contentItem.classList.add('panel-foreground');
                    $(contentItem).appendTo('.overlay');
                    if (contentItem.id === "panel-1") {
                        $('#aftermovie-video').youtube_video_play();
                        TweenMax.to("#aftermovie-video", 0.5, {top:"50%", ease:Expo.easeOut});
                        console.log("Play");
                    }
                    
                    //}
                }
            });
        }
        revealItem() {
            this.contentItem.style.opacity = 1;

            let itemElems = [];
            itemElems.push(this.contentItem.querySelector('.box__shadow'));
            itemElems.push(this.contentItem.querySelector('.box__img'));
            itemElems.push(this.contentItem.querySelector('.box__title'));
            itemElems.push(this.contentItem.querySelector('.box__text'));
            itemElems.push(this.contentItem.querySelector('.box__deco'));
            itemElems.push(this.contentItem.querySelector('.dots__overlay'));
            itemElems.push(this.contentItem.querySelector('.list'));
            
            for (let el of itemElems) {
                if ( el == null ) continue;
                const bounds = el.getBoundingClientRect();
                const win = {width: window.innerWidth, height: window.innerHeight};
                TweenMax.to(el, lineEq(0.8, 1.2, win.width, 0, Math.abs(bounds.left+bounds.width - win.width)), {
                    ease: 'Expo.easeOut',
                    delay: 0.2,
                    startAt: {
                        x: `${lineEq(0, 800, win.width, 0, Math.abs(bounds.left+bounds.width - win.width))}`,
                        y: `${lineEq(-100, 100, win.height, 0, Math.abs(bounds.top+bounds.height - win.height))}`,
                        rotationZ: `${lineEq(5, 30, 0, win.width, Math.abs(bounds.left+bounds.width - win.width))}`
                    },
                    x: 0,
                    y: 0,
                    rotationZ: 0
                });
            }
        }
        hide() {
            this.contentItem.classList.remove('panel-foreground');
            var removeForeground = this.DOM.el.classList.remove('overlay--open');
            $('#aftermovie-video').youtube_video_pause();
            TweenMax.to("#aftermovie-video", 0.5, {top:"-100vh", ease:Expo.easeOut});

            // show revealer
            TweenMax.to(this.DOM.reveal, .5, {
                //delay: 0.15,
                ease: 'Power3.easeOut',
                x: '0%',
                onComplete: () => {

                    this.DOM.close.style.opacity = 0;
                    // show scroll
                    document.body.classList.remove('panel-open');
                    // hide preview
                    this.contentItem.style.opacity = 0;
                    // hide revealer
                    TweenMax.to(this.DOM.reveal, .5, {
                        delay: 0,
                        ease: 'Power3.easeOut',
                        x: '100%'
                    });
                }
            });
        }
    }

    class Grid {
        constructor(el) {
            this.DOM = {el: el};
            this.items = [];
            Array.from(this.DOM.el.querySelectorAll('a.grid__item')).forEach((item) => {
                const itemObj = new Item(item);
                this.items.push(itemObj);
                if ( !item.classList.contains('grid__item--noclick') ) {
                    itemObj.DOM.el.addEventListener('click', (ev) => {
                        ev.preventDefault();
                        this.openItem(document.querySelector(item.getAttribute('href')));
                    });
                }
            });

            this.overlay = new Overlay();
            this.overlay.DOM.close.addEventListener('click', () => this.closeItem());
        }
        openItem(contentItem) {
            if ( this.isPreviewOpen ) return;
            this.isPreviewOpen = true;
            allowTilt = false;
            this.overlay.show(contentItem);
            // "explode" grid..
            for (let item of this.items) {
                for (let key in item.DOM.animatable) {
                    const el = item.DOM.animatable[key];
                    if ( el ) {
                        const bounds = el.getBoundingClientRect();
                        
                        let x;
                        let y;
                        const win = {width: window.innerWidth, height: window.innerHeight};

                        if ( bounds.top + bounds.height/2 < win.height/2 - win.height*.1 ) {
                            //x = getRandomInt(-250,-50);
                            //y = getRandomInt(20,100)*-1;
                            x = -1*lineEq(20, 600, 0, win.width, Math.abs(bounds.left+bounds.width - win.width));
                            y = -1*lineEq(20, 600, 0, win.width, Math.abs(bounds.left+bounds.width - win.width));
                        }
                        else if ( bounds.top + bounds.height/2 > win.height/2 + win.height*.1 ) {
                            //x = getRandomInt(-250,-50);
                            //y = getRandomInt(20,100);
                            x = -1*lineEq(20, 600, 0, win.width, Math.abs(bounds.left+bounds.width - win.width));
                            y = lineEq(20, 600, 0, win.width, Math.abs(bounds.left+bounds.width - win.width))
                        }
                        else {
                            //x = getRandomInt(300,700)*-1;
                            x = -1*lineEq(10, 700, 0, win.width, Math.abs(bounds.left+bounds.width - win.width));
                            y = getRandomInt(-25,25);
                        }
                        
                        TweenMax.to(el, 0.4, {
                            ease: 'Power3.easeOut',
                            delay: lineEq(0, 0.3, 0, win.width, Math.abs(bounds.left+bounds.width - win.width)),
                            x: x,
                            y: y,
                            rotationZ: getRandomInt(-10,10),
                            opacity: 0
                        }); 
                    }
                }
            }
        }
        closeItem() {
            if ( !this.isPreviewOpen ) return;
            this.isPreviewOpen = false;
            this.overlay.hide();
            
            for (let item of this.items) {
                for (let key in item.DOM.animatable) {
                    const el = item.DOM.animatable[key];
                    if ( el ) {
                        const bounds = el.getBoundingClientRect();
                        const win = {width: window.innerWidth};
                        TweenMax.to(el, 0.6, {
                            ease: 'Expo.easeOut',
                            delay: .55 + lineEq(0, 0.2, 0, win.width, Math.abs(bounds.left+bounds.width - win.width)),
                            x: 0,
                            y: 0,
                            rotationZ: 0,
                            opacity: 1
                        }); 
                    }
                }
            }

            allowTilt = true;
        }
    }

    let allowTilt = true;
    new Grid(document.querySelector('.grid'));

    // Preload all the images in the page..
    imagesLoaded(document.querySelectorAll('.box__img'), () => document.body.classList.remove('loading'));

    document.addEventListener("DOMContentLoaded", function(event) {
                startAnim();
                getScrollPosition();
    });
    
}


var options = {
  valueNames: [ 'name', 'days', 'scene', 'links', 'label', 'day1', 'day2', 'day3' ],
  item: '<li><span class="days"></span><h3 class="name"></h3><h4 class="label"></h4><span class="scene"></span><span class="links"></span></li>'
};

var datas = [
  {
    name: 'Psaum',
    label: 'La Chinerie',
    days: ['<strong>31</strong>août'],
    day1: true,
    scene: 'Hacienda',
    links: ['<a href="https://soundcloud.com/psaummusic" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Error508',
    label: 'Lunar Limited',
    days: ['<strong>31</strong>août'],
    day1: true,
    scene: 'Hacienda',
    links: ['<a href="https://soundcloud.com/error508" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'APLN B2B Symplectic',
    label: 'MoonTrip',
    days: ['<strong>31</strong>août'],
    day1: true,
    scene: 'Hacienda',
    links: ['<a href="https://soundcloud.com/aplnmusic" target="_blank"><i class="fab fa-soundcloud"></i></a>', '<a href="https://soundcloud.com/symplectic" target="_blank"><i class="fab fa-soundcloud"></i></a>'],
  },
  {
    name: 'Visages',
    label: 'Impact',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Brixton',
    links: ['<a href="https://soundcloud.com/visagesmusic" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Void One',
    label: 'Methlab / Dark Pack',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Brixton',
    links: ['<a href="https://soundcloud.com/void-one" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Fakt & Beoz présentent SLIGHT MOVEMENTS',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Brixton',
    links: ['<a href="https://soundcloud.com/faktdnb" target="_blank"><i class="fab fa-soundcloud"></i></a>', '<a href="https://soundcloud.com/beoz420" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Waskpelz',
    label: 'Bogota Music / Fracas / Abyssal',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Brixton',
    links: ['<a href="https://soundcloud.com/wskplz" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Acid & Mess',
    label: 'Jump\'n\'Bass',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Brixton',
    links: ['<a href="https://soundcloud.com/acidmessdnb" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Bakkhos Full Crew',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Brixton',
    links: ['<a href="https://www.facebook.com/bakkhos.tlse/" target="_blank"><i class="fab fa-facebook"></i></a>']
  },
  {
    name: 'NTBR',
    label: 'Kataklism',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Kreuzberg',
    links: ['<a href="https://soundcloud.com/nicolasthabart" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'öspiel',
    label: 'Material Corp / Exil',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Kreuzberg',
    links: ['<a href="https://soundcloud.com/ospiel" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Tom Baretta x Swaiz',
    label: 'Fall Industry / Dogma',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Kreuzberg',
    links: ['<a href="https://soundcloud.com/baretta31" target="_blank"><i class="fab fa-soundcloud"></i></a>', '<a href="https://soundcloud.com/swaiz_dalous" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'No Devices',
    label: 'Inox',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Kreuzberg'
  },
  {
    name: 'Ratus',
    label: 'Undergroundekno / Anomalik',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Red Light District',
    links: ['<a href="https://soundcloud.com/ratussoundz" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Silyfirst',
    label: 'Balarace / Anomalik',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Red Light District',
    links: ['<a href="https://soundcloud.com/silyfirst" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Binary Squad',
    label: 'ToolBox / Anomalik',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Red Light District',
    links: ['<a href="https://soundcloud.com/binarysquad" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Roland Kule',
    label: '5dan / Beatfreakz / Anomalik',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Red Light District',
    links: ['<a href="https://soundcloud.com/rolandkule" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Le Rude',
    label: 'Rêve Party',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Red Light District',
    links: ['<a href="https://www.facebook.com/Lerude.MF.303w.RevesParty/" target="_blank"><i class="fab fa-facebook"></i></a>']
  },
  {
    name: 'Kurt Gainsbarre',
    label: 'Rêve Party',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Red Light District',
    links: ['<a href="https://soundcloud.com/kurtgainsbarre" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'The Bass Cook VS Babou',
    label: 'Sagouins',
    days: ['<strong>1</strong>sept'],
    day2: true,
    scene: 'Red Light District',
    links: ['<a href="https://soundcloud.com/the-bass-cook" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Critical Hi-Fi',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Dub Corner',
    links: ['<a href="https://www.facebook.com/criticalhifi/" target="_blank"><i class="fab fa-facebook"></i></a>']
  },
  {
    name: 'Skank Jukebox Soundsystem',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Dub Corner',
    links: ['<a href="https://www.facebook.com/SJukeboxSound" target="_blank"><i class="fab fa-facebook"></i></a>']
  },
  {
    name: 'Neo',
    label: 'Otodayso / Plenum / Dark Pack',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Brixton',
    links: ['<a href="https://soundcloud.com/neofrance" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Droflam B2B ZFX',
    label: 'Electronyze Me / CrimeKitchen / Dark Pack',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Brixton',
    links: ['<a href="https://soundcloud.com/droflam" target="_blank"><i class="fab fa-soundcloud"></i></a>', '<a href="https://soundcloud.com/zfx-bassmusic" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Ehoh B2B Azabim',
    label: 'Section Z / Phenethylamine Crew / Razing',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Brixton',
    links: ['<a href="https://soundcloud.com/itsehho" target="_blank"><i class="fab fa-soundcloud"></i></a>', '<a href="https://soundcloud.com/azabim" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'S-Cuz',
    label: 'Jump\'n\'Bass',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Brixton',
    links: ['<a href="https://soundcloud.com/scuzdj" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Cornox B2B Swarm',
    label: 'Bakkhos',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Brixton',
    links: ['<a href="https://soundcloud.com/alexis-paoleschi" target="_blank"><i class="fab fa-soundcloud"></i></a>', '<a href="https://soundcloud.com/swarmtoulouse" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Mothpit',
    label: 'Bakkhos',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Brixton',
    links: ['<a href="https://soundcloud.com/mothpit" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Custom Phase',
    label: 'Reload Black / Black Groove',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Kreuzberg',
    links: ['<a href="https://soundcloud.com/custom-phase-techno" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Max & Ko',
    label: 'Candyhouse',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Kreuzberg',
    links: ['<a href="https://www.facebook.com/maxandko/" target="_blank"><i class="fab fa-facebook"></i></a>']
  },
  {
    name: 'Drizer AC',
    label: 'Plein Phare',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Kreuzberg',
    links: ['<a href="https://soundcloud.com/drizer-ac-music" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Synge',
    label: 'Label Sphere',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Kreuzberg',
    links: ['<a href="https://soundcloud.com/synge-1" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Iridium',
    label: 'Exode / Violent Disorder',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Red Light District',
    links: ['<a href="https://soundcloud.com/iridiumhc" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Spacymen',
    label: 'Beatfreakz / Anomalik',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Red Light District',
    links: ['<a href="https://soundcloud.com/spacymen" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Nidhogg',
    label: 'Deathbreak / Abyssal / Dark Pack',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Red Light District',
    links: ['<a href="https://soundcloud.com/nidhoggmusic" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Driz',
    label: 'Hybrid Kicks',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Red Light District',
    links: ['<a href="https://soundcloud.com/dr1z" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Hard Beat VS Minautore',
    label: 'Exode / Anomalik',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Red Light District',
    links: ['<a href="https://soundcloud.com/hardbeatanomalik" target="_blank"><i class="fab fa-soundcloud"></i></a>', '<a href="https://soundcloud.com/minotaure-projet2501" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Skyzophrenetikz',
    label: 'Hybrid Kicks',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Red Light District',
    links: ['<a href="https://soundcloud.com/skyzophrenetikz" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Annihilate',
    label: 'Hybrid Kicks',
    days: ['<strong>2</strong>sept'],
    day3: true,
    scene: 'Red Light District',
    links: ['<a href="https://soundcloud.com/annihilate31" target="_blank"><i class="fab fa-soundcloud"></i></a>']
  },
  {
    name: 'Blessed Garden',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Pigalles',
    links: ['<a href="https://www.instagram.com/blessed_garden_toulouse/" target="_blank"><i class="fab fa-instagram"></i></a>']
  },
  {
    name: 'Lucho Morante',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Pigalles',
    links: ['<a href="https://www.instagram.com/comomucholucho/?hl=fr" target="_blank"><i class="fab fa-instagram"></i></a>']
  },
  {
    name: 'Ellimac',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Pigalles',
    links: ['<a href="https://www.instagram.com/ellimac_tattooer/?hl=fr" target="_blank"><i class="fab fa-instagram"></i></a>']
  },
  {
    name: 'Whyatt',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Pigalles',
    links: ['<a href="https://www.instagram.com/lea.whyatt/" target="_blank"><i class="fab fa-instagram"></i></a>']
  },
  {
    name: 'Soja',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Pigalles',
    links: ['<a href="https://www.instagram.com/soja_tt/" target="_blank"><i class="fab fa-instagram"></i></a>']
  },
  {
    name: 'Don Doudou',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Pigalles',
    links: ['<a href="https://www.instagram.com/don.doudou/" target="_blank"><i class="fab fa-instagram"></i></a>']
  },
  {
    name: 'Yap9',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Pigalles',
    links: ['<a href="https://www.instagram.com/_yap9_/" target="_blank"><i class="fab fa-instagram"></i></a>']
  },
  {
    name: 'Xer Atria X Spazm Atria X Dely',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Brooklyn',
    links: ['<a href="https://www.facebook.com/Xer-Atria-1658193691068979/?fref=ts" target="_blank"><i class="fab fa-facebook"></i></a>', '<a href="https://www.facebook.com/Spazm-Atria-447352222077709/" target="_blank"><i class="fab fa-facebook"></i></a>', '<a href="https://www.facebook.com/delythebutcher/" target="_blank"><i class="fab fa-facebook"></i></a>']
  },
  {
    name: 'Moune X Julia Forma',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Brooklyn',
    links: ['<a href="https://www.instagram.com/mynameis_moune/" target="_blank"><i class="fab fa-instagram"></i></a>', '<a href="https://www.instagram.com/mlleforma/" target="_blank"><i class="fab fa-instagram"></i></a>']
  },
  {
    name: 'Serena Panelli aka DARKIMEY X Miss Jena',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Brooklyn',
    links: ['<a href="https://www.facebook.com/serena.panelli" target="_blank"><i class="fab fa-facebook"></i></a>', '<a href="http://www.missjenaone.com/" target="_blank"><i class="fas fa-external-link-square-alt"></i></a>']
  },
  {
    name: 'Clémence Genatio',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Brooklyn',
    links: ['<a href="https://www.instagram.com/cle_d_cle/" target="_blank"><i class="fab fa-instagram"></i></a>']
  },
  {
    name: 'Patriestausado',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Brooklyn',
    links: ['<a href="https://www.instagram.com/stillpatriestausado/" target="_blank"><i class="fab fa-instagram"></i></a>']
  },
  {
    name: 'Factory 1018',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Brooklyn',
    links: ['<a href="https://www.facebook.com/FACTORY1018/" target="_blank"><i class="fab fa-facebook"></i></a>']
  },
  {
    name: 'Winter Is Past',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Auroville',
    links: ['<a href="https://www.facebook.com/winter.is.past/" target="_blank"><i class="fab fa-facebook"></i></a>']
  },
  {
    name: 'Le Noyau dans la Prairie',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Auroville',
    links: ['<a href="https://www.facebook.com/Noyau-dans-la-Prairie-825269477555026/" target="_blank"><i class="fab fa-facebook"></i></a>']
  },
  {
    name: 'Laora Climent présente "Sous ma jupe"',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Auroville',
    links: ['<a href="https://vimeo.com/267636601" target="_blank"><i class="fab fa-vimeo"></i></a>']
  },
  {
    name: 'L\'enclave du dernier ordre',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Auroville',
    links: ['<a href="https://www.facebook.com/EnclaveDuDernierOrdre/" target="_blank"><i class="fab fa-facebook"></i></a>']
  },
  {
    name: 'Lavomaton',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Christiana',
    links: ['<a href="https://www.facebook.com/Lavomaton/" target="_blank"><i class="fab fa-facebook"></i></a>']
  },
  {
    name: 'So Doodle Art',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Christiana',
    links: ['<a href="https://www.facebook.com/So-doodle-art-746822208786982/" target="_blank"><i class="fab fa-facebook"></i></a>']
  },
  {
    name: 'Parade',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Christiana',
    links: ['<a href="http://parade.ovh/" target="_blank"><i class="fas fa-external-link-square-alt"></i></a>']
  },
  {
    name: 'Stick\'em Up',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Christiana',
    links: ['<a href="https://www.facebook.com/stickem.up.33" target="_blank"><i class="fab fa-facebook"></i></a>']
  },
  {
    name: 'Pauline Munoz',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Christiana',
    links: ['<a href="https://www.instagram.com/pauline_munoz_makeup/" target="_blank"><i class="fab fa-instagram"></i></a>']
  },
  {
    name: 'Art2Lux',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Christiana',
    links: ['<a href="https://www.facebook.com/A2L46/" target="_blank"><i class="fab fa-facebook"></i></a>']
  },
  {
    name: 'Streetshop',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Christiana',
    links: ['<a href="https://www.facebook.com/Streetshop31/" target="_blank"><i class="fab fa-facebook"></i></a>']
  },
  {
    name: 'Corner Store',
    days: ['<strong>1&2</strong>sept'],
    day2: true,
    day3: true,
    scene: 'Christiana',
    links: ['<a href="https://www.instagram.com/corner_tlsshop/" target="_blank"><i class="fab fa-instagram"></i></a>']
  },
  
];

var lineupList = new List('users', options, datas);

var linksList = datas.map(obj => {
        var linkObj = obj.links;
        return linkObj;
        linkObj.forEach(link => {
        var linkDOM = document.createElement("a");
        linkDOM.setAttribute("href", link);
        linkDOM.setAttribute("target", "_blank");
        document.body.appendChild(linkDOM);
        });
    });

var els = document.getElementsByClassName("label");

Array.prototype.forEach.call(els, function(el) {
    var value = el.innerHTML;
    if (value === "") {
        el.classList.add("hidden");
    }
    else {
        el.classList.remove("hidden");
    }
});

var filterDay1 = document.getElementById("filter-day1");
var filterDay2 = document.getElementById("filter-day2");
var filterDay3 = document.getElementById("filter-day3");
var filterDubCorner = document.getElementById("filter-dubcorner");
var filterHacienda = document.getElementById("filter-hacienda");
var filterBrixton = document.getElementById("filter-brixton");
var filterKreuzberg = document.getElementById("filter-kreuzberg");
var filterRedLightDistrict = document.getElementById("filter-redlightdistrict");
var filterPigalles = document.getElementById("filter-pigalles");
var filterAuroville = document.getElementById("filter-auroville");
var filterBrooklyn = document.getElementById("filter-brooklyn");
var filterChristiana = document.getElementById("filter-christiana");
var detailsDubCorner = document.getElementById("details__dubcorner");
var detailsHacienda = document.getElementById("details__hacienda");
var detailsBrixton = document.getElementById("details__brixton");
var detailsKreuzberg = document.getElementById("details__kreuzberg");
var detailsRedLightDistrict = document.getElementById("details__redlightdistrict");
var detailsPigalles = document.getElementById("details__pigalles");
var detailsAuroville = document.getElementById("details__auroville");
var detailsBrooklyn = document.getElementById("details__brooklyn");
var detailsChristiana = document.getElementById("details__christiana");
filterDay1.addEventListener('click', function() {
    lineupList.filter(function(item) {
        if (item.values().day1 == true) {
           return true;
           $("#scrollme").scrollTop();
        } else {
           return false;
        }
    });
});
filterDay2.addEventListener('click', function() {
    lineupList.filter(function(item) {
        if (item.values().day2 == true) {
           return true;
           $("#scrollme").scrollTop();
        } else {
           return false;
        }
    });
});
filterDay3.addEventListener('click', function() {
    lineupList.filter(function(item) {
        if (item.values().day3 == true) {
           return true;
           $("#scrollme").scrollTop();
        } else {
           return false;
        }
    });
});
filterChristiana.addEventListener('click', function() {
    lineupList.filter(function(item) {
        if (item.values().scene == 'Christiana') {
           return true;
           $("#scrollme").scrollTop();
        } else {
           return false;
        }
    });
});
filterChristiana.addEventListener('mouseover', function() {
    TweenMax.to(detailsChristiana, 0.5, {opacity:1, ease:Expo.easeOut});
});
filterChristiana.addEventListener('mouseout', function() {
    TweenMax.to(detailsChristiana, 0.5, {opacity:0, ease:Expo.easeOut});
});
filterDubCorner.addEventListener('click', function() {
    lineupList.filter(function(item) {
        if (item.values().scene == 'Dub Corner') {
           return true;
           $("#scrollme").scrollTop();
        } else {
           return false;
        }
    });
});
filterDubCorner.addEventListener('mouseover', function() {
    TweenMax.to(detailsDubCorner, 0.5, {opacity:1, ease:Expo.easeOut});
});
filterDubCorner.addEventListener('mouseout', function() {
    TweenMax.to(detailsDubCorner, 0.5, {opacity:0, ease:Expo.easeOut});
});
filterHacienda.addEventListener('click', function() {
    lineupList.filter(function(item) {
        if (item.values().scene == 'Hacienda') {
           return true;
           $("#scrollme").scrollTop();
        } else {
           return false;
        }
    });
});
filterHacienda.addEventListener('mouseover', function() {
    TweenMax.to(detailsHacienda, 0.5, {opacity:1, ease:Expo.easeOut});
});
filterHacienda.addEventListener('mouseout', function() {
    TweenMax.to(detailsHacienda, 0.5, {opacity:0, ease:Expo.easeOut});
});
filterBrixton.addEventListener('click', function() {
    lineupList.filter(function(item) {
        if (item.values().scene == 'Brixton') {
           return true;
           $("#scrollme").scrollTop();
        } else {
           return false;
        }
    });
});
filterBrixton.addEventListener('mouseover', function() {
    TweenMax.to(detailsBrixton, 0.5, {opacity:1, ease:Expo.easeOut});
});
filterBrixton.addEventListener('mouseout', function() {
    TweenMax.to(detailsBrixton, 0.5, {opacity:0, ease:Expo.easeOut});
});
filterKreuzberg.addEventListener('click', function() {
    lineupList.filter(function(item) {
        if (item.values().scene == 'Kreuzberg') {
           return true;
           $("#scrollme").scrollTop();
        } else {
           return false;
        }
    });
});
filterKreuzberg.addEventListener('mouseover', function() {
    TweenMax.to(detailsKreuzberg, 0.5, {opacity:1, ease:Expo.easeOut});
});
filterKreuzberg.addEventListener('mouseout', function() {
    TweenMax.to(detailsKreuzberg, 0.5, {opacity:0, ease:Expo.easeOut});
});
filterRedLightDistrict.addEventListener('click', function() {
    lineupList.filter(function(item) {
        if (item.values().scene == 'Red Light District') {
           return true;
           $("#scrollme").scrollTop();
        } else {
           return false;
        }
    });
});
filterRedLightDistrict.addEventListener('mouseover', function() {
    TweenMax.to(detailsRedLightDistrict, 0.5, {opacity:1, ease:Expo.easeOut});
});
filterRedLightDistrict.addEventListener('mouseout', function() {
    TweenMax.to(detailsRedLightDistrict, 0.5, {opacity:0, ease:Expo.easeOut});
});
filterPigalles.addEventListener('click', function() {
    lineupList.filter(function(item) {
        if (item.values().scene == 'Pigalles') {
           return true;
           $("#scrollme").scrollTop();
        } else {
           return false;
        }
    });
});
filterPigalles.addEventListener('mouseover', function() {
    TweenMax.to(detailsPigalles, 0.5, {opacity:1, ease:Expo.easeOut});
});
filterPigalles.addEventListener('mouseout', function() {
    TweenMax.to(detailsPigalles, 0.5, {opacity:0, ease:Expo.easeOut});
});
filterAuroville.addEventListener('click', function() {
    lineupList.filter(function(item) {
        if (item.values().scene == 'Auroville') {
           return true;
           $("#scrollme").scrollTop();
        } else {
           return false;
        }
    });
});
filterAuroville.addEventListener('mouseover', function() {
    TweenMax.to(detailsAuroville, 0.5, {opacity:1, ease:Expo.easeOut});
});
filterAuroville.addEventListener('mouseout', function() {
    TweenMax.to(detailsAuroville, 0.5, {opacity:0, ease:Expo.easeOut});
});
filterBrooklyn.addEventListener('click', function() {
    lineupList.filter(function(item) {
        if (item.values().scene == 'Brooklyn') {
           return true;
           $("#scrollme").scrollTop();
        } else {
           return false;
        }
    });
});
filterBrooklyn.addEventListener('mouseover', function() {
    TweenMax.to(detailsBrooklyn, 0.5, {opacity:1, ease:Expo.easeOut});
});
filterBrooklyn.addEventListener('mouseout', function() {
    TweenMax.to(detailsBrooklyn, 0.5, {opacity:0, ease:Expo.easeOut});
});

var timeoutID;
 
function setup() {
    this.addEventListener("mousemove", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);
 
    startTimer();
}
setup();
 
function startTimer() {
    // wait 2 seconds before calling goInactive
    timeoutID = window.setTimeout(goInactive, 2000);
}
 
function resetTimer(e) {
    window.clearTimeout(timeoutID);
 
    goActive();
}
 
function goInactive() {
    // do something
}
 
function goActive() {
    // do something
         
    startTimer();
}


if (isIos) {
    $(document).ready(function() {
    $('#aftermovie-video').youtube_video({
        videos: ['U4nZkt4EUR4'],
        hide_youtube_logo: true,
        show_playlist: false,
        show_channel_in_title: false,
        force_hd: true,
        width: 375,
        show_controls_on_play: true,
        api_key: 'AIzaSyB75SMflhywBtgs3GY5Ex90Ndi-Ni5uKno'
        /* other options here */
    });
});
}
else {
    $(document).ready(function() {
    $('#aftermovie-video').youtube_video({
        videos: ['U4nZkt4EUR4'],
        hide_youtube_logo: true,
        show_playlist: false,
        show_channel_in_title: false,
        force_hd: true,
        width: 800,
        show_controls_on_play: true,
        api_key: 'AIzaSyB75SMflhywBtgs3GY5Ex90Ndi-Ni5uKno'
        /* other options here */
    });
});
}


var html = document.documentElement;
        var body = document.body;

        var scroller = {
            target: document.querySelector("#scroll-viewport"),
            ease: 0.10, // <= scroll speed
            endY: 0,
            y: 0,
            resizeRequest: 1,
            scrollRequest: 0,
        };

        var requestId = null;

        function onLoad() {
            updateScroller();
            window.focus();
            window.addEventListener("resize", onResize);
            document.addEventListener("scroll", onScroll);
        }

        function updateScroller() {

            var resized = scroller.resizeRequest > 0;

            if (resized) {
                var height = scroller.target.clientHeight;
                body.style.height = height + "px";
                scroller.resizeRequest = 0;
            }

            var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

            scroller.endY = scrollY;
            scroller.y += (scrollY - scroller.y) * scroller.ease;

            if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
                scroller.y = scrollY;
                scroller.scrollRequest = 0;
            }

            TweenLite.set(scroller.target, {
                y: -scroller.y
            });

            requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;

        }

        function onScroll() {
            scroller.scrollRequest++;
            if (!requestId) {
                requestId = requestAnimationFrame(updateScroller);
            }
        }

        function onResize() {
            scroller.resizeRequest++;
            if (!requestId) {
                requestId = requestAnimationFrame(updateScroller);
            }
        }
