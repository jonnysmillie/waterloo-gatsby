import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'

const Reviews = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <h1 className="text-center p-1 underhead">Reviews</h1>
      <div className="container">
      </div>
      {posts.map(({ post }, i) => (
        <Post
          data={post}
          options={{
            isIndex: true,
            category: "Reviews"
          }}
          key={i}
        />
      ))}
    </Layout>
  )
}

export default Reviews

export const pageQuery = graphql`
  query ReviewsQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter:{frontmatter:{category:{eq: "Reviews"}}}
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            authors
            stars
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
