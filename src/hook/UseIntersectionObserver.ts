import { MutableRefObject, useEffect } from 'react'

export function UseIntersectionObserver(
	refs: MutableRefObject<HTMLElement | null>[]
) {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in-view')
						observer.unobserve(entry.target)
					}
				})
			},
			{
				threshold: 0.2,
			}
		)

		refs.forEach((ref) => {
			if (ref.current) {
				observer.observe(ref.current)
			}
		})

		return () => {
			refs.forEach((ref) => {
				if (ref.current) {
					observer.unobserve(ref.current)
				}
			})
		}
	}, [refs])
}
