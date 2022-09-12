/* import anime from 'animejs'
import 'animejs';


import React, { useState } from 'react'

const AniBall = () => {


  return (
    <>
      <div class="logo-animation">
        <div class="letters">
          <div class="letter letter-a">
            <svg viewBox="0 0 162 162">
              <g fill="none" fill-rule="evenodd" stroke="#5E89FB">
                <path class="fill in" strokeWidth="40" d="M101 141H81a60 60 0 1 1 0-120c33.14 0 59 26.86 60 60v80" />
                <path class="fill out" strokeWidth="40" d="M141 161V81c-1-33.14-26.86-60-60-60a60 60 0 1 0 0 120h20" />
                <path class="line out" strokeWidth="2" d="M121 161V81.33C120.18 58.59 102.7 41 81 41a40 40 0 1 0 0 80h20v40H81A80 80 0 1 1 81 1c43.8 0 78.66 35.27 80 79.7V161h-40z" />
              </g>
            </svg>
          </div>
          <div class="letter letter-n">
            <svg viewBox="0 0 162 162">
              <g fill="none" fill-rule="evenodd" stroke="#FB155A">
                <path class="fill in" strokeWidth="40" d="M21 161V1" />
                <path class="fill out" strokeWidth="40" d="M21 1v160" />
                <path class="fill in" strokeWidth="40" d="M21 161V81c1-33.14 26.86-60 60-60a60 60 0 0 1 60 60v80" />
                <path class="fill out" strokeWidth="40" d="M141 161V81a60 60 0 0 0-60-60c-33.14 0-59 26.86-60 60v80" />
                <path class="line out" strokeWidth="2" d="M41 161V1H1v160h40z" />
                <path class="line out" strokeWidth="2" d="M1 161V80.4C2.35 36.27 37.2 1 81 1a80 80 0 0 1 80 80v80h-40V81a40 40 0 0 0-40-40c-21.7 0-39.18 17.59-40 40.33V161H1z" />
              </g>
            </svg>
          </div>
          <div class="letter letter-i">
            <svg viewBox="0 0 82 162">
              <g fill="none" fill-rule="evenodd" stroke="#18FF92">
                <path class="fill in" strokeWidth="40" d="M21 61v20a60 60 0 0 0 60 60" />
                <path class="fill out" strokeWidth="40" d="M81 141a60 60 0 0 1-60-60V61" />
                <path class="line out" strokeWidth="2" d="M81 121a40 40 0 0 1-40-40V61H1v20a80 80 0 0 0 80 80v-40z" />
              </g>
            </svg>
          </div>
          <div class="letter letter-m-1">
            <svg viewBox="0 0 162 162">
              <g fill="none" fill-rule="evenodd" stroke="#5E89FB">
                <path class="fill in" strokeWidth="40" d="M21 161V1" />
                <path class="fill out" strokeWidth="40" d="M21 1v160" />
                <path class="fill in" strokeWidth="40" d="M21 161V81c1-33.14 26.86-60 60-60a60 60 0 0 1 60 60v80" />
                <path class="fill out" strokeWidth="40" d="M141 161V81a60 60 0 0 0-60-60c-33.14 0-59 26.86-60 60v80" />
                <path class="line out" strokeWidth="2" d="M41 161V1H1v160h40z" />
                <path class="line out" strokeWidth="2" d="M1 161V80.4C2.35 36.27 37.2 1 81 1a80 80 0 0 1 80 80v80h-40V81a40 40 0 0 0-40-40c-21.7 0-39.18 17.59-40 40.33V161H1z" />
              </g>
            </svg>
          </div>
          <div class="letter letter-m-2">
            <svg viewBox="0 0 162 162">
              <g fill="none" fill-rule="evenodd" stroke="#FB155A">
                <path class="fill in" strokeWidth="40" d="M21 161V81c1-33.14 26.86-60 60-60a60 60 0 0 1 60 60v80" />
                <path class="fill out" strokeWidth="40" d="M141 161V81a60 60 0 0 0-60-60c-33.14 0-59 26.86-60 60v80" />
                <path class="line out" strokeWidth="2" d="M1 161V80.4C2.35 36.27 37.2 1 81 1a80 80 0 0 1 80 80v80h-40V81a40 40 0 0 0-40-40c-21.7 0-39.18 17.59-40 40.33V161H1z" />
              </g>
            </svg>
          </div>
          <div class="letter letter-e">
            <svg viewBox="0 0 162 162">
              <g fill="none" fill-rule="evenodd" stroke="#18FF92">
                <path class="fill in" strokeWidth="40" d="M81 101h60V81c-1-33.14-26.86-60-60-60a60 60 0 1 0 0 120" />
                <path class="fill out" strokeWidth="40" d="M81 141a60 60 0 1 1 0-120c33.14 0 59 26.86 60 60v20H81" />
                <path class="line out" strokeWidth="2" d="M81 81v40h80V80.7C159.66 36.27 124.8 1 81 1a80 80 0 1 0 0 160v-40a40 40 0 1 1 0-80c21.6 0 39.01 17.42 39.99 40H81z" />
              </g>
            </svg>
          </div>
          <div class="logo-icon">
            <div class="icon">
              <svg viewBox="0 0 62 62">
                <g fill="none" fill-rule="evenodd" strokeWidth="2" transform="translate(1 1)">
                  <path class="icon-curve" stroke="#FF1554" d="M0 16a80.88 80.88 0 0 1 44 44" />
                  <path class="icon-line" stroke="#5E89FB" d="M4 0h54a2 2 0 0 1 2 2.01V58A2 2 0 0 1 58 60H2a2 2 0 0 1-2-2.01V2A2 2 0 0 1 2 0h2z" />
                  <rect width="40" height="40" x="10" y="10" stroke="#18FF92" rx="20" />
                </g>
              </svg>
            </div>
            <div class="icon-text">
              <svg viewBox="0 0 160 62">
                <g fill="#FBF3FB" fill-rule="evenodd">
                  <path d="M27.33 18h1.73l10.15 25.7h-1.69l-3.24-8.24H21.97l-3.28 8.24H17L27.33 18zm6.45 16.1l-5.51-14.55h-.07l-5.73 14.54h11.3z" />
                  <polygon points="51.334 18 53.314 18 69.55 41.58 69.622 41.58 69.622 18 71.206 18 71.206 43.704 69.334 43.704 52.99 19.944 52.918 19.944 52.918 43.704 51.334 43.704" />
                  <polygon points="86.027 18 87.611 18 87.611 43.704 86.027 43.704" />
                  <polygon points="102.433 18 104.701 18 114.745 41.94 114.817 41.94 124.753 18 127.021 18 127.021 43.704 125.437 43.704 125.437 19.944 125.365 19.944 115.573 43.704 113.989 43.704 104.089 19.944 104.017 19.944 104.017 43.704 102.433 43.704" />
                  <polygon points="141.843 18 159.123 18 159.123 19.368 143.427 19.368 143.427 29.664 158.187 29.664 158.187 31.032 143.427 31.032 143.427 42.336 159.303 42.336 159.303 43.704 141.843 43.704" />
                </g>
              </svg>
            </div>
          </div>
          <div class="dot dot-i">
            <svg viewBox="0 0 42 42">
              <g fill="none" fill-rule="evenodd">
                <rect width="40" height="40" x="1" y="1" fill="#17F28C" rx="20" />
              </g>
            </svg>
          </div>
          <div class="dot dot-e">
            <svg viewBox="0 0 42 42">
              <g fill="none" fill-rule="evenodd">
                <rect width="40" height="40" x="1" y="1" fill="#FFFFFF" rx="20" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

    </>
  )
}

export default AniBall


if (typeof document !== 'undefined') {
  var logoEl = document.querySelector('.logo-animation');
  var pathEls = document.querySelectorAll('.logo-animation path:not(.icon-curve)');
  var innerWidth = window.innerWidth;
  var maxWidth = 740;
  var logoScale = innerWidth <= maxWidth ? innerWidth / maxWidth : 1;
  var logoTimeline = anime.timeline();

  logoEl.style.transform = 'translateY(50px) scale(' + logoScale + ')';

  for (var i = 0; i < pathEls.length; i++) {
    var el = pathEls[i];
    el.setAttribute('stroke-dashoffset', anime.setDashoffset(el));
  }

  logoTimeline
    .add({
      targets: '.dot-e',
      translateX: [
        { value: -600, duration: 520, delay: 200, easing: 'easeInQuart' },
        { value: [-100, 0], duration: 500, delay: 1000, easing: 'easeOutQuart' }
      ],
      scale: [
        { value: [0, 1], duration: 200, easing: 'easeOutBack' },
        { value: 0, duration: 20, delay: 500, easing: 'easeInQuart' },
        { value: 1, duration: 200, delay: 1000, easing: 'easeOutQuart' },
        { value: 0, duration: 400, delay: 500, easing: 'easeInBack' }
      ],
      offset: 0
    })
    .add({
      targets: '.dot-i',
      translateY: { value: [-200, 0], duration: 500, elasticity: 400 },
      scale: [
        { value: [0, 1], duration: 100, easing: 'easeOutQuart' },
        { value: 0, duration: 400, delay: 1400, easing: 'easeInBack' }
      ],
      delay: 1200,
      offset: 0
    })
    .add({
      targets: '.fill.in',
      strokeDashoffset: {
        value: [anime.setDashoffset, 0],
        duration: 600,
        delay: function (el, i, t) { return 700 + (i * 100); },
        easing: 'easeOutQuart'
      },
      stroke: {
        value: ['#FFF', function (el) { return anime.getValue(el.parentNode, 'stroke') }],
        duration: 500,
        delay: 500,
        easing: 'easeInQuad'
      },
      opacity: {
        value: 0,
        duration: 1,
        delay: function (el, i, t) { return 1900 + (i * 80); },
      },
      offset: 0
    })
    .add({
      targets: '.fill.out',
      strokeDashoffset: [
        { value: [anime.setDashoffset, anime.setDashoffset], duration: 1890 },
        {
          value: [0, anime.setDashoffset],
          duration: 800,
          delay: function (el, i) { return (i * 80); },
          easing: 'easeInQuart'
        }
      ],
      offset: 0
    })
    .add({
      targets: '.line.out',
      strokeDashoffset: {
        value: [0, anime.setDashoffset],
        duration: 1200,
        delay: function (el, i, t) { return 2500 + (i * 100); },
        easing: 'easeInQuart'
      },
      strokeWidth: {
        value: [0, 2],
        delay: function (el, i, t) { return 2000 + (i * 100); },
        duration: 200,
        easing: 'linear'
      },
      offset: 0
    })
    .add({
      targets: '.icon',
      opacity: { value: 1, duration: 10, delay: 2800, easing: 'linear' },
      translateY: { value: 60, duration: 800 },
      delay: 4200,
      offset: 0
    })
    .add({
      targets: '.icon-line',
      strokeDashoffset: [
        { value: [anime.setDashoffset, anime.setDashoffset], duration: 3000 },
        { value: 0, duration: 1200, easing: 'easeInOutQuart' }
      ],
      strokeWidth: {
        value: [8, 2],
        delay: 3000,
        duration: 800,
        easing: 'easeInQuad'
      },
      stroke: {
        value: ['#FFF', function (el) { return anime.getValue(el, 'stroke') }],
        duration: 800,
        delay: 3400,
        easing: 'easeInQuad'
      },
      offset: 0
    })
    .add({
      targets: ['.icon-text path', '.icon-text polygon'],
      translateY: [50, 0],
      opacity: { value: [0, 1], duration: 100, easing: 'linear' },
      delay: function (el, i, t) { return 4200 + (i * 20); },
      offset: 0
    });
}

// Wrap every letter in a span

/* const AniBall = () => {
  return (
    <>
      <div classNameName="container">
        <div classNameName="logo"></div>
        <div classNameName="shadow" ></div>
      </div>
    </>
  )
}

export default AniBall




var numberOfEls = 1000;
var duration = 1000;
var midScreenX = window.innerWidth / 2;
var midScreenY = window.innerHeight / 2;
var radius = Math.sqrt(midScreenX * midScreenX + midScreenY * midScreenY);
var fragment = document.createDocumentFragment();

for (var i = 0; i < numberOfEls; i++) {
  var hue = Math.round(360 / numberOfEls * i);
  var angle = Math.random() * Math.PI * 2;
  var el = document.createElement('div');
  el.classNameList.add('particule');
  el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
  el.style.width = '1px';
  el.style.height = '1px';
  anime({
    targets: el,
    width: ['1px', '10px'],
    height: ['1px', '10px'],
    left: [midScreenX + 'px', Math.cos(angle) * radius + midScreenX + 'px'],
    top: [midScreenY + 'px', Math.sin(angle) * radius + midScreenY + 'px'],
    delay: (duration / numberOfEls) * i,
    duration: duration,
    easing: 'easeInExpo',
    loop: true
  });
  fragment.appendChild(el);
}

document.body.appendChild(fragment);
 */

import React from 'react'

const AniBall = () => {
  return (
    <div className="ball drop text-black">
      <p>music</p>
    </div>
  )
}

export default AniBall