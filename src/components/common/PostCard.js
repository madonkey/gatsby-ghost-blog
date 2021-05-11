import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Tags } from '@tryghost/helpers-gatsby';
import { readingTime as readingTimeHelper } from '@tryghost/helpers';

const PostCard = ({ post }) => {
    const url = `/${post.primary_tag.slug}/${post.slug}/`;
    const readingTime = readingTimeHelper(post);
    const tag = post.primary_tag.slug;

    return (
        <div>
            <Link to={url} className="post-card">
                <header className="post-card-header">
                    {post.feature_image && (
                        <img
                            className="post-card-image"
                            src={post.feature_image}
                            alt={post.title}
                            loading="lazy"
                        />
                    )}
                    {post.tags && (
                        <div className="post-card-tags">
                            {' '}
                            <Tags
                                post={post}
                                visibility="public"
                                autolink={false}
                            />
                        </div>
                    )}
                    {/* {post.featured && <span>Featured</span>} */}
                    <h2 className="post-card-title">{post.title}</h2>
                </header>
                <section className="post-card-excerpt">{post.excerpt}</section>
            </Link>
            <footer className="post-card-footer">
                <Link to={`/author/${post.primary_author.slug}`}>
                    <div className="post-card-footer-left">
                        <div className="post-card-avatar">
                            {post.primary_author.profile_image ? (
                                <img
                                    className="author-profile-image"
                                    src={post.primary_author.profile_image}
                                    alt={post.primary_author.name}
                                />
                            ) : (
                                <img
                                    className="default-avatar"
                                    src=""
                                    alt={post.primary_author.name}
                                />
                            )}
                        </div>
                        <span>{post.primary_author.name}</span>
                    </div>
                </Link>
                <div className="post-card-footer-right">
                    {tag !== `showcase` ? (
                        <div>{readingTime}</div>
                    ) : (
                        <div>⭐</div>
                    )}
                </div>
            </footer>
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        primary_tag: PropTypes.string,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
            slug: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default PostCard;
