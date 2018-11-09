import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import NavSeparator from './NavSeparator'

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`

const NavLink = styled(Link)`
  flex: 0 0 auto;
  display: inline-block;
  line-height: 3.125rem;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: 0.025rem;
  color: currentColor;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`

const NavLinks = () =>
  <Wrapper>
    <NavLink to="/">All</NavLink>
    <NavSeparator />
    <NavLink to="reviews">Reviews</NavLink>
    <NavSeparator />
    <NavLink to="stories">Stories</NavLink>
    <NavSeparator />
    <NavLink to="profile">Profile</NavLink>
    <NavSeparator />
    <NavLink to="another">Another</NavLink>
  </Wrapper>

export default NavLinks
