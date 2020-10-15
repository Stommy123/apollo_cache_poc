import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { EmptyContent } from '..';

const List = ({
  movies = [],
  className,
  emptyContentText = 'There are no movies to show',
  emptyContentSubText = 'Please adjust your filter or create a new one!',
}) => (
  <div>
    <div className={classNames('movies-list', className)}>
      {movies.length ? (
        movies.map(({ _id, title, year }) => (
          <div className='list-item' key={_id}>
            <Link to={`/movie/${_id}`}>
              {title} - {year}
            </Link>
          </div>
        ))
      ) : (
        <EmptyContent text={emptyContentText} subText={emptyContentSubText} />
      )}
    </div>
  </div>
);

export default List;
