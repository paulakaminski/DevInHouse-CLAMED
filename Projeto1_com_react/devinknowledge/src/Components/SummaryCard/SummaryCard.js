import PropTypes from 'prop-types'

export default function SummaryCard({title, count}) {
    return (
      <div className="card-contador">
        <h4>{title} {count}</h4>
      </div>
    );
  };
  
  SummaryCard.PropTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  };