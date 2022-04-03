import React from "react"
import Svg, {
	// Circle,
	// Ellipse,
	G,
	// Text,
	// TSpan,
	// TextPath,
	Path,
	// Polygon,
	// Polyline,
	// Line,
	// Rect,
	// Use,
	// Image,
	// Symbol,
	// Defs,
	// LinearGradient,
	// RadialGradient,
	// Stop,
	// ClipPath,
	// Pattern,
	// Mask,
} from 'react-native-svg';
// import Colors from '../../constants/Colors';
export const ExploreSvg = (props) => {
  	return (
	    <Svg width={23} height={22} viewBox="0 0 23 22" {...props}>
	      	<Path
		        d="M11.5 0C5.425 0 .5 4.925.5 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm0 20.1c-5.018 0-9.1-4.082-9.1-9.1s4.082-9.1 9.1-9.1 9.1 4.082 9.1 9.1-4.082 9.1-9.1 9.1zm4.448-14.496L13.39 7.202 11.68 8.268a2.734 2.734 0 012.552 2.552l1.066-1.708 1.597-2.56a.688.688 0 00-.947-.947zm-7.18 5.576l-1.066 1.71-1.598 2.56a.685.685 0 00.583 1.05.683.683 0 00.365-.105l2.559-1.597 1.709-1.066a2.736 2.736 0 01-2.552-2.552zm2.912-2.912c-.06-.004-.118-.018-.18-.018A2.75 2.75 0 008.75 11c0 .062.014.12.018.18a2.736 2.736 0 002.552 2.552c.06.004.118.018.18.018A2.75 2.75 0 0014.25 11c0-.062-.014-.12-.018-.18a2.736 2.736 0 00-2.552-2.552zM10.125 11c0-.758.617-1.375 1.375-1.375s1.375.617 1.375 1.375-.617 1.375-1.375 1.375A1.377 1.377 0 0110.125 11z"
		        fill={props.color}
		        fillRule="evenodd"
	      	/>
	    </Svg>
  	)
}
export const BookingsSvg = (props) => {
  	return (
  		<Svg width={23} height={22} viewBox="0 0 23 22" {...props}>
	      	<Path
		        d="M19.063 1.719A3.441 3.441 0 0122.5 5.156v4.899a.86.86 0 11-1.719 0V5.156a1.72 1.72 0 00-1.718-1.718h-1.118v.859a.86.86 0 11-1.718 0v-.86h-3.91v.86a.86.86 0 11-1.72 0v-.86H6.73v.86a.86.86 0 11-1.718 0v-.86H3.938a1.72 1.72 0 00-1.72 1.72v13.405a1.72 1.72 0 001.72 1.72h6.574a.86.86 0 110 1.718H3.937A3.441 3.441 0 01.5 18.562V5.156A3.441 3.441 0 013.938 1.72h1.074v-.86a.86.86 0 111.718 0v.86h3.868v-.86a.86.86 0 111.718 0v.86h3.91v-.86a.86.86 0 111.72 0v.86h1.116zM17.3 11.602c2.867 0 5.199 2.332 5.199 5.199S20.168 22 17.3 22a5.205 5.205 0 01-5.198-5.2c0-2.866 2.332-5.198 5.199-5.198zm0 8.68c1.919 0 3.48-1.562 3.48-3.481 0-1.92-1.561-3.48-3.48-3.48a3.484 3.484 0 00-3.48 3.48c0 1.919 1.56 3.48 3.48 3.48zm1.246-4.34a.86.86 0 110 1.718H17.3a.86.86 0 01-.86-.86v-1.76a.86.86 0 111.72 0v.901h.386zm-5.2-6.06a.86.86 0 110-1.718.86.86 0 010 1.719zm-3.738 3.74a.86.86 0 110-1.72.86.86 0 010 1.72zm-3.738-3.74a.86.86 0 110-1.718.86.86 0 010 1.719zm0 3.74a.86.86 0 110-1.72.86.86 0 010 1.72zm0 3.737a.86.86 0 110-1.718.86.86 0 010 1.718zm3.738 0a.86.86 0 110-1.718.86.86 0 010 1.718zm0-7.476a.86.86 0 110-1.719.86.86 0 010 1.719zm7.477 0a.86.86 0 110-1.719.86.86 0 010 1.719z"
		        fill={props.color}
		        fillRule="evenodd"
	      	/>
	    </Svg>
  	)
}
export const BookmarksSvg = (props) => {
  	return (
  		<Svg width={16} height={22} viewBox="0 0 16 22" {...props}>
	      	<Path
		        d="M13.467 2.292a.592.592 0 00-.591-.592H2.792a.592.592 0 00-.592.592V19.84l3.46-3.46c1.201-1.2 3.146-1.2 4.348 0l3.46 3.46V2.292zm-.646 19.306l-4.016-4.015a1.375 1.375 0 00-1.943 0l-4.015 4.015A1.375 1.375 0 01.5 20.626V2.292A2.292 2.292 0 012.792 0h10.084a2.292 2.292 0 012.291 2.292v18.334a1.375 1.375 0 01-2.346.972zM8.157 4.219l.754 1.592 1.544.164a.4.4 0 01.208.698L9.436 7.685l.38 1.701a.4.4 0 01-.591.425L7.8 8.945l-1.424.866a.4.4 0 01-.59-.425l.38-1.7-1.23-1.013a.4.4 0 01.21-.698L6.69 5.81l.754-1.592a.4.4 0 01.713 0z"
		        fill={props.color}
		        fillRule="evenodd"
	      	/>
	    </Svg>
  	)
}
	

export const ProfileSvg = (props) => {
  	return (
  		<Svg width={21} height={22} viewBox="0 0 21 22" {...props}>
	      	<Path
		        d="M6.5 0h8a6 6 0 016 6v10a6 6 0 01-6 6h-8a6 6 0 01-6-6V6a6 6 0 016-6zm.214 1.61a4.5 4.5 0 00-4.5 4.5v9.78a4.5 4.5 0 004.5 4.5h7.572a4.5 4.5 0 004.5-4.5V6.11a4.5 4.5 0 00-4.5-4.5H6.714zM10.5 4.333a2.708 2.708 0 110 5.417 2.708 2.708 0 010-5.417zM15.596 15.3a6.667 6.667 0 01-10.192 0 1.25 1.25 0 01-.12-1.383A5.933 5.933 0 0110.5 11a5.933 5.933 0 015.217 2.917c.243.443.195.989-.121 1.383z"
		        fill={props.color}
		        fillRule="evenodd"
	      	/>
	    </Svg>
  	)
}


export const SearchSvg = (props) => {
	return (
		<Svg width={24} height={24} viewBox="0 3 21 22" {...props}>
			  <Path
					d="M10.214 3.929a6.286 6.286 0 014.966 10.14l2.661 2.661a.786.786 0 01-1.11 1.111l-2.663-2.66a6.286 6.286 0 11-3.854-11.252zm0 1.571a4.714 4.714 0 100 9.429 4.714 4.714 0 000-9.429z"
					fill={props.color}
					fillRule="evenodd"
			  />
	  </Svg>
	)
}

export const ChatSvg = (props) => {
  	return (
  		<Svg width={23} height={23} viewBox="0 4 25 25" {...props}>
		        <Path
		          	d="M18 5a6 6 0 016 6v7.8a6 6 0 01-6 6H6V11a6 6 0 016-6h6zm-.043 1.449h-5.914a4.5 4.5 0 00-4.5 4.5V23.35h10.414a4.5 4.5 0 004.5-4.5V10.95a4.5 4.5 0 00-4.5-4.5zM16.78 15.8a.837.837 0 010 1.674h-5.442a.837.837 0 010-1.674h5.442zm2.093-3.6a.837.837 0 010 1.674h-7.535a.837.837 0 010-1.674h7.535z"
		          	fill={props.color}
					fillRule="evenodd"
		        />
	    </Svg>
  	)
}



