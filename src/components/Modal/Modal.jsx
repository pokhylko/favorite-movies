import React from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { ReactComponent as StarActiveIcon } from '../../images/star-active.svg';
import { ReactComponent as StarInactiveIcon } from '../../images/star-inactive.svg';
import { ReactComponent as CloseIcon } from '../../images/cancel.svg';

export const Modal = ({
  modalMovie, setModalMovie, favouriteList, changeFavouriteList,
}) => {
  const {
    Title, Poster, Year, Runtime, imdbRating, Plot, Genre, Actors, Director, imdbID,
  } = modalMovie;

  return (
    <div className={cn(
      'modal',
      { 'modal--open': Title },
    )}
    >
      <div className="modal__container">
        {Title && (
          <>
            <div className="modal__left">
              <img className="modal__image" src={Poster} alt={`Poster ${Title}`} />
            </div>

            <div className="modal__right">
              <h3 className="modal__title">{Title}</h3>
              <div className="modal__details">
                <button
                  className="modal__favourite"
                  type="button"
                  onClick={() => changeFavouriteList(imdbID)}
                >
                  {favouriteList.includes(imdbID)
                    ? <StarActiveIcon />
                    : <StarInactiveIcon />}
                </button>
                <p className="modal__year">{Year}</p>
                <p className="modal__runtime">{Runtime}</p>
                <p className="modal__genres">{Genre}</p>
              </div>
              <p className="modal__plot">{Plot}</p>
              <p className="modal__director">{`Director: ${Director}`}</p>
              <p className="modal__starring">{`Starring: ${Actors}`}</p>
              <p className="modal__rating">
                Rating:
                <span className="modal__rating-number">{imdbRating}</span>
              </p>
            </div>

            <button
              className="modal__close"
              type="button"
              onClick={() => setModalMovie({})}
            >
              <CloseIcon />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalMovie: PropTypes.shape({
    Title: PropTypes.string,
    Runtime: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
    Plot: PropTypes.string,
    Genre: PropTypes.string,
    imdbRating: PropTypes.string,
    Actors: PropTypes.string,
    Director: PropTypes.string,
    imdbID: PropTypes.string,
  }),
  setModalMovie: PropTypes.func.isRequired,
  favouriteList: PropTypes.arrayOf(PropTypes.string),
  changeFavouriteList: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  modalMovie: {},
  favouriteList: [],
};
