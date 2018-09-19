import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledTopNavLink } from './TopNav-styled';

const TopNavLink = ({ children, href, forwardedRef, ...other }) => {
  return (
    <StyledTopNavLink
      ref={forwardedRef}
      href={href}
      as={href ? 'a' : 'span'}
      {...other}
    >
      {children}
    </StyledTopNavLink>
  );
};

TopNavLink.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  href: PropTypes.string
};

TopNavLink.defaultProps = {};

export default withRefs(TopNavLink);
