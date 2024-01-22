interface DoubleImageProps {
	src1: string
	alt1: string
	src2: string
	alt2: string
}

export default function DoubleImage({
	src1,
	alt1,
	src2,
	alt2,
}: DoubleImageProps) {
	return (
		<div className='double-img'>
			<img src={src1} alt={alt1} />
			<img src={src2} alt={alt2} />
		</div>
	)
}
