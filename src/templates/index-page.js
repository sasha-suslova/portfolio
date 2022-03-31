import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  mainpitch,
}) => {
  return (
    <div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="content">
              <div className="tile">
                <img src={mainpitch.image} />
              </div>
              <div className="tile">
                <h3 className="subtitle">{mainpitch.description}</h3>
              </div>
            </div>
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
                Projects
              </h3>
              <BlogRoll />
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/blog">
                  Read more in my blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  mainpitch: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        mainpitch {
          description
        }
      }
    }
  }
`;
