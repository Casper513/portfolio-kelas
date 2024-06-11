const layout = ({childern}: {childern: React.ReactNode}) => {
  return (
    <main id='home' className="container mx-auto max-w-7xl px-6 flex-grow">
        {childern}
    </main>
  )
}

export default layout