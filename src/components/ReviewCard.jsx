const ReviewCard = ({reviewerName, reviewerEmail, comment, rating, date}) => {
  return (
    <div className="w-2/3 sm:w-1/2 mx-auto border-2 px-2 py-1 rounded-md">
        <div className='flex flex-col'>
            <h1>{reviewerName}</h1>
            <p className="text-[10px] sm:text-xs">{reviewerEmail}</p>
            <p className="my-1">{comment}</p>
            <div className="flex flex-row justify-between">
                <h1 className="text-[10px] sm:text-xs">{date}</h1>
                <div className="text-[10px] sm:text-xs font-medium">
                    Rating:{" " + rating}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard