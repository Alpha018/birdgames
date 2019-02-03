import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {
    myStyle: object = {};
    myParams: object = {};
    width = 100;
    height = 100;

    constructor() {
    }

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const componentPosition = document.getElementsByClassName('add-animation');
        const scrollPosition = window.pageYOffset;

        for (let i = 0; i < componentPosition.length; i++) {
            const rec = componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
            if (scrollPosition + window.innerHeight >= rec) {
                componentPosition[i].classList.add('animated');
            } else if (scrollPosition + window.innerHeight * 0.8 < rec) {
                componentPosition[i].classList.remove('animated');
            }
        }
    }

    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('presentation-page');
        body.classList.add('loading');
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0
        };

        this.myParams = {
            particles: {
                number: {
                    value: 80,
                },
                color: {
                    value: '#fff'
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: 4,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                opacity: {
                    value: 8,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 120,
                    color: '#cccccf',
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    repulse: {
                        distance: 130,
                        duration: 0.3
                    },
                },
            },
            retina_detect: true
        }
    }

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('presentation-page');
        body.classList.remove('loading');
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
