import React, { Component } from 'react'
import { Index } from 'elasticlunr'
import Link from 'gatsby-link'
import './style.scss'

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div className="underhead">
        <div className="container">
          <h1 className="text-left p-1">
            All posts
            <input
              className="search-input"
              placeholder="Search &#x1F50E;"
              type="text"
              value={this.state.query}
              onChange={this.search}
            />
          </h1>
          <ul>
            {this.state.results[0] ? (
              <h2>Search results for "{this.state.query}"</h2>
            ) : (
              ''
            )}
            {this.state.results.map(page => (
              <li key={page.id}>
                <Link to={'/' + page.path}>{page.title}</Link>
                {page.tags ? ': ' + page.tags.join(`, `) : ''}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
