import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Masonry from 'react-masonry-component';
import Img from 'gatsby-image';
import { Layout } from '../components/common';
import { MetaData } from '../components/common/meta';

const MasonryGallery = ({ data }) => {
    const post = data.ghostPost;
    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <Masonry className="showcase">
                    {data.allDatoCmsWork.edges.map(({ node: work }) => (
                        <div key={work.id} className="showcase__item">
                            <figure className="card">
                                <Link to={`/works/${work.slug}`} className="card__image">
                                    <Img fluid={work.coverImage.fluid} />
                                </Link>
                                <figcaption className="card__caption">
                                    <h6 className="card__title">
                                        <Link to={`/works/${work.slug}`}>{work.title}</Link>
                                    </h6>
                                    <div className="card__description">
                                        <p>{work.excerpt}</p>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </Masonry>
            </Layout>
        </>
    );
};

MasonryGallery.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
};

export default MasonryGallery;

export const query = graphql`
  query MasonryQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`;
