import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Page from 'templates/Page'
import Img from 'gatsby-image'
import map from 'lodash/map'
import './style.scss'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout location={location}>
        <Meta title={siteTitle} site={siteDescription} />
        <h1 className="text-center p-1 underhead">All posts</h1>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.frontmatter.title
          const path = get(node, 'frontmatter.path') || node.frontmatter.path
          const stars = get(node, 'frontmatter.stars') || node.frontmatter.stars
          const date = get(node, 'frontmatter.date') || node.frontmatter.date
          const category =
            get(node, 'frontmatter.category') || node.frontmatter.category
          const tags = get(node, 'frontmatter.tags') || node.frontmatter.tags
          const authors =
            get(node, 'frontmatter.authors') || node.frontmatter.authors
          const fixed =
            get(node, 'frontmatter.image.childImageSharp.fixed') ||
            node.frontmatter.image.childImageSharp.fixed
          const Badges = ({ items, primary }) =>
            map(items, (item, i) => {
              return (
                <span
                  className={`badge ${
                    primary ? 'badge-primary' : 'badge-secondary'
                  }`}
                  key={i}
                >
                  {item}
                </span>
              )
            })
          const Button = ({ path, label, primary }) => (
            <Link className="readmore" to={path}>
              <span
                className={`btn btn-outline-primary btn-block ${
                  primary ? 'btn-outline-primary' : 'btn-outline-secondary'
                }`}
              >
                {label}
              </span>
            </Link>
          )
          return (
            <div className="article" key={node.frontmatter.path}>
              <div className="container">
                <Link style={{ boxShadow: 'none' }} to={node.frontmatter.path}>
                  {fixed ? (
                    <Img
                      fixed={fixed}
                      style={{
                        display: 'block',
                        margin: '0 auto',
                        width: '100%',
                      }}
                    />
                  ) : (
                    ''
                  )}
                  <div className="info">
                    <h1>{title}</h1>
                    <time dateTime={date}>{date}</time>
                    {Badges({ items: [category], primary: true })}
                    {Badges({ items: tags })}
                    {Badges({ items: [authors], secondary: true })}
                    <div className="stars">
                      {stars == 1 ? <span className="fa fa-star" /> : ''}
                      {stars == 2 ? (
                        <p>
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </p>
                      ) : (
                        ''
                      )}
                      {stars == 3 ? (
                        <p>
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </p>
                      ) : (
                        ''
                      )}
                      {stars == 4 ? (
                        <p>
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </p>
                      ) : (
                        ''
                      )}
                      {stars == 5 ? (
                        <p>
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </p>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </Link>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                {Button({ path, label: 'READ MORE', primary: true })}
                <hr />
              </div>
            </div>
          )
        })}
        <div className="container">
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              listStyle: 'none',
              padding: 0,
            }}
          >
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}
            {Array.from({ length: numPages }, (_, i) => (
              <li
                key={`pagination-number${i + 1}`}
                style={{
                  margin: 0,
                }}
              >
                <Link
                  to={`/${i === 0 ? '' : i + 1}`}
                  style={{
                    textDecoration: 'none',
                    color: i + 1 === currentPage ? '#ffffff' : '',
                    background: i + 1 === currentPage ? '#000000' : '',
                  }}
                >
                  {i + 1}
                </Link>
              </li>
            ))}
            {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            layout
            title
            path
            category
            stars
            authors
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fixed(width: 500) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
