import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import node from './assets/node.png'
import react from './assets/react.png'

export const getLogo = (Types) => {
    switch (Types.toLowerCase()) {
      case 'html': return html;
      case 'css': return css;
      case 'javascript': return js;
      // 대소문자 문제 해결
      case 'node': return node;
      case 'react': return react;
      default: return null; 
    }
  }