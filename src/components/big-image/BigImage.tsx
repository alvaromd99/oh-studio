interface BigImageProps {
	src: string
	alt: string
}

export default function BigImage({ src, alt }: BigImageProps) {
	return <img src={src} alt={alt} className='big-img' loading='lazy' />
}
