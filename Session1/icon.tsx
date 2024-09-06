import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEye, faFile } from "@fortawesome/free-solid-svg-icons";

export default function Icon() {
  return (
    <div>
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faEye} />
        <FontAwesomeIcon icon={faFile} />
    </div>
  )
}
