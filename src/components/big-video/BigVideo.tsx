interface BigVideoProps {
	src: string
}
export default function BigVideo({ src }: BigVideoProps) {
	return <video src={src} loop autoPlay muted playsInline></video>
}
