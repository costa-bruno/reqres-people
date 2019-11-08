import React from 'react';

import './Modal.scss';
import Loading from '../loading'

const Modal = (props) => {

	const { avatar, first_name, last_name, email } = props.user;

	return (
		<div className="opacityLayer">
			<div className="modal">
				<div className="modalHeader">
					<div className="modalButton" onClick={props.action}>
						<span className="buttonLines" />
						<span className="buttonLines" />
					</div>
				</div>
		
				<div className="modalContent">
					{props.modalLoading ? <Loading /> : (

						<>
							<div className="avatarContainer">
								<img className="avatar" src={avatar} alt="avatar"/>
							</div>
							<div className="modalInfo">
								<span className="name">{`${first_name} ${last_name}`}</span>
								<span className="email">{email}</span>
							</div>
						</>

					)}

					{props.errorMessage}
				</div>
			</div>
		</div>
	)
}

export default Modal;
