const DataField = ({ label, value }) => {
  return (
    <div className="data-field">
      <strong>{label}:</strong>
      <p>{value}</p>
    </div>
  )
}

export default DataField
