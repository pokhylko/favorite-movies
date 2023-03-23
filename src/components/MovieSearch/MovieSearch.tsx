import React, { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { Input } from '../Input';

import { CATEGORY } from '../../api/api';

import styles from './MovieSearch.module.scss';

interface Props {
  category: keyof typeof CATEGORY;
  keyword?: string;
}

export const MovieSearch: FC<Props> = ({ category, keyword }) => {
  const navigate = useNavigate();

  const [movieKeyword, setMovieKeyword] = useState<string>(keyword || '');

  const goToSearch = useCallback(() => {
    if (movieKeyword.trim().length > 0) {
      navigate(`/${CATEGORY[category]}/search/${movieKeyword}`);
    }
  }, [movieKeyword, category, navigate]);

  useEffect(() => {
    const enterEvent = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.key === 'Enter') {
        goToSearch();
      }
    };
    document.addEventListener('keyup', enterEvent);
    return () => {
      document.removeEventListener('keyup', enterEvent);
    };
  }, [keyword, goToSearch]);

  return (
        <div className={styles.movie_search}>
            <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setMovieKeyword(e.target.value)
                }
            />
            <Button size="small" onClick={goToSearch}>
                Search
            </Button>
        </div>
  );
};
