import PropTypes from 'prop-types';

export default {
  id: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
};
