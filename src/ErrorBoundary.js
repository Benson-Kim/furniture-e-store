import React, { Component } from "react";

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	componentDidCatch(error, errorInfo) {
		// catch errors in any components below and re-render with error message
		this.setState({ error: error, errorInfo: errorInfo });
		console.log("Error", error.toString(), errorInfo.componentStack);
	}

	render() {
		if (this.state.errorInfo) {
			return (
				<div
					className='alert bg-yellow-100 rounded-lg py-5 px-6 mb-3 text-base text-yellow-700 inline-flex items-center w-full alert-dismissible fade show'
					role='alert'
				>
					<svg
						aria-hidden='true'
						focusable='false'
						data-prefix='fas'
						data-icon='times-circle'
						className='w-4 h-4 mr-2 fill-current'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 512'
					>
						<path
							fill='currentColor'
							d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'
						></path>
					</svg>
					<strong className='mr-1'>Holy guacamole! </strong>
					So sorry, something went wrong. Catch some icecream as we
					restore it
					<button
						type='button'
						className='btn-close box-content w-4 h-4 p-1 ml-auto text-yellow-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline'
						data-bs-dismiss='alert'
						aria-label='Close'
					></button>
				</div>
			);
		}
	}
}
