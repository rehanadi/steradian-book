const Loading = ({ isSection = false }) => {
  return (
    <section className={`${isSection ? 'section-padding' : ''}`}>
      <h3>Loading...</h3>
    </section>
  )
}

export default Loading