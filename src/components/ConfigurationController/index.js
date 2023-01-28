import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      console.log(value)
      const {
        showContent,
        showRightNavbar,
        showLeftNavbar,
        onToggleShowContent,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
      } = value

      const changeContent = () => {
        onToggleShowContent()
      }

      const changeRightNavBar = () => {
        onToggleShowRightNavbar()
      }

      const changeLeftNavBar = () => {
        onToggleShowLeftNavbar()
      }

      return (
        <div className="controller-bg">
          <h1 className="layout-heading">Layout</h1>
          <div className="input-label-con">
            {showContent ? (
              <input
                value={showContent}
                type="checkbox"
                className="check-box"
                id="content"
                checked
                onChange={changeContent}
              />
            ) : (
              <input
                value={showContent}
                type="checkbox"
                className="check-box"
                id="content"
                onChange={changeContent}
              />
            )}
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>

          <div className="input-label-con">
            {showLeftNavbar ? (
              <input
                value={showLeftNavbar}
                type="checkbox"
                className="check-box"
                id="leftNav"
                checked
                onChange={changeLeftNavBar}
              />
            ) : (
              <input
                value={showLeftNavbar}
                type="checkbox"
                className="check-box"
                id="leftNav"
                onChange={changeLeftNavBar}
              />
            )}
            <label htmlFor="leftNav" className="label">
              Left Navbar
            </label>
          </div>

          <div className="input-label-con">
            {showRightNavbar ? (
              <input
                value={showRightNavbar}
                type="checkbox"
                className="check-box"
                id="rightNav"
                checked
                onChange={changeRightNavBar}
              />
            ) : (
              <input
                value={showRightNavbar}
                type="checkbox"
                className="check-box"
                id="rightNav"
                onChange={changeRightNavBar}
              />
            )}
            <label htmlFor="rightNav" className="label">
              Right NavBar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
