import React from "react"
import "../../components/layout.scss"
import { Page } from "../../components/page"
import Seo from "../../components/seo"
import { Link, graphql, useStaticQuery } from "gatsby"
import shareThumb from "../../images/nemo/share-thumbnail.png"

const NewsIndex = () => {
  const data = useStaticQuery(graphql`
    query IndexPage {
      allMarkdownRemark (
        filter: {fileAbsolutePath: {regex: "/news/"}}
        sort: {frontmatter: {date: DESC}}
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              slug
              date(formatString: "YYYY/MM/DD")
            }
          }
        }
      }
    }
  `);

  return (
    <Page>
      <Seo
        title="ニュース | VOICEVOX"
        description="無料で使える中品質なテキスト読み上げ・歌声合成ソフトウェア。商用・非商用問わず無料で、誰でも簡単にお使いいただけます。イントネーションを詳細に調整することも可能です。"
        image={shareThumb}
      />
      <section className="section">
        <div className="container is-max-desktop">
        <h1 className="title">ニュース</h1>
          {data.allMarkdownRemark.edges.map((edge) => (
            <div key={edge.node.frontmatter.slug} className="mb-3">
              <Link to={`/news/${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
              <p className="has-text-grey-light">{edge.node.frontmatter.date}</p>
            </div>
          ))}
        </div>
      </section>
    </Page>
  )
}

export default NewsIndex
