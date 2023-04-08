import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import data from 'data/data.json';

const styleBgColor = {
	backgroundColor: generateRandomColor(),
}

const Statistics = () => {
	return (<section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>

  <ul className={css.statList}>
		{data.map(item => (<li key={item.id} className={css.item} style={styleBgColor}>
			<span className={css.label}>{item.label}</span>
      <span className={css.percentage}>{item.percentage}%</span></li>))}
  </ul>
</section>)
}

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(
		PropTypes.exact({
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired
		})
	),
};

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const redHex = red.toString(16);
  const greenHex = green.toString(16);
  const blueHex = blue.toString(16);

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