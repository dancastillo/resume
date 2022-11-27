import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { linksArr, LinkItem } from '../../data';

const Links = () => {
  return (
    <ul>
      {linksArr.map((link: LinkItem) => {
        return (
          <li>
            <a href={link.url}>
              <FontAwesomeIcon icon={link.icon} className='fa-2xl' />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
