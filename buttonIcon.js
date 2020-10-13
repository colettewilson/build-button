import React from 'react'

/**
 * Couple of things to note:
 * - width and height is set to 1em
 * - fill is `currentColor` - this will ensure that the icon looks uniform and
 *   that the hover/active state works. You can of course render anything you
 *   would like here, but for plugins that are to be used in more than one
 *   studio, we suggest these rules are followed
 **/
export default () => (
  <svg width="20" height="20" viewBox="0 0 25 25" preserveAspectRatio="xMidYMid" style={{padding: `2px`, marginTop: `2px`, marginRight: `4px`}}>
    <path fill="currentColor" d="M23.5,0H1.5C0.7,0,0,0.7,0,1.5v20C0,22.3,0.7,23,1.5,23h21.9c0.8,0,1.5-0.7,1.5-1.5v-20
      C25,0.7,24.3,0,23.5,0z M24.2,21.5c0,0.4-0.3,0.7-0.7,0.7H1.5c-0.4,0-0.7-0.3-0.7-0.7v-17h23.4V21.5z"/>
    <path fill="currentColor" d="M8.7,16.1c-0.1,0-0.2,0-0.2-0.1l-2.9-2.3c-0.1-0.1-0.2-0.2-0.2-0.3s0.1-0.2,0.2-0.3l2.9-2.3
      c0.2-0.1,0.4-0.1,0.6,0.1c0.1,0.2,0.1,0.4-0.1,0.5l-2.6,2l2.6,2C9.1,15.6,9.2,15.8,9,16C9,16.1,8.8,16.1,8.7,16.1z"/>
    <path fill="currentColor" d="M16.3,16.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1-0.2-0.1-0.4,0.1-0.5l2.6-2l-2.6-2c-0.2-0.1-0.2-0.4-0.1-0.5
      c0.1-0.2,0.4-0.2,0.6-0.1l2.9,2.3c0.1,0.1,0.2,0.2,0.2,0.3s-0.1,0.2-0.2,0.3L16.5,16C16.4,16.1,16.4,16.1,16.3,16.1z"/>
    <path fill="currentColor" d="M11.6,17.8C11.6,17.8,11.6,17.8,11.6,17.8c-0.3-0.1-0.4-0.3-0.4-0.5l1.8-8c0-0.2,0.3-0.3,0.5-0.3
      c0.2,0,0.3,0.3,0.3,0.5l-1.8,8C12,17.7,11.8,17.8,11.6,17.8z"/>
  </svg>
)
