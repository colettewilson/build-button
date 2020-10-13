import React from 'react'

// Sanity uses CSS modules for styling. We import a stylesheet and get an
// object where the keys matches the class names defined in the CSS file and
// the values are a unique, generated class name. This allows you to write CSS
// with only your components in mind without any conflicting class names.
// See https://github.com/css-modules/css-modules for more info.
import styles from './button.css'

class NetlifyBuildButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      html: ''
    }
  }

  onClick = () => {
    fetch(`${process.env.SANITY_STUDIO_API_BUILD_TRIGGER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((data) => {
      const html = `<p>Success!</p><div><img src="https://thumbs.gfycat.com/FamousJadedJohndory-small.gif"></div>`
      this.setState({html: html})
    })
    .catch((error) => {
      const html = `<p>Noooooo!!!! Something went wrong.<br/>${error}</p><div><img src="https://thumbs.gfycat.com/GlaringRevolvingArkshell-max-1mb.gif"></div>`
      this.setState({html: html})
    });
  }

  render() {
    const createMessage = () => {
       return {__html: this.state.html}
    }
    return (
      <div className={styles.container}>
        <h3>Trigger site rebuild?</h3>
        <button className={styles.button} onClick={this.onClick}>Build Site</button>
        <div className={styles.result} dangerouslySetInnerHTML={createMessage()}/>
      </div>
    )
  }
}

export default NetlifyBuildButton
