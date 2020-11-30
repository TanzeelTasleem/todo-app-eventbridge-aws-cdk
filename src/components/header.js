import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.5rem`,
      height: "30px",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1100,
        paddingTop: `10px`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            paddingLeft: "20px",
            textTransform: "capitalize",
            fontSize: "30px",
            color: `#757575`,
            fontFamily: "Noto Sans",
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
