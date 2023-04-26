export const Spinner = ({
  color = 'border-notion-red',
}: {
  color?: string
}) => {
  return (
    <div className="my-16 flex justify-center">
      <div
        className={`h-10 w-10 animate-spin rounded-full border-4 ${color} border-t-transparent`}
      />
    </div>
  )
}

export default Spinner
