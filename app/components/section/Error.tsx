const Error = ({ isSection = false }) => {
  return (
    <section className={`${isSection ? 'section-padding' : ''}`}>
      <h3>Something went wrong</h3>
    </section>
  )
}

export default Error
