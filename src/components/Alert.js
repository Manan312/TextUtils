import React from "react";

export default function Alert({ alertMessage,setAlertMessage  }) {
  return (
        alertMessage && (<div
          className={`alert alert-${alertMessage.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{alertMessage.msg}</strong>
          <button
            type="button"
            className="btn-close"
            onClick={() => setAlertMessage(null)} // ✅ React handles it
            aria-label="Close"
          ></button>
        </div>)
      
  );
}
