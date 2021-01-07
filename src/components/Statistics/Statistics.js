import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  const palette = [
    "rgb(255, 99, 71)",
    "rgb(59, 255, 71)",
    "rgb(130, 50, 255)",
    "rgb(255, 72, 94)",
    "rgb(255, 61, 186)",
  ];
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map((stat, color) => (
          <li
            className={s.item}
            key={stat.id}
            style={{ backgroundColor: palette[color] }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
