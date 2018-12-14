import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Icon from 'components/Icon'

class What extends React.Component {
  render() {
    const { location, data } = this.props
    const profile = get(data, 'profile.childImageSharp.fixed')
    const work1 = get(data, 'work1.childImageSharp.sizes')
    const work2 = get(data, 'work2.childImageSharp.sizes')
    const back1 = get(data, 'back1.childImageSharp.sizes')
    const back2 = get(data, 'back2.childImageSharp.sizes')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="What" />
        <div>
          <h1 className="text-center p-1 underhead">
            What is Waterloo Review?
          </h1>
          <section className="text-center">
            <div className="container">
              <Img fixed={profile} className="rounded-circle" />
              <h1>Waterloo Review</h1>
              <p className="lead text-muted">
                A website of original reviews and stories.
              </p>
              <div>
                <a
                  ref="twButton"
                  href="https://twitter.com/wlfnmn"
                  className="twitter-follow-button"
                  data-show-count="false"
                >
                  Follow us on Twitter
                </a>
              </div>
            </div>
          </section>

          <section className="bg-primary text-white text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-heading">Reviews</h2>
                  <hr className="border-white" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                  <Icon title="Books" name="book" />
                  <p>Books</p>
                </div>
                <div className="col-lg-3 col-6">
                  <Icon title="Films" name="film" />
                  <p>Films</p>
                </div>
                <div className="col-lg-3 col-6">
                  <Icon title="Theater" name="theater-masks" />
                  <p>Theater</p>
                </div>
                <div className="col-lg-3 col-6">
                  <Icon title="Music" name="music" />
                  <p>Music</p>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="text-center jumboimage">
            <Img sizes={back1} className="cover-image" />
            <div className="container">
              <div className="row cover-over">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading" />
                  <p>
                    <br />

                    <br />
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            className="bg-primary text-white text-center color-inverse"
            id="concept"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-heading">Stories</h2>
                  <hr className="border-white" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                  <Icon title="Writing" name="pen" />
                  <p>Writing</p>
                </div>
                <div className="col-lg-3 col-6">
                  <Icon title="Scroll" name="scroll" />
                  <p>Blogs</p>
                </div>
                <div className="col-lg-3 col-6">
                  <Icon title="Keyboard" name="keyboard" />
                  <p>Digital Stories</p>
                </div>
                <div className="col-lg-3 col-6">
                  <Icon title="Original Artwork" name="images" />
                  <p>Original Artwork</p>
                </div>
              </div>
            </div>
          </section>

          <section id="repos">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading">Submit a review</h2>
                  <p>To submit a review please make sure the following:</p>
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section id="features" className="jumboimage">
            <Img sizes={back2} className="cover-image" />
            <div className="container">
              <div className="row cover-over">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading">Submit a Story</h2>
                  <p>
                    To submit a story, please adhere to the following
                    guidelines:
                  </p>
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default What

export const query = graphql`
  query ProfilePageQuery {
    profile: file(name: { eq: "profile" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    work1: file(name: { eq: "work1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work2: file(name: { eq: "work2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work3: file(name: { eq: "work3" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back1: file(name: { eq: "back1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back2: file(name: { eq: "back2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`
