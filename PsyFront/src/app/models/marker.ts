
export interface Marker {
    lat: number,
	lng: number,
	label?: string,
	draggable: boolean,
	visible?: boolean,
	psyId?: any,
	psyName?: string
	psyApproach?: string,
	psyCost?: number
}