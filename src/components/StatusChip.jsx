import '../App.css'

const StatusChip = ({ status }) => {
  const normalizedStatus = status.toLowerCase().replace(' ', '-')

  return <p className={`status-chip ${normalizedStatus}`}>{status}</p>
}

export default StatusChip
