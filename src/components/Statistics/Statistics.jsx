import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const styleBgColor = {
	backgroundColor: generateRandomColor(),
}

const Statistics = ({title, stats}) => {
	return (<section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

  <ul className={css.statList}>
		{stats.map(item => (<li key={item.id} className={css.item} style={styleBgColor}>
			<span className={css.label}>{item.label}</span>
      <span className={css.percentage}>{item.percentage}%</span></li>))}
  </ul>
</section>)
}

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(
		PropTypes.exact({
      id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired
		})
	),
};

function generateRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let redHex = red.toString(16);
  let greenHex = green.toString(16);
  let blueHex = blue.toString(16);

  if (redHex.length === 1) {
    redHex = "0" + redHex;
  }
  if (greenHex.length === 1) {
    greenHex = "0" + greenHex;
  }
  if (blueHex.length === 1) {
    blueHex = "0" + blueHex;
  }

  return "#" + redHex + greenHex + blueHex;
}

export default Statistics;