import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      console.log(value)

      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderLeftNavbarComponent = () => (
        <div className="navbar-bg">
          <h1 className="body-heading">Left Navbar Menu</h1>
          <ul className="left-nav-list">
            <li className="left-nav-item">Item 1</li>
            <li className="left-nav-item">Item 2</li>
            <li className="left-nav-item">Item 3</li>
            <li className="left-nav-item">Item 4</li>
          </ul>
        </div>
      )

      const renderContentComponent = () => (
        <div className="content-bg">
          <h1 className="body-heading">Content</h1>
          <p className="body-content-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enum
            ad minim veniam
          </p>
        </div>
      )

      const renderRightNavbarComponent = () => (
        <div className="navbar-bg">
          <h1 className="body-heading">Right Navbar</h1>
          <div className="ad-con">
            <p className="ad-para">Ad 1</p>
          </div>
          <div className="ad-con">
            <p className="ad-para">Ad 2</p>
          </div>
        </div>
      )

      return (
        <div className="body-con">
          {showLeftNavbar ? renderLeftNavbarComponent() : null}
          {showContent ? renderContentComponent() : null}
          {showRightNavbar ? renderRightNavbarComponent() : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
